require("dotenv").config();

const mongoose = require("mongoose");
const cardSeeder = require("./card");
const bidSeeder = require("./bid");
const sellSeeder = require("./sell");

const seeder = async () => {
  // eslint-disable-next-line no-console
  console.log("Start seeding.");

  await mongoose.connect(
    `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
    {
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  await cardSeeder();
  await bidSeeder();
  await sellSeeder();

  await mongoose.connection.close();
};

// eslint-disable-next-line no-console
seeder().then(() => console.log("End seeding."));
