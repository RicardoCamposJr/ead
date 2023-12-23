'use strict';

// Os seeders servem para popular o banco de dados.
// Para popular, rode: npx sequelize-cli db:seed:all
// Para excluir os registros, rode: npx sequelize-cli db:seed:undo:all
// Para executar um seeder específico, rode: npx sequelize-cli db:seed --seed 'caminho do seeder'

module.exports = {
  async up (queryInterface, Sequelize) {
    // O .bulkInsert serve para inserir registros em grande quantidade.
    await queryInterface.bulkInsert('categories', [
      { name: 'Tecnologias Back-end', position: 1, created_at: new Date(), updated_at: new Date() },
      { name: 'Tecnologias Front-end', position: 2, created_at: new Date(), updated_at: new Date() },
      { name: 'Ferramentas de Desenvolvimento', position: 3, created_at: new Date(), updated_at: new Date() },
      { name: 'Soft-skills', position: 4, created_at: new Date(), updated_at: new Date() },
      { name: 'Carreira', position: 5, created_at: new Date(), updated_at: new Date() },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    // O .bulkDelete é o oposto do .bulkInsert
    await queryInterface.bulkDelete('categories', null, {})
  }
};
