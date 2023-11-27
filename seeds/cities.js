/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('city').del();
  await knex('city').insert([
    {
      city_name: 'New York City',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Washington',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Los Angeles',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'San Francisco',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Las Vegas',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Nashville',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Paris',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Nice',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Strasbourg',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Toulouse',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Bordeaux',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Nantes',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Lyon',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Marseille',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Lille',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Dijon',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Rome',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Florence',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Milan',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Verona',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Venice',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Capri',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Madrid',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Barcelona',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Córdoba',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Seville',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Toledo',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Ibiza',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Athens',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Mykonos',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Santorini',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Olympia',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Piraeus',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Osaka',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Kyoto',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Tokyo',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Fukuoka',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Saitama',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'London',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Manchester',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Birmingham',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Edinburgh',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Oxford',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Shanghai',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Beijing',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Shenzhen',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Hong Kong',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Lima',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Cusco',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Trujillo',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Puno',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Porto',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Lisbon',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Lagos',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      city_name: 'Portimão',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
  ]);
};
