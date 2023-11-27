/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('country').del();
  await knex('country').insert([
    {
      id: '22382b73-894b-11ee-8b60-2cf05d696080',
      country_name: 'United States of America',
    },
    {
      id: '223833e1-894b-11ee-8b60-2cf05d696080',
      country_name: 'France',
    },
    {
      id: '2238353e-894b-11ee-8b60-2cf05d696080',
      country_name: 'Italy',
    },
    {
      id: '223835c9-894b-11ee-8b60-2cf05d696080',
      country_name: 'Spain',
    },
    {
      id: '2238363f-894b-11ee-8b60-2cf05d696080',
      country_name: 'Greece',
    },
    {
      id: '223836b0-894b-11ee-8b60-2cf05d696080',
      country_name: 'Japan',
    },
    {
      id: '22383720-894b-11ee-8b60-2cf05d696080',
      country_name: 'United Kingdom',
    },
    {
      id: '2238378d-894b-11ee-8b60-2cf05d696080',
      country_name: 'China',
    },
    {
      id: '22383803-894b-11ee-8b60-2cf05d696080',
      country_name: 'Peru',
    },
    {
      id: '2238393c-894b-11ee-8b60-2cf05d696080',
      country_name: 'Portugal',
    },
  ]);
};
