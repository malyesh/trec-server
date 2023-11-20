/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('city').del();
  await knex('city').insert([
    {
      id: 1,
      city_name: 'New York City',
      country_id: 1,
    },
    {
      id: 2,
      city_name: 'Chicago',
      country_id: 1,
    },
    {
      id: 3,
      city_name: 'Washington',
      country_id: 1,
    },
    {
      id: 4,
      city_name: 'Los Angeles',
      country_id: 1,
    },
    {
      id: 5,
      city_name: 'San Francisco',
      country_id: 1,
    },
    {
      id: 6,
      city_name: 'Philadelphia',
      country_id: 1,
    },
    {
      id: 7,
      city_name: 'Las Vegas',
      country_id: 1,
    },
    {
      id: 8,
      city_name: 'Seattle',
      country_id: 1,
    },
    {
      id: 9,
      city_name: 'Austin',
      country_id: 1,
    },
    {
      id: 10,
      city_name: 'Nashville',
      country_id: 1,
    },
    {
      id: 11,
      city_name: 'Paris',
      country_id: 2,
    },
    {
      id: 12,
      city_name: 'Nice',
      country_id: 2,
    },
    {
      id: 13,
      city_name: 'Strasbourg',
      country_id: 2,
    },
    {
      id: 14,
      city_name: 'Toulouse',
      country_id: 2,
    },
    {
      id: 15,
      city_name: 'Bordeaux',
      country_id: 2,
    },
    {
      id: 16,
      city_name: 'Nantes',
      country_id: 2,
    },
    {
      id: 17,
      city_name: 'Lyon',
      country_id: 2,
    },
    {
      id: 18,
      city_name: 'Marseille',
      country_id: 2,
    },
    {
      id: 19,
      city_name: 'Lille',
      country_id: 2,
    },
    {
      id: 20,
      city_name: 'Dijon',
      country_id: 2,
    },
    {
      id: 21,
      city_name: 'Rome',
      country_id: 3,
    },
    {
      id: 22,
      city_name: 'Florence',
      country_id: 3,
    },
    {
      id: 23,
      city_name: 'Turin',
      country_id: 3,
    },
    {
      id: 24,
      city_name: 'Milan',
      country_id: 3,
    },
    {
      id: 25,
      city_name: 'Naples',
      country_id: 3,
    },
    {
      id: 26,
      city_name: 'Verona',
      country_id: 3,
    },
    {
      id: 27,
      city_name: 'Venice',
      country_id: 3,
    },
    {
      id: 28,
      city_name: 'Bologna',
      country_id: 3,
    },
    {
      id: 29,
      city_name: 'Pisa',
      country_id: 3,
    },
    {
      id: 30,
      city_name: 'Capri',
      country_id: 3,
    },
    {
      id: 31,
      city_name: 'Madrid',
      country_id: 4,
    },
    {
      id: 32,
      city_name: 'Granada',
      country_id: 4,
    },
    {
      id: 33,
      city_name: 'Barcelona',
      country_id: 4,
    },
    {
      id: 34,
      city_name: 'San Sebastian',
      country_id: 4,
    },
    {
      id: 35,
      city_name: 'Valencia',
      country_id: 4,
    },
    {
      id: 36,
      city_name: 'Córdoba',
      country_id: 4,
    },
    {
      id: 37,
      city_name: 'Seville',
      country_id: 4,
    },
    {
      id: 38,
      city_name: 'Bilbao',
      country_id: 4,
    },
    {
      id: 39,
      city_name: 'Toledo',
      country_id: 4,
    },
    {
      id: 40,
      city_name: 'Ibiza',
      country_id: 4,
    },
    {
      id: 41,
      city_name: 'Athens',
      country_id: 5,
    },
    {
      id: 42,
      city_name: 'Mykonos',
      country_id: 5,
    },
    {
      id: 43,
      city_name: 'Corinth',
      country_id: 5,
    },
    {
      id: 44,
      city_name: 'Delphi',
      country_id: 5,
    },
    {
      id: 45,
      city_name: 'Naples',
      country_id: 5,
    },
    {
      id: 46,
      city_name: 'Thessaloniki',
      country_id: 5,
    },
    {
      id: 47,
      city_name: 'Santorini',
      country_id: 5,
    },
    {
      id: 48,
      city_name: 'Olympia',
      country_id: 5,
    },
    {
      id: 49,
      city_name: 'Corfu Town',
      country_id: 5,
    },
    {
      id: 50,
      city_name: 'Piraeus',
      country_id: 5,
    },
    {
      id: 51,
      city_name: 'Osaka',
      country_id: 6,
    },
    {
      id: 52,
      city_name: 'Yokohama',
      country_id: 6,
    },
    {
      id: 53,
      city_name: 'Hiroshima',
      country_id: 6,
    },
    {
      id: 54,
      city_name: 'Kyoto',
      country_id: 6,
    },
    {
      id: 55,
      city_name: 'Sapporo',
      country_id: 6,
    },
    {
      id: 56,
      city_name: 'Tokyo',
      country_id: 6,
    },
    {
      id: 57,
      city_name: 'Nagoya',
      country_id: 6,
    },
    {
      id: 58,
      city_name: 'Fukuoka',
      country_id: 6,
    },
    {
      id: 59,
      city_name: 'Kobe',
      country_id: 6,
    },
    {
      id: 60,
      city_name: 'Saitama',
      country_id: 6,
    },
    {
      id: 61,
      city_name: 'London',
      country_id: 7,
    },
    {
      id: 62,
      city_name: 'Manchester',
      country_id: 7,
    },
    {
      id: 63,
      city_name: 'Birmingham',
      country_id: 7,
    },
    {
      id: 64,
      city_name: 'Liverpool',
      country_id: 7,
    },
    {
      id: 65,
      city_name: 'Edinburgh',
      country_id: 7,
    },
    {
      id: 66,
      city_name: 'Bristol',
      country_id: 7,
    },
    {
      id: 67,
      city_name: 'Glasgow',
      country_id: 7,
    },
    {
      id: 68,
      city_name: 'Oxford',
      country_id: 7,
    },
    {
      id: 69,
      city_name: 'Cambridge',
      country_id: 7,
    },
    {
      id: 70,
      city_name: 'Cardiff',
      country_id: 7,
    },
    {
      id: 71,
      city_name: 'Shanghai',
      country_id: 8,
    },
    {
      id: 72,
      city_name: 'Beijing',
      country_id: 8,
    },
    {
      id: 73,
      city_name: 'Guangzhou',
      country_id: 8,
    },
    {
      id: 74,
      city_name: 'Shenzhen',
      country_id: 8,
    },
    {
      id: 75,
      city_name: 'Chengdu',
      country_id: 8,
    },
    {
      id: 76,
      city_name: 'Hangzhou',
      country_id: 8,
    },
    {
      id: 77,
      city_name: 'Chongqing',
      country_id: 8,
    },
    {
      id: 78,
      city_name: 'Hong Kong',
      country_id: 8,
    },
    {
      id: 79,
      city_name: 'Wuhan',
      country_id: 8,
    },
    {
      id: 80,
      city_name: 'Nanjing',
      country_id: 8,
    },
    {
      id: 81,
      city_name: 'Lima',
      country_id: 9,
    },
    {
      id: 82,
      city_name: 'Cusco',
      country_id: 9,
    },
    {
      id: 83,
      city_name: 'Arequipa',
      country_id: 9,
    },
    {
      id: 84,
      city_name: 'Huaraz',
      country_id: 9,
    },
    {
      id: 85,
      city_name: 'Trujillo',
      country_id: 9,
    },
    {
      id: 86,
      city_name: 'Iquitos',
      country_id: 9,
    },
    {
      id: 87,
      city_name: 'Puno',
      country_id: 9,
    },
    {
      id: 88,
      city_name: 'Cajamarca',
      country_id: 9,
    },
    {
      id: 89,
      city_name: 'Chiclayo',
      country_id: 9,
    },
    {
      id: 90,
      city_name: 'Paracas',
      country_id: 9,
    },
    {
      id: 91,
      city_name: 'Porto',
      country_id: 10,
    },
    {
      id: 92,
      city_name: 'Lisbon',
      country_id: 10,
    },
    {
      id: 93,
      city_name: 'Coimbra',
      country_id: 10,
    },
    {
      id: 94,
      city_name: 'Evora',
      country_id: 10,
    },
    {
      id: 95,
      city_name: 'Aveiro',
      country_id: 10,
    },
    {
      id: 96,
      city_name: 'Braga',
      country_id: 10,
    },
    {
      id: 97,
      city_name: 'Sintra',
      country_id: 10,
    },
    {
      id: 98,
      city_name: 'Lagos',
      country_id: 10,
    },
    {
      id: 99,
      city_name: 'Guimaraes',
      country_id: 10,
    },
    {
      id: 100,
      city_name: 'Portimão',
      country_id: 10,
    },
  ]);
};
