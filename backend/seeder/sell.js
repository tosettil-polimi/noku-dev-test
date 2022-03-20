const Sell = require("../app/models/monetize/sell");
const Card = require("../app/models/nft/card");
const { randomDate } = require("../helpers/dateHelper");

const makeSeeder = async () => {
  const cardsToBid = await Card.find({});

  return [
    {
      expiration_date: randomDate().toISO(),
      // eslint-disable-next-line no-underscore-dangle
      card: cardsToBid[3]._id,
      price: 11,
    },
    {
      expiration_date: randomDate().toISO(),
      // eslint-disable-next-line no-underscore-dangle
      card: cardsToBid[4]._id,
      price: 8,
    },
    {
      expiration_date: randomDate().toISO(),
      // eslint-disable-next-line no-underscore-dangle
      card: cardsToBid[5]._id,
      price: 39,
    },
  ];
};

module.exports = async () => {
  // eslint-disable-next-line no-console
  console.log("Seeding `Sells` collection...");

  await Sell.deleteMany({});
  await Sell.insertMany(await makeSeeder());
};
