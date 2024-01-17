require("dotenv").config()
/* Esse arquivo serve para quando utilizarmos o
sequelize-cli para criar o bd, ele pegar as informações
desse arquivo. O sequelize realiza isso analisando o
arquivo .sequelizerc na pasta raíz do projeto. */
module.exports = {
  development: {
    url: process.env.DATABASE_URL
  },
  production: {
    url: process.env.DATABASE_URL
  }
}