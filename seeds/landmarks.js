/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('landmark').del();
  await knex('landmark').insert([
    {
      landmark_name: 'Statue of Liberty',
      city_id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Central Park',
      city_id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Empire State Building',
      city_id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Times Square',
      city_id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Brooklyn Bridge',
      city_id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'The Metropolitan Museum of Art',
      city_id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Grand Central Terminal',
      city_id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Rockefeller Center',
      city_id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Museum of Modern Art',
      city_id: 'e274e9c1-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'The White House',
      city_id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'National Mall',
      city_id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Lincoln Memorial',
      city_id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Smithsonian Institution Museums',
      city_id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Capitol Hill',
      city_id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'National Gallery of Art',
      city_id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Washington Monument',
      city_id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Smithsonian National Air and Space Museum',
      city_id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Jefferson Memorial',
      city_id: 'e274f245-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Hollywood Sign',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Griffith Observatory',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Santa Monica Pier',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Venice Beach',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'The Getty Center',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Los Angeles County Museum of Art (LACMA)',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Universal Studios Hollywood',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Disneyland Resort',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Staples Center',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'The Hollywood Walk of Fame',
      city_id: 'e274f36c-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Golden Gate Bridge',
      city_id: 'e274f3fd-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Alcatraz Island',
      city_id: 'e274f3fd-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Fisherman's Wharf",
      city_id: 'e274f3fd-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Pier 39',
      city_id: 'e274f3fd-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Golden Gate Park',
      city_id: 'e274f3fd-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Lombard Street',
      city_id: 'e274f3fd-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'San Francisco Museum of Modern Art (SFMOMA)',
      city_id: 'e274f3fd-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'The Painted Ladies',
      city_id: 'e274f3fd-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Las Vegas Strip',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Fremont Street Experience',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'The Venetian Resort',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Bellagio Hotel and Casino',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'High Roller Observation Wheel',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Stratosphere Tower',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Neon Museum',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Red Rock Canyon National Conservation Area',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Caesars Palace',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'MGM Grand Las Vegas',
      city_id: 'e274f481-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Grand Ole Opry',
      city_id: 'e274f4fe-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Country Music Hall of Fame and Museum',
      city_id: 'e274f4fe-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ryman Auditorium',
      city_id: 'e274f4fe-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Belle Meade Plantation',
      city_id: 'e274f4fe-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Broadway Honky Tonks',
      city_id: 'e274f4fe-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'John Seigenthaler Pedestrian Bridge',
      city_id: 'e274f4fe-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'The Johnny Cash Museum',
      city_id: 'e274f4fe-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Andrew Jackson's Hermitage",
      city_id: 'e274f4fe-8954-11ee-8b60-2cf05d696080',
      country_id: '22382b73-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Eiffel Tower',
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Louvre Museum',
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Notre-Dame Cathedral',
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Montmartre',
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Musée d'Orsay",
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Champs-Élysées',
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Sainte-Chapelle',
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Musée Rodin',
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Panthéon',
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Centre Pompidou',
      city_id: 'e274f576-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Promenade des Anglais',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Castle Hill',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Russian Orthodox Cathedral',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Cours Saleya Flower Market',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Matisse Museum',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Marc Chagall National Museum',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Castle of Nice',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Albert 1st Gardens',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Nice Old Town (Vieux Nice)',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Colline du Château',
      city_id: 'e274f689-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Strasbourg Cathedral',
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'La Petite France',
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Palais Rohan',
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'European Parliament Strasbourg',
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Strasbourg Museum of Fine Arts',
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Parc de l'Orangerie",
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Barrage Vauban',
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ponts Couverts',
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Musée Tomi Ungerer',
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "L'Illiade",
      city_id: 'e274f7d0-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Capitole de Toulouse',
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Basilica of Saint-Sernin',
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Cité de l'Espace",
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Couvent des Jacobins',
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Pont Neuf',
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Musée des Augustins',
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Jardin des Plantes',
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Les Abattoirs',
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Bazacle',
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Hôtel d'Assézat",
      city_id: 'e274f848-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Place de la Bourse',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'La Cité du Vin',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Pont de Pierre',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Basilica of Saint-Michel',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Darwin Ecosystem',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Grosse Cloche',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Darwin Ecosystem',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Cap Sciences',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Saint-André Cathedral',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Jardin Public',
      city_id: 'e274f8c6-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Château des Ducs de Bretagne',
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Les Machines de l'île",
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Cathédrale Saint-Pierre et Saint-Paul',
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Île de Versailles',
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Jardin des Plantes',
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Tour LU',
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Place Royale',
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Musée d'arts de Nantes",
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Quai des Machines',
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Passage Pommeraye',
      city_id: 'e274fabf-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Basilica of Notre-Dame de Fourvière',
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Musée des Confluences',
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Lyon Cathedral',
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Parc de la Tête d'Or",
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Vieux Lyon',
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Place Bellecour',
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Lyon Opera House',
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Traboules',
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Croix-Rousse',
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Institut Lumière',
      city_id: 'e274fb84-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Basilique Notre-Dame de la Garde',
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Vieux-Port',
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Cathédrale La Major',
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Fort Saint-Jean',
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Le Panier',
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name:
        "MuCEM - Musée des Civilisations de l'Europe et de la Méditerranée",
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Calanques National Park',
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'La Corniche',
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Les Terrasses du Port',
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Abbey of Saint Victor',
      city_id: 'e274fbfc-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Palais des Ducs de Bourgogne',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Musée des Beaux-Arts de Dijon',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Notre-Dame de Dijon',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Dijon Cathedral',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Jardin des Sciences',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Parc de la Colombière',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Church of Notre-Dame',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Musée Magnin',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Darcy Garden',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Monument to the Liberation of Dijon',
      city_id: 'e274fe42-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Grand Place',
      city_id: 'e274fd48-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Palais des Beaux-Arts de Lille',
      city_id: 'e274fd48-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Citadel of Lille',
      city_id: 'e274fd48-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'La Piscine Museum',
      city_id: 'e274fd48-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Zoo de Lille',
      city_id: 'e274fd48-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Roubaix Swimming Pool Museum',
      city_id: 'e274fd48-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Vieille Bourse',
      city_id: 'e274fd48-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Lille Grand Palais',
      city_id: 'e274fd48-8954-11ee-8b60-2cf05d696080',
      country_id: '223833e1-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Colosseum',
      city_id: 'e274febe-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Roman Forum',
      city_id: 'e274febe-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Trevi Fountain',
      city_id: 'e274febe-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Pantheon',
      city_id: 'e274febe-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Vatican City',
      city_id: 'e274febe-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Uffizi Gallery',
      city_id: 'e274ff36-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ponte Vecchio',
      city_id: 'e274ff36-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Duomo di Firenze',
      city_id: 'e274ff36-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Galleria Vittorio Emanuele II',
      city_id: 'e274ffac-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Sforza Castle',
      city_id: 'e274ffac-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Piazza Navona',
      city_id: 'e274febe-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Spanish Steps',
      city_id: 'e274febe-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Arena di Verona',
      city_id: 'e2750025-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Juliet's House",
      city_id: 'e2750025-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Castelvecchio Bridge',
      city_id: 'e2750025-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Piazza delle Erbe',
      city_id: 'e2750025-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Scaliger Tombs',
      city_id: 'e2750025-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "St. Mark's Basilica",
      city_id: 'e275009b-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Rialto Bridge',
      city_id: 'e275009b-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Doge's Palace",
      city_id: 'e275009b-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Grand Canal',
      city_id: 'e275009b-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Peggy Guggenheim Collection',
      city_id: 'e275009b-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Blue Grotto',
      city_id: 'e2750116-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Villa San Michele',
      city_id: 'e2750116-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Anacapri',
      city_id: 'e2750116-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Monte Solaro',
      city_id: 'e2750116-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Villa Jovis',
      city_id: 'e2750116-8954-11ee-8b60-2cf05d696080',
      country_id: '2238353e-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Royal Palace of Madrid',
      city_id: 'e275018b-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Prado Museum',
      city_id: 'e275018b-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Retiro Park',
      city_id: 'e275018b-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Puerta del Sol',
      city_id: 'e275018b-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Temple of Debod',
      city_id: 'e275018b-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Sagrada Familia',
      city_id: 'e2750224-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Park Güell',
      city_id: 'e2750224-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'La Rambla',
      city_id: 'e2750224-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Casa Batlló',
      city_id: 'e2750224-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Barri Gòtic (Gothic Quarter)',
      city_id: 'e2750224-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Mosque-Cathedral of Córdoba',
      city_id: 'e27502a0-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Alcázar de los Reyes Cristianos',
      city_id: 'e27502a0-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Roman Bridge',
      city_id: 'e27502a0-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Jewish Quarter (Judería)',
      city_id: 'e27502a0-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Calahorra Tower',
      city_id: 'e27502a0-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Seville Cathedral',
      city_id: 'e2750313-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Alcazar of Seville',
      city_id: 'e2750313-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Plaza de España',
      city_id: 'e2750313-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Metropol Parasol',
      city_id: 'e2750313-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Barrio Santa Cruz',
      city_id: 'e2750313-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Alcázar of Toledo',
      city_id: 'e2750386-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Toledo Cathedral',
      city_id: 'e2750386-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Puente de San Martín',
      city_id: 'e2750386-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Synagogue of Santa María la Blanca',
      city_id: 'e2750386-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Mirador del Valle',
      city_id: 'e2750386-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Dalt Vila',
      city_id: 'e2750427-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Es Vedrà',
      city_id: 'e2750427-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Playa d'en Bossa",
      city_id: 'e2750427-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Cova de Can Marçà',
      city_id: 'e2750427-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Santa Eulalia del Río',
      city_id: 'e2750427-8954-11ee-8b60-2cf05d696080',
      country_id: '223835c9-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Acropolis of Athens',
      city_id: 'e27504bc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Parthenon',
      city_id: 'e27504bc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Temple of Olympian Zeus',
      city_id: 'e27504bc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'National Archaeological Museum',
      city_id: 'e27504bc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Plaka',
      city_id: 'e27504bc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Windmills of Mykonos',
      city_id: 'e275052d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Little Venice',
      city_id: 'e275052d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Delos',
      city_id: 'e275052d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Paraportiani Church',
      city_id: 'e275052d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Archaeological Museum of Mykonos',
      city_id: 'e275052d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Oia Sunset',
      city_id: 'e275059d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Kamari Beach',
      city_id: 'e275059d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Red Beach',
      city_id: 'e275059d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Akrotiri Archaeological Site',
      city_id: 'e275059d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Thira Volcano',
      city_id: 'e275059d-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ancient Olympia',
      city_id: 'e2750614-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Archaeological Museum of Olympia',
      city_id: 'e2750614-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Temple of Hera',
      city_id: 'e2750614-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Olympia Archaeological Site',
      city_id: 'e2750614-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Philippeion',
      city_id: 'e2750614-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Port of Piraeus',
      city_id: 'e2750685-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Mikrolimano',
      city_id: 'e2750685-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Archaeological Museum of Piraeus',
      city_id: 'e2750685-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Porto Leone',
      city_id: 'e2750685-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Piraeus Municipal Theater',
      city_id: 'e2750685-8954-11ee-8b60-2cf05d696080',
      country_id: '2238363f-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Osaka Castle',
      city_id: 'e27506f4-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Dotonbori',
      city_id: 'e27506f4-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Shitenno-ji Temple',
      city_id: 'e27506f4-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Universal Studios Japan',
      city_id: 'e27506f4-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Osaka Aquarium Kaiyukan',
      city_id: 'e27506f4-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Kinkaku-ji (Golden Pavilion)',
      city_id: 'e2750772-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Fushimi Inari Taisha',
      city_id: 'e2750772-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Arashiyama Bamboo Grove',
      city_id: 'e2750772-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Gion District',
      city_id: 'e2750772-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Nijo Castle',
      city_id: 'e2750772-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Tokyo Tower',
      city_id: 'e27507e5-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Senso-ji Temple',
      city_id: 'e27507e5-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Shibuya Crossing',
      city_id: 'e27507e5-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Meiji Shrine',
      city_id: 'e27507e5-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Akihabara District',
      city_id: 'e27507e5-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Fukuoka Castle',
      city_id: 'e2750857-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ohori Park',
      city_id: 'e2750857-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Fukuoka Tower',
      city_id: 'e2750857-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Nokonoshima Island Park',
      city_id: 'e2750857-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Sumiyoshi Shrine',
      city_id: 'e2750857-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Omiya Bonsai Village',
      city_id: 'e2750926-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Saitama Super Arena',
      city_id: 'e2750926-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Musashi Ichinomiya Hikawa Shrine',
      city_id: 'e2750926-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Saitama Railway Museum',
      city_id: 'e2750926-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Iwatsuki Castle',
      city_id: 'e2750926-8954-11ee-8b60-2cf05d696080',
      country_id: '223836b0-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Big Ben',
      city_id: 'e27509a8-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Tower of London',
      city_id: 'e27509a8-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Buckingham Palace',
      city_id: 'e27509a8-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'British Museum',
      city_id: 'e27509a8-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'London Eye',
      city_id: 'e27509a8-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Old Trafford',
      city_id: 'e2750a1b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Manchester Cathedral',
      city_id: 'e2750a1b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'MediaCityUK',
      city_id: 'e2750a1b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Manchester Art Gallery',
      city_id: 'e2750a1b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Albert Square',
      city_id: 'e2750a1b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Bullring Shopping Centre',
      city_id: 'e2750a8d-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Cadbury World',
      city_id: 'e2750a8d-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Library of Birmingham',
      city_id: 'e2750a8d-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Birmingham Museum and Art Gallery',
      city_id: 'e2750a8d-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Victoria Square',
      city_id: 'e2750a8d-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Edinburgh Castle',
      city_id: 'e2750afd-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: "Arthur's Seat",
      city_id: 'e2750afd-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Royal Mile',
      city_id: 'e2750afd-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Holyrood Palace',
      city_id: 'e2750afd-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'National Museum of Scotland',
      city_id: 'e2750afd-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'University of Oxford',
      city_id: 'e2750b81-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Bodleian Library',
      city_id: 'e2750b81-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Radcliffe Camera',
      city_id: 'e2750b81-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ashmolean Museum',
      city_id: 'e2750b81-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Christ Church College',
      city_id: 'e2750b81-8954-11ee-8b60-2cf05d696080',
      country_id: '22383720-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'The Bund',
      city_id: 'e2750bf3-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Shanghai Tower',
      city_id: 'e2750bf3-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Yuyuan Garden',
      city_id: 'e2750bf3-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Shanghai Museum',
      city_id: 'e2750bf3-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Oriental Pearl Tower',
      city_id: 'e2750bf3-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Forbidden City',
      city_id: 'e2750c66-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Great Wall of China',
      city_id: 'e2750c66-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Tiananmen Square',
      city_id: 'e2750c66-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Summer Palace',
      city_id: 'e2750c66-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Temple of Heaven',
      city_id: 'e2750c66-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Window of the World',
      city_id: 'e2750cfb-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Shenzhen Bay Park',
      city_id: 'e2750cfb-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Dameisha Beach',
      city_id: 'e2750cfb-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Shenzhen Safari Park',
      city_id: 'e2750cfb-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Luohu Commercial City',
      city_id: 'e2750cfb-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Victoria Peak',
      city_id: 'e2750d7e-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Hong Kong Disneyland',
      city_id: 'e2750d7e-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ngong Ping 360',
      city_id: 'e2750d7e-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Tsim Sha Tsui Promenade',
      city_id: 'e2750d7e-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Lantau Island',
      city_id: 'e2750d7e-8954-11ee-8b60-2cf05d696080',
      country_id: '2238378d-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Lake Titicaca',
      city_id: 'e2750f9b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Uros Islands',
      city_id: 'e2750f9b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Sillustani',
      city_id: 'e2750f9b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Chucuito',
      city_id: 'e2750f9b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Taquile Island',
      city_id: 'e2750f9b-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Chan Chan',
      city_id: 'e2750f17-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Huaca de la Luna',
      city_id: 'e2750f17-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Huaca del Sol',
      city_id: 'e2750f17-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Chan Chan Archaeological Zone',
      city_id: 'e2750f17-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Plaza de Armas, Trujillo',
      city_id: 'e2750f17-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Machu Picchu',
      city_id: 'e2750ea4-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Sacsayhuamán',
      city_id: 'e2750ea4-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Qorikancha',
      city_id: 'e2750ea4-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ollantaytambo',
      city_id: 'e2750ea4-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Coricancha',
      city_id: 'e2750ea4-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Huaca Pucllana',
      city_id: 'e2750e2f-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Plaza de Armas, Lima',
      city_id: 'e2750e2f-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Larco Museum',
      city_id: 'e2750e2f-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Barranco District',
      city_id: 'e2750e2f-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Magic Water Circuit',
      city_id: 'e2750e2f-8954-11ee-8b60-2cf05d696080',
      country_id: '22383803-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ribeira District',
      city_id: 'e2751014-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Clerigos Tower',
      city_id: 'e2751014-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Livraria Lello',
      city_id: 'e2751014-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Sao Bento Railway Station',
      city_id: 'e2751014-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Palacio da Bolsa',
      city_id: 'e2751014-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Belem Tower',
      city_id: 'e2751088-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Jerónimos Monastery',
      city_id: 'e2751088-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Alfama District',
      city_id: 'e2751088-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Commerce Square',
      city_id: 'e2751088-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Santa Justa Lift',
      city_id: 'e2751088-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Ponta da Piedade',
      city_id: 'e27510fc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Meia Praia',
      city_id: 'e27510fc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Lagos Castle',
      city_id: 'e27510fc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Dona Ana Beach',
      city_id: 'e27510fc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Fort Ponta da Bandeira',
      city_id: 'e27510fc-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Praia da Rocha',
      city_id: 'e2751171-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Alvor Boardwalk',
      city_id: 'e2751171-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Portimao Museum',
      city_id: 'e2751171-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Fortress of Santa Catarina',
      city_id: 'e2751171-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
    {
      landmark_name: 'Praia dos Tres Castelos',
      city_id: 'e2751171-8954-11ee-8b60-2cf05d696080',
      country_id: '2238393c-894b-11ee-8b60-2cf05d696080',
    },
  ]);
};
