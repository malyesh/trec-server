/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('city').del();
  await knex('city').insert([
    {
      id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      city_name: 'New York City',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      city_name: 'Washington',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      city_name: 'Los Angeles',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f3fd-8954-11ee-8b60-2cf05d696080',
      city_name: 'San Francisco',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      city_name: 'Las Vegas',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f4fe-8954-11ee-8b60-2cf05d696080',
      city_name: 'Nashville',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      city_name: 'Paris',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      city_name: 'Nice',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      city_name: 'Strasbourg',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      city_name: 'Toulouse',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      city_name: 'Bordeaux',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      city_name: 'Nantes',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      city_name: 'Lyon',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      city_name: 'Marseille',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274fd48-8954-11ee-8b60-2cf05d696080',
      city_name: 'Lille',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      city_name: 'Dijon',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274febe-8954-11ee-8b60-2cf05d696080',
      city_name: 'Rome',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274ff36-8954-11ee-8b60-2cf05d696080',
      city_name: 'Florence',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e274ffac-8954-11ee-8b60-2cf05d696080',
      city_name: 'Milan',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750025-8954-11ee-8b60-2cf05d696080',
      city_name: 'Verona',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e275009b-8954-11ee-8b60-2cf05d696080',
      city_name: 'Venice',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750116-8954-11ee-8b60-2cf05d696080',
      city_name: 'Capri',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e275018b-8954-11ee-8b60-2cf05d696080',
      city_name: 'Madrid',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750224-8954-11ee-8b60-2cf05d696080',
      city_name: 'Barcelona',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e27502a0-8954-11ee-8b60-2cf05d696080',
      city_name: 'Córdoba',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750313-8954-11ee-8b60-2cf05d696080',
      city_name: 'Seville',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750386-8954-11ee-8b60-2cf05d696080',
      city_name: 'Toledo',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750427-8954-11ee-8b60-2cf05d696080',
      city_name: 'Ibiza',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e27504bc-8954-11ee-8b60-2cf05d696080',
      city_name: 'Athens',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e275052d-8954-11ee-8b60-2cf05d696080',
      city_name: 'Mykonos',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e275059d-8954-11ee-8b60-2cf05d696080',
      city_name: 'Santorini',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750614-8954-11ee-8b60-2cf05d696080',
      city_name: 'Olympia',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750685-8954-11ee-8b60-2cf05d696080',
      city_name: 'Piraeus',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e27506f4-8954-11ee-8b60-2cf05d696080',
      city_name: 'Osaka',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750772-8954-11ee-8b60-2cf05d696080',
      city_name: 'Kyoto',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e27507e5-8954-11ee-8b60-2cf05d696080',
      city_name: 'Tokyo',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750857-8954-11ee-8b60-2cf05d696080',
      city_name: 'Fukuoka',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750926-8954-11ee-8b60-2cf05d696080',
      city_name: 'Saitama',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e27509a8-8954-11ee-8b60-2cf05d696080',
      city_name: 'London',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750a1b-8954-11ee-8b60-2cf05d696080',
      city_name: 'Manchester',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750a8d-8954-11ee-8b60-2cf05d696080',
      city_name: 'Birmingham',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750afd-8954-11ee-8b60-2cf05d696080',
      city_name: 'Edinburgh',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750b81-8954-11ee-8b60-2cf05d696080',
      city_name: 'Oxford',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750bf3-8954-11ee-8b60-2cf05d696080',
      city_name: 'Shanghai',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750c66-8954-11ee-8b60-2cf05d696080',
      city_name: 'Beijing',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750cfb-8954-11ee-8b60-2cf05d696080',
      city_name: 'Shenzhen',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750d7e-8954-11ee-8b60-2cf05d696080',
      city_name: 'Hong Kong',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750e2f-8954-11ee-8b60-2cf05d696080',
      city_name: 'Lima',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750ea4-8954-11ee-8b60-2cf05d696080',
      city_name: 'Cusco',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750f17-8954-11ee-8b60-2cf05d696080',
      city_name: 'Trujillo',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2750f9b-8954-11ee-8b60-2cf05d696080',
      city_name: 'Puno',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2751014-8954-11ee-8b60-2cf05d696080',
      city_name: 'Porto',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2751088-8954-11ee-8b60-2cf05d696080',
      city_name: 'Lisbon',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e27510fc-8954-11ee-8b60-2cf05d696080',
      city_name: 'Lagos',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      id: 'e2751171-8954-11ee-8b60-2cf05d696080',
      city_name: 'Portimão',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
  ]);
};
