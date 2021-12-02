const logger = require("./utils/logger");
const mongoose = require("mongoose");
require("dotenv").config();

class Mongoose {
  constructor() {
    try {
      mongoose.connect(
        `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/`
      );
    } catch (err) {
      logger.error(err);
    }
  }
}

module.exports = Mongoose;
