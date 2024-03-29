/* Arquivo para a configuração e inicialização do
AdminJs */

import AdminJS from "adminjs";
import AdminJSSequelize from '@adminjs/sequelize'
import { sequelize } from "../database";
import AdminJSExpress from '@adminjs/express'
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./resources/branding";
import { authtenticationOptions } from "./authentication";
import session from "express-session"
import connectSession from "connect-session-sequelize"
import { ADMINJS_COOKIE_PASSWORD } from "../config/enviroment";

const SequelizeStore = connectSession(session.Store)
const store = new SequelizeStore({ db: sequelize })
store.sync()

// Adaptador do banco de dados que está sendo utilizado:
AdminJS.registerAdapter(AdminJSSequelize)

// Criando o AdminJs:
export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
  // Adicionando o que o adminJs poderá fazer:
  resources: adminJsResources,
  // Adicionando traduções:
  locale: locale,
  // Alterando o dashboard:
  dashboard: dashboardOptions,
  // Mudando a aparência do AdminJs:
  branding: brandingOptions
})

// Cronstruindo as rotas do AdminJs:
export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  authtenticationOptions,
  null,
  { 
    resave: false, 
    saveUninitialized: false,
    store: store,
    secret: ADMINJS_COOKIE_PASSWORD}
)