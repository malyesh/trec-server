/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('country').del();
  await knex('country').insert([
    {
      country_name: 'United States of America',
    },
    {
      country_name: 'France',
    },
    {
      country_name: 'Italy',
    },
    {
      country_name: 'Spain',
    },
    {
      country_name: 'Greece',
    },
    {
      country_name: 'Japan',
    },
    {
      country_name: 'United Kingdom',
    },
    {
      country_name: 'China',
    },
    {
      country_name: 'Peru',
    },
    {
      country_name: 'Portugal',
    },
  ]);
};
