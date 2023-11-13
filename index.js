const express = require('express');
const cors = require('cors');
const app = express();
const countriesRoute = require('./routes/countries-routes');

const origin = process.env.CORS_ORIGIN;

app.use(
  cors({
    options: origin,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Route endpoint');
  res.send('Welcome to TRec');
});

app.use('/countries', countriesRoute);

app.listen(8080, function () {
  console.log('running on port 8080');
});
