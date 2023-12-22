/* Arquivo para a configuração e inicialização do
AdminJs */

import AdminJS from "adminjs";
import AdminJSSequelize from '@adminjs/sequelize'
import { sequelize } from "../database";
import AdminJSExpress from '@adminjs/express'
import { adminJsResources } from "./resources";

// Adaptador do banco de dados que está sendo utilizado:
AdminJS.registerAdapter(AdminJSSequelize)

// Criando o AdminJs:
export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
  // Adicionando o que o adminJs poderá fazer:
  resources: adminJsResources,
  // Mudando a aparência do AdminJs:
  branding: {
    companyName: 'OneBitFlix',
    logo: '/onebitflix.svg',
    theme: {
      colors: {
        primary100: '#ff0043',
	      primary80: '#ff1a57',
	      primary60: '#ff3369',
	      primary40: '#ff4d7c',
		    primary20: '#ff668f',
	      grey100: '#151515',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#333333',
	      accent: '#151515',
	      hoverBg: '#151515',
      }
    }
  }
})

// Cronstruindo as rotas do AdminJs:
export const adminJsRouter = AdminJSExpress.buildRouter(adminJs)