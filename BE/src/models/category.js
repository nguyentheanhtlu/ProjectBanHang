const { DataTypes } = require('sequelize');

const { sequelize } = require('../config/database');

const Category = sequelize.define('Category', {
    category_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING,
    level: { type: DataTypes.INTEGER, defaultValue: 1 },
    parent_id: { type: DataTypes.INTEGER, defaultValue: null },
}, {
    timestamps : false
})

module.exports = Category;