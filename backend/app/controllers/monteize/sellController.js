const Sell = require("../../models/monetize/sell");

module.exports = {
  index: async (req, res) => {
    const bids = await Sell.find({ expiration_date: { $gt: new Date() } })
      .populate("card")
      .lean();

    return res.json(
      bids.map((sell) => ({
        ...sell,
        // eslint-disable-next-line no-underscore-dangle
        _card_id: sell.card._id,
        ...sell.card,
        // eslint-disable-next-line no-underscore-dangle
        _id: sell._id,
        card: undefined,
        __v: undefined,
      }))
    );
  },
};
