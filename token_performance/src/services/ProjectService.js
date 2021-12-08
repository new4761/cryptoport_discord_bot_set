const { connect_db, disconnect_db } = require("../db/Mongoose");
const ListProject = require("../db/models/ListProject");
const logger = require("../utils/logger");
class ProjectService {
  constructor() {
    connect_db();
  }
  count_project() {
    const count = ListProject.countDocuments();
    if (!count) {
      logger.error("error");
    }
    return count;
  }
  add_project(){
    
  }
}

module.exports = ProjectService;
