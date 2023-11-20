/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('country').del();
  await knex('country').insert([
    {
      id: 1,
      country_name: 'United States of America',
    },
    {
      id: 2,
      country_name: 'France',
    },
    {
      id: 3,
      country_name: 'Italy',
    },
    {
      id: 4,
      country_name: 'Spain',
    },
    {
      id: 5,
      country_name: 'Greece',
    },
    {
      id: 6,
      country_name: 'Japan',
    },
    {
      id: 7,
      country_name: 'United Kingdom',
    },
    {
      id: 8,
      country_name: 'China',
    },
    {
      id: 9,
      country_name: 'Peru',
    },
    {
      id: 10,
      country_name: 'Portugal',
    },
  ]);
};
