import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Course {
  id: number
  name: string
  synopsis: string
  thumbnailUrl: string
  featured: boolean
  categoryId: number
}

// Para criar um curso, não precisamos do id, da thumbnail, nem do atributo featured:
export interface CourseCreationAttributes extends Optional<Course, 'id' | 'thumbnailUrl' | 'featured' > {}

// Toda instancia de CourseInterface terá acesso aos métodos de Model, com base no model de Course e CourseCreationAttributes:
export interface CourseInstance extends Model<Course, CourseCreationAttributes>, Course {}

// Criando o model de Course:
export const Course = sequelize.define<CourseInstance, Course>('Course', {
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
  synopsis: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  thumbnailUrl: {
    type: DataTypes.STRING
  },
  featured: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
})