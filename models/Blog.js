const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Blog model
class Blog extends Model { }

// fields and columns created for Blog model
Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ratings: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    city_location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2],
      },
    },
    
  
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
