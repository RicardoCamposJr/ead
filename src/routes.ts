// Arquivo para a definição das rotas
// Rotas estáticas devem ficar acima das rotas dinamicas:

import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'
import { episodesController } from './controllers/episodesController'
import { authController } from './controllers/authController'
import { ensureAuth, ensureAuthViaQuery } from './middlewares/auth'
import { favoritesController } from './controllers/favoritesController'

// Instanciando um objeto de Router do Express:
const router = express.Router()

// Rota para cadastro:
router.post('/auth/register', authController.register)

// Rota para login:
router.post('/auth/login', authController.login)

/* Criando rota get para categories e atribuindo o método a ser utilizado na requisição.
Esse método está na pasta controllers. */
router.get('/categories', ensureAuth, categoriesController.index)
router.get('/categories/:id', ensureAuth, categoriesController.show)

// Rotas Courses:
router.get('/courses/featured', ensureAuth, coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', ensureAuth, coursesController.search)
router.get('/courses/:id', ensureAuth, coursesController.show)

// Rotas Episodes:
router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream)

// Rotas Favorites:
router.post('/favorites', ensureAuth, favoritesController.save)
router.get('/favorites', ensureAuth, favoritesController.index)
router.delete('/favorites', ensureAuth, favoritesController.delete)

export { router }