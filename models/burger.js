var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },
    create: function (burger, condition, callback) {
        orm.insertOne(burger, condition, function (res) {
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
