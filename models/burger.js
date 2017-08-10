var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, cb) {
    orm.insertOne(burger_name, function(res) {
      cb(res);
    });
  },
  updateOne: function(burger_id, cb) {
    orm.updateOne(burger_id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;