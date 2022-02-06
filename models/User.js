const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

User.init({
    //Defines the columns in the class
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    }
},{
    hooks: {

        //Sets the email to lowercase before adding it
        beforeCreate: async (newUserData) => {
          newUserData.email = await newUserData.email.toLowerCase();
          return newUserData;
        },
        //Sets the email to lowercase before updating it
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.email = await updatedUserData.email.toLowerCase();
          return updatedUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);

module.exports = User;
