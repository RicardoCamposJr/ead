import dotenv from "dotenv"
dotenv.config()

import express from "express";
import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";
import { router } from "./routes";
import cors from 'cors';

const app = express();

// Utilizando o cors:
app.use(cors())

// Possibilitando a aplicação a utilizar o JSON nas requisições:
app.use(express.json()) 

// Utilizando as rotas do AdminJs:
// app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter)

/* Colocando o servidor para olhar para a pasta public
como estática (imagens, etc..) */
app.use(express.static('public'))

// Utilizando as rotas da API:
app.use(router)

const PORT = 3000;

app.listen( PORT, () => {
  // Abaixo, estamos testando se a conexão com o bd está funcionando:
  sequelize.authenticate().then(() => {
    console.log('DB connection succesfull!')
  })
  console.log(`The server started successfuly at port ${PORT}.`);
});