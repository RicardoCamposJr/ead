// Arquivos para associações:

import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";

// Category-Course:
Category.hasMany(Course)
Course.belongsTo(Category)

// Course-Episode
Course.hasMany(Episode)
Episode.belongsTo(Course)

export {
  Category,
  Course,
  Episode,
  User
}