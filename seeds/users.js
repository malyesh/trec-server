/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require('bcryptjs');
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert([
    {
      id: 'eed775b0-8a72-11ee-8b60-2cf05d696080',
      first_name: 'Miriam',
      last_name: 'Alyeshmerni',
      email: 'ma@gmail.com',
      password: bcrypt.hashSync('password'),
      picture: 'IMG_2472.jpg',
    },
    {
      id: '09188604-8c04-11ee-8b60-2cf05d696080',
      first_name: 'Shira',
      last_name: 'Alyeshmerni',
      email: 'sa@gmail.com',
      password: bcrypt.hashSync('password'),
      picture: 'WhatsApp Image 2023-11-25 at 21.24.51_fff9174a.jpg',
    },
    {
      id: '0851b680-8a74-11ee-8b60-2cf05d696080',
      first_name: 'Hannah',
      last_name: 'Tanzer',
      email: 'ht@gmail.com',
      password: bcrypt.hashSync('password'),
      picture: 'A43A2DCA-3E24-4134-B0DA-8C6E8BB170F0.JPG',
    },
    {
      id: '68a02109-8b03-11ee-8b60-2cf05d696080',
      first_name: 'Kayla',
      last_name: 'Silverstien',
      email: 'ks@gmail.com',
      password: bcrypt.hashSync('password'),
      picture: '',
    },
    {
      id: 'ceae4557-8c1c-11ee-8b60-2cf05d696080',
      first_name: 'Adina',
      last_name: 'Schupak',
      email: 'as@gmail.com',
      password: bcrypt.hashSync('password'),
      picture: 'adina.jpg',
    },
  ]);
};
