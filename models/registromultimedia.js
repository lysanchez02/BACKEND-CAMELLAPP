'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registromultimedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  registromultimedia.init({
    descripcion: DataTypes.STRING,
    titulo: DataTypes.STRING,
    url: DataTypes.STRING,
    id_registrocatalogo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'registromultimedia',
    tableName: 'registromultimedia'
  });
  return registromultimedia;
};