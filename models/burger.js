var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },
    create: function (burger, callback) {
        orm.insertOne(burger, function (res) {
            callback(res);
        });
    },
    update: function (id, condition, callback) {
        orm.updateOne(id, condition, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;
