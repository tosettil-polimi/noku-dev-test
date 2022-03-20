const Bid = require("../app/models/monetize/bid");
const Card = require("../app/models/nft/card");
const { randomDate } = require("../helpers/dateHelper");

const makeSeeder = async () => {
  const cardsToBid = await Card.find({});

  return [
    {
      expiration_date: randomDate().toISO(),
      start_date: randomDate(6, 10, true).toISO(),
      // eslint-disable-next-line no-underscore-dangle
      card: cardsToBid[0]._id,
      starting_price: 3,
      offers: [
        {
          price: 3,
          date: randomDate(5, 5, true).toISO(),
        },
        {
          price: 3.5,
          date: randomDate(4, 4, true).toISO(),
        },
        {
          price: 9,
          date: randomDate(3, 3, true).toISO(),
        },
        {
          price: 12.3,
          date: randomDate(2, 2, true).toISO(),
        },
      ],
    },
    {
      expiration_date: randomDate().toISO(),
      start_date: randomDate(6, 7, true).toISO(),
      // eslint-disable-next-line no-underscore-dangle
      card: cardsToBid[1]._id,
      starting_price: 10,
      offers: [
        {
          price: 10,
          date: randomDate(6, 6, true).toISO(),
        },
        {
          price: 11.5,
          date: randomDate(4, 4, true).toISO(),
        },
        {
          price: 14.02,
          date: randomDate(3, 3, true).toISO(),
        },
        {
          price: 18.99,
          date: randomDate(2, 2, true).toISO(),
        },
        {
          price: 21,
          date: randomDate(0, 1, true).toISO(),
        },
      ],
    },
    {
      expiration_date: randomDate().toISO(),
      start_date: randomDate(5, 6, true).toISO(),
      // eslint-disable-next-line no-underscore-dangle
      card: cardsToBid[2]._id,
      starting_price: 4.45,
      offers: [
        {
          price: 4.45,
          date: randomDate(4, 5, true).toISO(),
        },
        {
          price: 8,
          date: randomDate(3, 3, true).toISO(),
        },
        {
          price: 120,
          date: randomDate(0, 2, true).toISO(),
        },
      ],
    },
  ];
};

module.exports = async () => {
  // eslint-disable-next-line no-console
  console.log("Seeding `Bids` collection...");

  await Bid.deleteMany({});
  await Bid.insertMany(await makeSeeder());
};
