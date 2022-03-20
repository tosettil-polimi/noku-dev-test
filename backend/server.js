require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
// Add headers before the routes are defined
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.ACCESS_CONTROL_ORIGIN
  );

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Pass to next layer of middleware
  next();
});

require("./routes")(app);

const listen = () => {
  app.listen(process.env.PORT || 3000, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
};

const connect = async () => {
  const options = { keepAlive: 1 };

  await mongoose.connect(
    `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
    options
  );

  return mongoose.connection;
};

const connection = connect();
listen();

module.exports = {
  app,
  connection,
};
