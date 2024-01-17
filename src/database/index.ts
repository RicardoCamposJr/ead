/* Com esse arquivo, estamos conectando o backend
com o banco de dados. Nos arquivos sequelizeCli.js
e .sequelizerc nós configuramos o sequelize para 
poder trabalhar com o postgres. */

import { Sequelize } from 'sequelize'
import { DATABASE_URL } from '../config/enviroment'

export const sequelize = new Sequelize(DATABASE_URL, {
  define: {
    underscored: true
  }
})