const axios = require("axios").default;
const logger = require("../utils/logger.js");

const base_url = "https://api.coingecko.com/api/v3";
const addition_price_data =
  "&include_market_cap=true&include_24hr_change=true";
require("dotenv").config();

class Coningecko {
  async get_price(coin_name, currency) {
    if (currency == undefined) currency = process.env.DEFAULT_CURRENCY;
    currency = currency.toLowerCase();
    return axios
      .get(
        `${base_url}/simple/price?ids=${coin_name}&vs_currencies=${currency}${addition_price_data}`
      )
      .then((response) => response.data)
      .then((data) => {
        // handle success
        data = data[coin_name];
        if (data == undefined) {
          logger.debug(
            `${base_url}/simple/price?ids=${coin_name}&vs_currencies=${currency}${addition_price_data}`
          );
          return `pls make sure that coin name is right => ${this.get_coin_api_list_url()}`;
        }
        // return message with price up% down%  and timestamp
        return (
          `${coin_name} : ${data[currency]} ${currency} ` +
          "\n" +
          " 24h change percent = " +
          //format  % to 2 digit
          parseFloat( data[`${currency}_24h_change`]).toFixed(2) +
          "%" 
        );
      })
      .catch((error) => {
        // handle error
        logger.error(error);
        return "something went wrong pls shoot the dev for fix this bug";
      });
  }
  get_coin_name_from_symbol(symbol) {
    if (symbol.length() == 0) return;
    symbol.toLowerCase();
  }

  get_coin_api_list_url() {
    return "https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit#gid=0";
  }
}

module.exports = Coningecko;
