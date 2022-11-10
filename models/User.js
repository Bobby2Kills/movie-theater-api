//import our db, Model, DataTypes
const { db } = require('../db')
const { Model, DataTypes } = require('sequelize')

class User extends Model {}

//Creating a User child class from the Model parent class
const User = db.define("users", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
});

//exports
module.exports = { User }