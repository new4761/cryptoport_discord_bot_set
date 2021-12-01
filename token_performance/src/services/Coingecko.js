const axios = require("axios").default;
const logger = require("../utils/logger.js");
const baseUrl = "https://api.coingecko.com/api/v3";
require("dotenv").config();

class Coningecko {
  getPrice(coin_name, currency) {}
  getCoinNameFromSymbol(symbol) {
    if(symbol.length()==0) return;
    symbol.toLowerCase();
  }
}
