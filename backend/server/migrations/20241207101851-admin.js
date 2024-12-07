"use strict";
const bcrypt = require("bcrypt");

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

const password = "123456";

const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
exports.up = function (db, callback) {
  db.createTable(
    "account",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      email: "string",
      password: "string",
    },
    callback
  )
    .then((result) => {
      const promises = [];

      promises.push(
        db.insert("account", {
          email: "admin@gmail.com",
          password: hashedPassword,
        })
      );

      return Promise.all(promises);
    })
    .catch((err) => {});
};

exports.down = function (db, callback) {
  db.dropTable("account", callback);
};

exports._meta = {
  version: 1,
};
