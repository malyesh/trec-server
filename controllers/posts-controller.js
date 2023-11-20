const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');

const index = async (req, res) => {
  try {
    const data = await knex
      .select(
        'post.*',
        'landmark.landmark_name',
        'user.first_name',
        'user.last_name'
      )
      .from('post')
      .join('landmark', 'landmark.id', '=', 'post.landmark_id')
      .join('user', 'post.user_id', '=', 'user.id')
      .whereNotNull('post.caption');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(`Error retrieving posts: ${error}`);
  }
};

const getOneLandmark = async (req, res) => {
  try {
    const data = await knex
      .select(
        'post.*',
        'landmark.landmark_name',
        'user.first_name',
        'user.last_name'
      )
      .from('post')
      .join('landmark', 'landmark.id', '=', 'post.landmark_id')
      .join('user', 'post.user_id', '=', 'user.id')
      .where('landmark.country', req.params.country)
      .where('landmark.city', req.params.city)
      .where('landmark.id', req.params.landmarkId);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(`Error retrieving posts: ${error}`);
  }
};

const add = async (req, res) => {
  const { caption, landmark_id, rating, user_id } = req.body;

  // console.log(req.body);
  if (!req.headers.authorization) {
    return res.status(401).send('Please login');
  }
  // console.log(req.headers.authorization);

  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(' ')[1];

  //check if landmark and user exist

  try {
    // console.log(authToken);
    const decoded = jwt.verify(authToken, process.env.SECRET_KEY);
    // console.log(decoded);
    // console.log('id');
    const user = await knex('user').where({ 'user.id': decoded.id }).first();

    console.log(user);

    const newPost = {
      caption,
      landmark_id,
      user_id: user.id,
      rating,
      picture: '',
    };

    const addPost = await knex('post').insert(newPost);
    const postId = addPost[0];
    console.log(postId);
    // console.log(addPost);
    return res.status(201).json(addPost);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add post ${error}`,
    });
  }
};

module.exports = {
  index,
  add,
  getOneLandmark,
};
