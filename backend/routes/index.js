const { NOT_FOUND, INTERNAL_SERVER_ERROR } = require("http-status");

const bid = require("./monetize/bid");

module.exports = (app) => {
  app.use("/bid", bid);

  /**
   * Error handling
   */

  app.use((err, req, res, next) => {
    // treat as 404
    if (
      err.message &&
      (err.message.indexOf("not found") < 0 ||
        err.message.indexOf("Cast to ObjectId failed") < 0)
    ) {
      return next();
    }
    // eslint-disable-next-line no-console
    console.error(err.stack);
    // error page
    return res.status(INTERNAL_SERVER_ERROR).json({ error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use((req, res) =>
    res.status(NOT_FOUND).json({
      url: req.originalUrl,
      error: "Not found",
    })
  );
};
