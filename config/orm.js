var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(res);
            callback(res)
        });
    },
    insertOne: function (burger, condition, callback) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) values (" + burger + "," + condition + ")";
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    },
    updateOne: function (id, condition, callback) {
        var queryString = "UPDATE burgers SET devoured = " + condition + "WHERE id = " + id;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    }
};

module.exports = orm;
