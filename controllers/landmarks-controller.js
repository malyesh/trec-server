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
  // const landmark = req.params.landmark;
  // const countryId = req.params.countryId;
  // const cityId = req.params.cityId;
  const landmarkId = req.params.landmarkId;
  try {
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
      .where({ landmark_id: landmarkId });
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    return res.status(500).send(`Error retrieving posts about ${landmarkId}`);
  }
};

// const getOne = async (req, res) => {
//   const countryId = req.params.countryId;
//   const cityId = req.params.cityId;
//   const nameId= req.params.nameId;
//   try {
//     const landmarkId = await knex.select('id').from('landmark').where({
//       country: country,
//       city: city,
//       landmark_name: name,
//     });
//     res.status(200).json(landmarkId);
//   } catch (error) {
//     return res
//       .status(500)
//       .send(`Error retrieving ${name} in ${city}, ${country}`);
//   }
// };

module.exports = {
  index,
  getAll,
  // getOne,
};