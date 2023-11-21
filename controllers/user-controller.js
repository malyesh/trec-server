const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const index = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Please login');
  }

  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(authToken, process.env.SECRET_KEY);

    const user = await knex('user').where({ id: decoded.id }).first();

    delete user.password;
    res.json(user);
  } catch (error) {
    return res.status(401).send('Invalid auth token');
  }
};

const signUp = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(400).send('Please enter all required fields');
  }

  const hashedPassword = bcrypt.hashSync(password);

  const newUser = {
    first_name,
    last_name,
    email,
    password: hashedPassword,
    picture: '',
  };
  // console.log(newUser);

  try {
    await knex('user').insert(newUser);
    res.status(201).send('Registration successful');
  } catch (error) {
    res.status(400).send('failed registration');
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const SECRET_KEY = process.env.SECRET_KEY;

  if (!email || !password) {
    return res.status(400).send('Please enter all required fields');
  }

  const user = await knex('user').where({ email: email }).first();
  if (!user) {
    return res.status(400).send('Invalid email');
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).send('Invalid password');
  }

  res.json({
    token: jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    }),
  });
};

const getAll = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Please login');
  }

  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(' ')[1];
  // console.log(authHeader);

  try {
    const decoded = jwt.verify(authToken, process.env.SECRET_KEY);

    const posts = await knex
      .select(
        'post.*',
        'landmark.landmark_name',
        'user.first_name',
        'user.last_name'
      )
      .from('post')
      .join('landmark', 'landmark.id', '=', 'post.landmark_id')
      .join('user', 'post.user_id', '=', 'user.id')
      .where({ 'user.id': decoded.id });
    // .orderBy('post.created_at', 'asc');
    // console.log(data);
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(401).send('Invalid auth token');
  }
};

module.exports = {
  index,
  signUp,
  login,
  getAll,
};
