// const axios = require('axios');
const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
  console.log('get all countries');
  try {
    const countries = await knex.select('id', 'country_name').from('country');
    res.status(200).json(countries);
  } catch (e) {
    return res.status(500).send(`Error getting all countries`);
  }
};

const findOne = async (req, res) => {
  const { countryId } = req.params;
  console.log(`get all cities in country with id ${countryId}`);
  try {
    const cities = await knex
      .select('city_name', 'id')
      .from('city')
      .where({ country_id: countryId });
    res.status(200).json(cities);
  } catch (error) {
    return res.status(500).send(`Error getting cities`);
  }
};

module.exports = {
  index,
  findOne,
};
