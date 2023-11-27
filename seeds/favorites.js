/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('favorite').del();
  await knex('favorite').insert([
    {
      user_id: '68a02109-8b03-11ee-8b60-2cf05d696080',
      post_id: '2643f07f-8ca9-11ee-8b60-2cf05d696080',
    },
    {
      user_id: 'eed775b0-8a72-11ee-8b60-2cf05d696080',
      post_id: '2643f2b3-8ca9-11ee-8b60-2cf05d696080',
    },
    {
      user_id: 'eed775b0-8a72-11ee-8b60-2cf05d696080',
      post_id: '2643f44a-8ca9-11ee-8b60-2cf05d696080',
    },
  ]);
};
