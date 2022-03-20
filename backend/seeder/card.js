const Card = require("../app/models/nft/card");

const seedCards = [
  {
    name: "Vitalik Buterin",
    image: "/cards/1-vitalik-buterin.png",
    type: "master",
    rarity: "common",
  },
  {
    name: "Uniswap",
    image: "/cards/2-uniswap.png",
    type: "exchange",
    rarity: "rare",
  },
  {
    name: "AAVE",
    image: "/cards/3-aave.png",
    type: "cryptocurrency",
    rarity: "common",
  },
  {
    name: "Federal Reserve",
    image: "/cards/4-federal-reserve.png",
    type: "antagonist",
    rarity: "non common",
  },
  {
    name: "Crypto Summer",
    image: "/cards/5-crypto-summer.png",
    type: "jolly",
    rarity: "non common",
  },
  {
    name: "BITCOIN",
    image: "/cards/6-bitcoin.png",
    type: "cryptocurrency",
    rarity: "legendary",
  },
];

module.exports = async () => {
  // eslint-disable-next-line no-console
  console.log("Seeding `Cards` collection...");

  await Card.deleteMany({});
  await Card.insertMany(seedCards);
};
