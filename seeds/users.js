/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert([
    {
      id: 1,
      first_name: 'Miriam',
      last_name: 'Alyeshmerni',
      email: 'ma@gmail.com',
      password: 'password',
    },
    {
      id: 2,
      first_name: 'Shira',
      last_name: 'Alyeshmerni',
      email: 'sa@gmail.com',
      password: 'password',
    },
    {
      id: 3,
      first_name: 'Daniella',
      last_name: 'Kohler',
      email: 'da@gmail.com',
      password: 'password',
    },
    {
      id: 4,
      first_name: 'Kayla',
      last_name: 'Silverstien',
      email: 'ks@gmail.com',
      password: 'password',
    },
    {
      id: 5,
      first_name: 'Hannah',
      last_name: 'Tanzer',
      email: 'ht@gmail.com',
      password: 'password',
    },
    {
      id: 6,
      first_name: 'John',
      last_name: 'Smith',
      email: 'js@gmail.com',
      password: 'password',
    },
  ]);
};
