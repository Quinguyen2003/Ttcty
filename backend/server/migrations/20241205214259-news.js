"use strict";

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
exports.up = function (db, callback) {
  db.createTable(
    "news",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      title: "string",
      cover: "string",
      date: "date",
      author: "string",
      desc: "json",
      category_id: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: 'news_category_id_fk',
          table: "category",
           mapping: 'id'
        }
      },
      tags_id: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: 'news_tags_id_fk',
          table: "tags",
           mapping: 'id'
        }
      }
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("news", callback);
};

exports._meta = {
  version: 1,
};
