const logger = require("../utils/logger");
const mongoose = require("mongoose");
require("dotenv").config();

const connect_db = () => {
  try {
    mongoose.connect(
      `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}?authSource=admin`
    );
  } catch (err) {
    logger.error(err);
  }
};

const disconnect_db = () => {
  try {
    mongoose.disconnect();
  } catch (err) {
    logger.error(err);
  }
  mongoose.disconnect();
};

module.exports = { disconnect_db, connect_db };
