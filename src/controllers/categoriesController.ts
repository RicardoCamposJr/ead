import { Request, Response } from 'express'
import { Category } from '../models'

export const categoriesController = {
  // Método que vai ser executado ao ser feita uma requisição à API:
  index: async (req: Request, res: Response) => {
    try {
      // Retorna um array das categorias:
      const categories = await Category.findAll({
        // Dentro do .findAll podemos definir quais atributos devem ser retornados e a ordem:
        attributes: ['id', 'name', 'position'],
        order: [['position', 'ASC']]
      })
      // Resposta à requisição:
      return res.json(categories)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}