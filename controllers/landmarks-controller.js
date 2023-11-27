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

module.exports = {
  index,
  getAll,
};
