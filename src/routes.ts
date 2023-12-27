// Arquivo para a definição das rotas

import express from 'express'
import { categoriesController } from './controllers/categoriesController'

// Instanciando um objeto de Router do Express:
const router = express.Router()

/* Criando rota get para categories e atribuindo o método a ser utilizado na requisição.
Esse método está na pasta controllers. */
router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)


export { router }