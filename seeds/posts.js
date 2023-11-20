/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('post').del();
  await knex('post').insert([
    {
      id: 1,
      caption: `So many cool views! I didn't get to go inside, but I would highly recommend to!`,
      rating: 4,
      picture: '../assets/col2.jpg',
      landmark_id: 1,
      user_id: 1,
    },
    {
      id: 2,
      caption: `Much bigger than I thought - definitely a must see`,
      rating: 5,
      picture: '../assets/col1.jpg',
      landmark_id: 1,
      user_id: 2,
    },
    {
      id: 3,
      caption: `It was super packed which made it hard to actually enjoy, but definitely a classic`,
      rating: 3,
      picture: '../assets/col3.jpg',
      landmark_id: 1,
      user_id: 6,
    },
    {
      id: 4,
      caption: `SO GORGEOUS - MUST VISIT!!`,
      rating: 5,
      picture: '../assets/grotto1.jpg',
      landmark_id: 12,
      user_id: 5,
    },
    {
      id: 5,
      caption: `If you get sea sick, definitely not the place for you, but still beautiful`,
      rating: 1,
      picture: '../assets/grotto4.jpg',
      landmark_id: 12,
      user_id: 3,
    },
    {
      id: 6,
      caption: `Really long wait, if it's the only thing you plan to do in Capri - don't`,
      rating: 2,
      picture: '../assets/grotto2.jpg',
      landmark_id: 12,
      user_id: 1,
    },
    {
      id: 7,
      caption: `super hot + choppy water + 2 hour wait = not worth it`,
      rating: 0,
      picture: '../assets/grotto3.jpg',
      landmark_id: 12,
      user_id: 6,
    },
    {
      id: 8,
      caption: `INSANE views, you need to do a sunset boat ride`,
      rating: 5,
      picture: '../assets/siene1.jpg',
      landmark_id: 10,
      user_id: 1,
    },
    {
      id: 9,
      caption: `Basically two sights for the price of one!, make sure you have a set time to go, otherwise the pier will be chaos`,
      rating: 4,
      picture: '../assets/siene2.jpg',
      landmark_id: 10,
      user_id: 5,
    },
    {
      id: 10,
      caption: `Do research before you go, definitely makes you appreciate it more, but definitely a classic`,
      rating: 3,
      picture: '../assets/arc2.jpg',
      landmark_id: 8,
      user_id: 1,
    },
    {
      id: 11,
      caption: `Really impressive looking from all angles, but you don't need so much time to go through`,
      rating: 4,
      picture: '../assets/arc1.jpg',
      landmark_id: 8,
      user_id: 2,
    },
    {
      id: 12,
      caption: `A must see at night, it sparkles for 5 minutes every hour on the hour - best view from the Siene!`,
      rating: 5,
      picture: '../assets/eiffel1.jpg',
      landmark_id: 9,
      user_id: 6,
    },
    {
      id: 13,
      caption: `Get better pictures than us please, but such great views of this ICONIC tower`,
      rating: 4,
      picture: '../assets/eiffel2.jpg',
      landmark_id: 9,
      user_id: 1,
    },
    {
      id: 14,
      caption: `Depending on what vantage point you want to see the tower, visiting it can take as long or short as you want, but you MUST visit`,
      rating: 5,
      picture: '../assets/eiffel4.jpg',
      landmark_id: 9,
      user_id: 3,
    },
    {
      id: 15,
      caption: `HIGHLY recommend taking pictures on the Jena Bridge, where the center of the street lines up with the tower - just be careful of oncoming vehicles`,
      rating: 4,
      picture: '../assets/eiffel3.jpg',
      landmark_id: 9,
      user_id: 1,
    },
  ]);
};