/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('landmark').del();
  await knex('landmark').insert([
    {
      id: 1,
      landmark_name: 'Colosseum',
      city_id: '21',
      country_id: '3',
    },
    {
      id: 2,
      landmark_name: 'Trevi Fountain',
      city_id: '21',
      country_id: '3',
    },
    {
      id: 3,
      landmark_name: 'Spanish Steps',
      city_id: '21',
      country_id: '3',
    },
    {
      id: 4,
      landmark_name: 'Pantheon',
      city_id: '21',
      country_id: '3',
    },
    {
      id: 5,
      landmark_name: `St. Peter's Basilica`,
      city_id: '21',
      country_id: '3',
    },
    {
      id: 6,
      landmark_name: 'Sistine Chapel',
      city_id: '21',
      country_id: '3',
    },
    {
      id: 7,
      landmark_name: 'Leaning Tower of Pisa',
      city_id: '29',
      country_id: '3',
    },
    {
      id: 8,
      landmark_name: 'Arc de Triomphe',
      city_id: '11',
      country_id: '2',
    },
    {
      id: 9,
      landmark_name: 'Eiffel Tower',
      city_id: '11',
      country_id: '2',
    },
    {
      id: 10,
      landmark_name: 'Siene River',
      city_id: '11',
      country_id: '2',
    },
    {
      id: 11,
      landmark_name: 'Louvre Museum',
      city_id: '11',
      country_id: '2',
    },
    {
      id: 12,
      landmark_name: 'Blue Grotto',
      city_id: '30',
      country_id: '3',
    },
    {
      id: 13,
      landmark_name: 'Monte Solaro',
      city_id: '30',
      country_id: '3',
    },
    {
      id: 14,
      landmark_name: 'Giardini di Augusto',
      city_id: '30',
      country_id: '3',
    },
  ]);
};
