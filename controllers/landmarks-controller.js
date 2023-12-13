const knex = require('knex')(require('../knexfile'));

const index = async (req, res) => {
  const countryId = req.params.countryId;
  const cityId = req.params.cityId;
  try {
    const landmarks = await knex('landmark').where({
      country_id: countryId,
      city_id: cityId,
    });
    res.status(200).json(landmarks);
  } catch (error) {
    return res
      .status(500)
      .send(`Error retrieving landmarks in ${cityId}, ${countryId}`);
  }
};

const getAll = async (req, res) => {
  const landmarkId = req.params.landmarkId;
  try {
    const posts = await knex
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
      .where({ landmark_id: landmarkId })
      .orderBy('post.created_at', 'desc');
    res.status(200).json(posts);
  } catch (error) {
    return res.status(500).send(`Error retrieving posts about ${landmarkId}`);
  }
};

const bySearch = async (req, res) => {
  const search = req.params.search;

  try {
    const country = await knex('country').where({ country_name: search });
    if (country.length > 0) {
      try {
        const landmarks = await knex
          .select('landmark.*', 'country.country_name', 'city.city_name')
          .from('landmark')
          .join('country', 'country.id', '=', 'landmark.country_id')
          .join('city', 'city.id', '=', 'landmark.city_id')
          .where({ 'landmark.country_id': country[0].id });
        return res.status(200).json(landmarks);
      } catch (e) {
        return res.status(500).send(`Error retrieving country landmarks`);
      }
    } else {
      const city = await knex('city').where({ city_name: search });
      if (city.length > 0) {
        try {
          const landmarks = await knex
            .select('landmark.*', 'country.country_name', 'city.city_name')
            .from('landmark')
            .join('country', 'country.id', '=', 'landmark.country_id')
            .join('city', 'city.id', '=', 'landmark.city_id')
            .where({
              'landmark.city_id': city[0].id,
            });
          return res.status(200).json(landmarks);
        } catch (e) {
          return res.status(500).send(`Error retrieving city landmarks`);
        }
      } else {
        try {
          const landmarks = await knex
            .select('landmark.*', 'country.country_name', 'city.city_name')
            .from('landmark')
            .join('country', 'country.id', '=', 'landmark.country_id')
            .join('city', 'city.id', '=', 'landmark.city_id')
            .whereILike('landmark_name', `%${search}%`);
          return res.status(200).json(landmarks);
        } catch (e) {
          return res.status(500).send(`Error retrieving landmark`);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(searchBy);
};

const all = async (req, res) => {
  try {
    const landmarks = await knex('landmark');
    res.status(200).json(landmarks);
  } catch (error) {
    return res.status(500).send(`Error retrieving landmarks`);
  }
};

module.exports = {
  index,
  getAll,
  bySearch,
  all,
};
