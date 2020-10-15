const { DataTypes } = require('sequelize');

const applicationDatabaseObject = require('../db');

const User = applicationDatabaseObject.define('user', {
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
//define method will return object of a user.  Entryway into the user table

module.exports = User;