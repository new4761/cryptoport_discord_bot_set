const axios = require("axios").default;
const logger = require("../utils/logger.js");

const base_url = "https://graphql.bitquery.io";
require("dotenv").config();

class Bitquery {
  async get_holder_count() {
    let query = `{
        ethereum(network: ethereum) {
          dexTrades(
            date: {is: "2020-11-01"}
            exchangeName: {is: "Uniswap"}
            baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
            quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
          ) {
            baseCurrency {
              symbol
              address
            }
            baseAmount
            quoteCurrency {
              symbol
              address
            }
            quoteAmount
            trades: count
            quotePrice
            side
          }
        }
      }
      `;
    return axios
      ({method: 'post',url: `${base_url}`, data: { query },headers:{'x-api-key':process.env.BITQUERY_KEY} })
      .then((response) => response.data)
      .then((data) => {
        // handle success
        // data = data[coin_name];
        // if (data == undefined) {
        console.log(JSON.stringify(data.data));
        //logger.debug(`${data}`);
        //    return `pls make sure that coin name is right => ${this.get_coin_api_list_url()}`;
        //  }
        // return message with price up% down%  and timestamp
        //return (
        //  `${coin_name} : ${data[currency]} ${currency} ` +
        //  "\n" +
        //  " 24h change percent = " +
        //  //format  % to 2 digit
        //  parseFloat( data[`${currency}_24h_change`]).toFixed(2) +
        //  "%"
        //);
      })
      .catch((error) => {
        // handle error
        logger.error(error);
        return "something went wrong pls shoot the dev for fix this bug";
      });
  }
}

module.exports = Bitquery;
