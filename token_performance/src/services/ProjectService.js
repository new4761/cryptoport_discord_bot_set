const { connect_db, disconnect_db } = require("../db/Mongoose");
const Project = require("../db/models/Project");
const logger = require("../utils/logger");
const { time_stamp_to_local } = require("../utils/dateHelper");
class ProjectService {
  constructor() {
    connect_db();
  }

  count_project() {
    const count = Project.countDocuments();
    if (!count) {
      logger.error("error");
    }
    return count;
  }
  async add_project(user_name, args) {
    //args = symbol name chain type
    let [symbol, name, chain, type] = [
      args[0].toUpperCase(),
      args[1],
      args[2].toUpperCase(),
      args[3],
    ];
    try {
      let project = new Project();

      project.symbol = symbol;
      project.name = name;
      project.chain = chain;
      project.type = type;
      project.addBy = user_name;
      project.lastUpdate = Date.now();

      //check if exits
      let exits = await Project.findOne(
        {
          $or: [
            { symbol: symbol, chain: chain },
            { name: name, chain: chain },
          ],
        },
        (err, doc) => {
          if (err) throw err;
          return doc;
        }
      ).clone();

      if (exits) {
        logger.info(exits);
        throw new Error(
          `Already have => symbol : ${exits.symbol} | name : ${
            exits.name
          } | chain : ${exits.chain} | type : ${exits.type} | by ${
            exits.addBy
          } | registered_at : ${time_stamp_to_local(exits.registeredAt)} `
        );
      }

      //save to mongodb
      await project.save();
    } catch (err) {
      logger.error(err);
      return err.message;
    }
    let msg = `Added Project | symbol : ${symbol} | name : ${name} | chain : ${chain} | type : ${type} | by ${user_name} `;
    logger.info(msg);
    return msg;
  }
}

module.exports = ProjectService;
