const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Picture extends Model{}

Picture.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    mime: {
        type: DataTypes.STRING,
        allowNull: true
    },
    picture: {
        type: DataTypes.BLOB('long'),
        allowNull: false
    },
   

},
{
    sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'picture',
});

module.exports = Picture;