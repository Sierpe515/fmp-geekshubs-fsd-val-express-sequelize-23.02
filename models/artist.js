'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.belongsToMany(models.User,
        {through: {model: models.Appointment, unique: false}}
        )
        Artist.belongsTo(models.Rol)
    }
  }
  Artist.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    style: DataTypes.STRING,
    instagram: DataTypes.STRING,
    pricing: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};