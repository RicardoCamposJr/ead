// Arquivos para associações:

import { Category } from "./Category";
import { Course } from "./Course";

// Associações:
Category.hasMany(Course)
Course.belongsTo(Category)

export {
  Category,
  Course
}