const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');
const busboy = require('connect-busboy');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const index = async (req, res) => {
  try {
    const data = await knex
      .select(
        'post.*',
        'landmark.landmark_name',
        'user.first_name',
        'user.last_name',
        'user.picture as profile'
      )
      .from('post')
      .join('landmark', 'landmark.id', '=', 'post.landmark_id')
      .join('user', 'post.user_id', '=', 'user.id')
      .whereNotNull('post.caption')
      .orderBy('post.created_at', 'desc');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(`Error retrieving posts: ${error}`);
  }
};

const add = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Please login');
  }

  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(' ')[1];

  const decoded = jwt.verify(authToken, process.env.SECRET_KEY);

  const uploadDir = path.join(__dirname, '../assets');

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  const formData = {};

  req.pipe(req.busboy);

  req.busboy.on('field', (fieldname, val) => {
    formData[fieldname] = val;
  });

  req.busboy.on('file', (fieldname, file, filename) => {
    const saveTo = path.join(uploadDir, filename.filename);

    formData.picture = filename.filename;

    file.pipe(fs.createWriteStream(saveTo));

    file.on('end', () => {
      console.log(`File saved to ${saveTo}`);
    });
  });

  req.busboy.on('finish', async () => {
    try {
      const user = await knex('user').where({ 'user.id': decoded.id }).first();

      const newPost = {
        caption: formData.caption,
        landmark_id: formData.landmark_id,
        user_id: user.id,
        rating: parseInt(formData.rating),
        picture: formData.picture,
      };

      const addPost = await knex('post').insert(newPost);
      const postId = addPost[0];
      return res.status(201).json(addPost);
    } catch (error) {
      res.status(500).json({
        message: `Unable to add post ${error}`,
      });
    }
  });
};

const getOne = async (req, res) => {
  try {
    const data = await knex('post').where('post.id', req.params.postId);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(`Error retrieving posts: ${error}`);
  }
};

const remove = async (req, res) => {
  const postId = req.params.postId;
  // console.log(postId);

  try {
    const rowDeleted = await knex('post').where('id', postId).delete();

    if (rowDeleted === 0) {
      return res
        .status(404)
        .json({ message: `Post with ID ${postId} not found` });
    }
    return res.status(204).json({
      message: `Successfully deleted post with ID ${postId}`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete post ${error}`,
    });
  }
};

module.exports = {
  index,
  add,
  getOne,
  remove,
};
