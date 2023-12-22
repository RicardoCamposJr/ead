/* Esse arquivo serve para quando utilizarmos o
sequelize-cli para criar o bd, ele pegar as informações
desse arquivo. O sequelize realiza isso analisando o
arquivo .sequelizerc na pasta raíz do projeto. */
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  database: 'onebitflix_development',
  username: 'onebitflix',
  password: 'onebitflix'
}