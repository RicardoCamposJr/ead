// Arquivo para a definição das rotas
// Rotas estáticas devem ficar acima das rotas dinamicas:

import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'

// Instanciando um objeto de Router do Express:
const router = express.Router()

/* Criando rota get para categories e atribuindo o método a ser utilizado na requisição.
Esse método está na pasta controllers. */
router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

// Rotas Courses:
router.get('/courses/featured', coursesController.featured)
router.get('/courses/:id', coursesController.show)

export { router }