const { DataTypes } = require('sequelize');

const { sequelize } = require('../config/database');
const Product = require('./product');
const Color = require('./color');
const Size = require('./size');

const Product_Variant = sequelize.define('product_variant', {
	product_variant_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
	quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
	state: { type: DataTypes.BOOLEAN, defaultValue: true },
}, {
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: false,
	paranoid: true,
	deletedAt: 'deleted_at'
})

Product.hasMany(Product_Variant, {
	foreignKey: { name: 'product_id', type: DataTypes.INTEGER, allowNull: false }
});
Product_Variant.belongsTo(Product, {
	foreignKey: { name: 'product_id', type: DataTypes.INTEGER, allowNull: false }
});

Color.hasMany(Product_Variant, {
	foreignKey: { name: 'color_id', type: DataTypes.INTEGER, allowNull: false }
});
Product_Variant.belongsTo(Color, {
	foreignKey: { name: 'color_id', type: DataTypes.INTEGER, allowNull: false }
});

Size.hasMany(Product_Variant, {
	foreignKey: { name: 'size_id', type: DataTypes.INTEGER, allowNull: false }
});
Product_Variant.belongsTo(Size, {
	foreignKey: { name: 'size_id', type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Product_Variant;