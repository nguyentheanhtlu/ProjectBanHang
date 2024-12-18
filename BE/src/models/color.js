const { DataTypes } = require('sequelize');

const { sequelize } = require('../config/database');

const Color = sequelize.define('Color', {
    color_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    color_name: DataTypes.STRING,
}, {
    timestamps : false
})

module.exports = Color;