const knex = require('knex')(require('../knexfile'));

const index = async (_req, res) => {
  try {
    const cities = await knex.select('id', 'city_name').from('city');
    res.status(200).json(cities);
  } catch (e) {
    return res.status(500).send(`Error getting all cities`);
  }
};

module.exports = {
  index,
};
