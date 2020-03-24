var connection = require("./connections");

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
    insertOne: function (burger, callback) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) values ('" + burger + "', '0')";
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    },
    updateOne: function (id, callback) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = " + id;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    }
};

module.exports = orm;
