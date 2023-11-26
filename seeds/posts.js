/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('post').del();
  await knex('post').insert([
    {
      caption: `If you get sea sick, definitely not the place for you, but still beautiful`,
      rating: 3,
      picture: 'grotto4.jpg',
      landmark_id: 'dcdade30-895b-11ee-8b60-2cf05d696080',
      user_id: '09188604-8c04-11ee-8b60-2cf05d696080',
    },
    {
      caption: `Really long wait, if it's the only thing you plan to do in Capri - don't`,
      rating: 2,
      picture: 'grotto2.jpg',
      landmark_id: 'dcdade30-895b-11ee-8b60-2cf05d696080',
      user_id: '0851b680-8a74-11ee-8b60-2cf05d696080',
    },
    {
      caption: `super hot + choppy water + 2 hour wait = not worth it`,
      rating: 0,
      picture: 'grotto3.jpg',
      landmark_id: 'dcdade30-895b-11ee-8b60-2cf05d696080',
      user_id: '68a02109-8b03-11ee-8b60-2cf05d696080',
    },
    {
      caption: `its a long wait to get inside, but it is GORGEOUS!! (pro-tip - give the man a little extra tip for him to let you jump in)`,
      rating: 4,
      picture: 'grotto5.jpg',
      landmark_id: 'dcdade30-895b-11ee-8b60-2cf05d696080',
      user_id: 'ceae4557-8c1c-11ee-8b60-2cf05d696080',
    },
    {
      caption: `Basically two sights for the price of one!, take a boat ride at sunset to see the tower shine like this!`,
      rating: 4,
      picture: 'siene2.jpg',
      landmark_id: 'dcd99eb1-895b-11ee-8b60-2cf05d696080',
      user_id: 'ceae4557-8c1c-11ee-8b60-2cf05d696080',
    },
    {
      caption: `A must see at night, it sparkles for 5 minutes every hour on the hour - best view from the Siene!`,
      rating: 5,
      picture: 'eiffelnight.jpg',
      landmark_id: 'dcd99eb1-895b-11ee-8b60-2cf05d696080',
      user_id: '68a02109-8b03-11ee-8b60-2cf05d696080',
    },
    {
      caption: `Get better pictures than us please, but such great views of this ICONIC tower`,
      rating: 3,
      picture: 'eiffeltouch.jpg',
      landmark_id: 'dcd99eb1-895b-11ee-8b60-2cf05d696080',
      user_id: 'eed775b0-8a72-11ee-8b60-2cf05d696080',
    },
    {
      caption: `you can literally spend an entire day just finding cool picture places with the tower, but nothing beats it up close!`,
      rating: 4,
      picture: 'eiffel4.jpg',
      landmark_id: 'dcd99eb1-895b-11ee-8b60-2cf05d696080',
      user_id: '0851b680-8a74-11ee-8b60-2cf05d696080',
    },
    {
      caption: `seeing the Mona Lisa is obviously necessary, but don't forget to look around at the rest of the incredible art!`,
      rating: 4,
      picture: 'monalisa.jpg',
      landmark_id: 'dcd99f4e-895b-11ee-8b60-2cf05d696080',
      user_id: '68a02109-8b03-11ee-8b60-2cf05d696080',
    },
    {
      caption: `INSANE inside and out!!! you need to make time for the Louvre, otherwise, did you even Paris?`,
      rating: 5,
      picture: 'louvre.jpg',
      landmark_id: 'dcd99f4e-895b-11ee-8b60-2cf05d696080',
      user_id: '09188604-8c04-11ee-8b60-2cf05d696080',
    },
    {
      caption: `the architecture is just so impressive and the area is huge! you need a lot of time to do the Louvre right`,
      rating: 4,
      picture: 'louvre2.jpg',
      landmark_id: 'dcd99f4e-895b-11ee-8b60-2cf05d696080',
      user_id: 'eed775b0-8a72-11ee-8b60-2cf05d696080',
    },
    {
      caption: `superr crowded, but a fun spot to go to, dont forget a euro to make a wish!`,
      rating: 3,
      picture: 'trevi.jpg',
      landmark_id: 'dcdad07e-895b-11ee-8b60-2cf05d696080',
      user_id: '09188604-8c04-11ee-8b60-2cf05d696080',
    },
  ]);
};
