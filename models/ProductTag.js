const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection.js');

class ProductTag extends Model {}

ProductTag.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productTag',
});

module.exports = ProductTag;