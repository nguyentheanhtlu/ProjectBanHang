const { DataTypes } = require('sequelize');

const { sequelize } = require('../config/database');

const Size = sequelize.define('Size', {
    size_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    size_name: DataTypes.STRING,
}, {
    timestamps : false
})

module.exports = Size;