const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const countriesRoute = require('./routes/countries-routes');
const landmarksRoute = require('./routes/landmarks-routes');
const userRoute = require('./routes/user-routes');
const favoritesRoute = require('./routes/favorites-routes');
const postRoute = require('./routes/posts-routes');
const busboy = require('connect-busboy');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const origin = process.env.CORS_ORIGIN;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(express.static('assets'));
app.use(busboy());
app.use(bodyParser.json());
app.use((req, res, next) => {
  if (
    req.url === '/user' ||
    req.url === '/user/posts' ||
    req.url === '/favorites' ||
    req.url === '/favorites/:postId' ||
    req.url === '/favorites/posts'
  ) {
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'No token. Unauthorized.' });
    }
    const token = req.headers.authorization.slice('Bearer '.length);
    if (jwt.verify(token, SECRET_KEY)) {
      req.decoded = jwt.decode(token);
      next();
    } else {
      return res.status(403).json({ error: 'No token. Unauthorized.' });
    }
  } else {
    next();
  }
});
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to TRec');
});

app.use('/posts', postRoute);
app.use('/user', userRoute);
app.use('/countries', countriesRoute);
app.use('/landmarks', landmarksRoute);
app.use('/favorites', favoritesRoute);

app.listen(8080, function () {
  console.log('running on port 8080');
});
