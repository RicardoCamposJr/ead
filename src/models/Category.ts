import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Category {
  id: number,
  name: string,
  position: number
}

/* Informando quais atributos de Category serão
opcionais na hora da criação de um registro no BD. */ 

// Optional<interface, atributosOpcionais>...
export interface CategoryCreationAttributes extends Optional<Category, 'id'> { }

/* Objetos dessa interface terão acesso aos métodos 
dos Model (interface do sequelize) de Category e 
CategoryCreationAttributes. Além de implementarem
a interface Category. */
export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category { }

/* Na aplicação, estamos criando agora o model
de Category: */
export const Category = sequelize.define<CategoryInstance, Category>('Category', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  position: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER
  }
})