const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');

const favorite = async (req, res) => {
  const { post_id } = req.body;

  if (!req.headers.authorization) {
    return res.status(401).send('Please login');
  }
  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(' ')[1];
  const decoded = jwt.verify(authToken, process.env.SECRET_KEY);

  const favPost = {
    user_id: decoded.id,
    post_id: post_id,
  };
  try {
    const addFav = await knex('favorite').insert(favPost);
    return res.status(201).json(addFav);
  } catch (error) {
    res.status(500).json(error);
  }
};

const isFavorited = async (req, res) => {
  const postId = req.params.postId;

  if (!req.headers.authorization) {
    return res.status(401).send('Please login');
  }
  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(' ')[1];
  const decoded = jwt.verify(authToken, process.env.SECRET_KEY);

  const favorited = await knex
    .select('id')
    .from('favorite')
    .where({ post_id: postId, user_id: decoded.id });
  return res.status(200).json(favorited);
};

module.exports = {
  favorite,
  isFavorited,
};
