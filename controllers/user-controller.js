const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const busboy = require('connect-busboy');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

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
    // if (filename) {
    const saveTo = path.join(uploadDir, filename.filename);

    formData.picture = filename.filename;

    file.pipe(fs.createWriteStream(saveTo));

    file.on('end', () => {
      console.log(`File saved to ${saveTo}`);
    });
    // }
  });

  req.busboy.on('finish', async () => {
    const hashedPassword = bcrypt.hashSync(formData.password);

    const newUser = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: hashedPassword,
      picture: formData.picture ? formData.picture : '',
    };
    console.log(newUser);

    try {
      const addUser = await knex('user').insert(newUser);
      res.status(201).json(addUser);
    } catch (error) {
      res.status(400).send('failed registration');
    }
    // res.status(200).send('User created successfully');
  });
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
      .where({ 'user.id': decoded.id })
      .orderBy('post.created_at', 'desc');
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
