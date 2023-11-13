const axios = require('axios');

const index = async (_req, res) => {
  console.log('get all countries');
  const response = await axios.get(`${apiBody}`);
  res.status(200).json(response.data.data.map((country) => country.country));
  // res.status(200).json(response.data.data);
};

const findOne = async (req, res) => {
  const { country } = req.params;
  console.log(`get all cities in ${country}`);
  const response = await axios.post(`${apiBody}/cities`, { country: country });
  res.status(200).json(response.data.data);
};

module.exports = {
  index,
  findOne,
};
