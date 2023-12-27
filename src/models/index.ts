// Arquivos para associações:

import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";

// Category-Course:
Category.hasMany(Course, { as: 'courses' })
Course.belongsTo(Category)

// Course-Episode
Course.hasMany(Episode, { as: 'episodes' })
Episode.belongsTo(Course)

export {
  Category,
  Course,
  Episode,
  User
}