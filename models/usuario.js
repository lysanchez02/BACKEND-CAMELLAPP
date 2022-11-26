'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      // define association here
      usuario.hasMany(models.empleador, {foreignKey: 'id_usuario'});
    }
  }
  usuario.init({

    correo: {
      type: DataTypes.STRING,
      
    },

    contrasena:{ 
      type: DataTypes.STRING,
    },

    rol:{

    type: DataTypes.STRING
  } 
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuario'
  });
  return usuario;
};