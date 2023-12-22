import express from "express";
import { sequelize } from "./database";

const app = express();

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
  // Abaixo, estamos testando se a conexão com o bd está funcionando:
  sequelize.authenticate().then(() => {
    console.log('DB connection succesfull!')
  })
  console.log(`The server started successfuly at port ${PORT}.`);
});