/* Com esse arquivo, estamos conectando o backend
com o banco de dados. Nos arquivos sequelizeCli.js
e .sequelizerc nós configuramos o sequelize para 
poder trabalhar com o postgres. */

import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'onebitflix_development',
  username: 'onebitflix',
  password: 'onebitflix',
  define: {
    underscored: true
  }
})