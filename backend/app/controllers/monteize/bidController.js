const Bid = require("../../models/monetize/bid");

module.exports = {
  index: async (req, res) => {
    const bids = await Bid.find({ expiration_date: { $gt: new Date() } })
      .populate("card")
      .lean();

    return res.json(
      bids.map((bid) => ({
        ...bid,
        // eslint-disable-next-line no-underscore-dangle
        _card_id: bid.card._id,
        ...bid.card,
        // eslint-disable-next-line no-underscore-dangle
        _id: bid._id,
        bid: {
          bidNumber: bid.offers.length,
          lastOfferPrice:
            (bid.offers.length > 0 && bid.offers.pop().price) ||
            bid.starting_price,
        },
        card: undefined,
        offers: undefined,
        __v: undefined,
      }))
    );
  },
};
