import { Sequelize, DataTypes } from "sequelize";
import pool from "../config/db.config";

const sequelize = new Sequelize(pool);

const User = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_uno:{
        type:DataTypes.STRING,
        allownull:false
    },
    apellido_dos:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    nickname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nacto:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    token:{
        type: DataTypes.STRING
    },
    confirmado:{
        type:DataTypes.BOOLEAN
    }
}, {
    // Ajuste de scopes para eliminar datos sensibles
    scopes: {
      eliminarDatos: {
        attributes: {
          exclude: ['password', 'token', 'confirmado', 'createdAt', 'updatedAt'] // Corrección en el nombre de 'updatedAt'
        },
      },
    },
  });
  
  export default User;