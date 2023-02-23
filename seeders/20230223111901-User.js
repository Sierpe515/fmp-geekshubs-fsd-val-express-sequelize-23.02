'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Users', [
      {id: 1,name: "Alyna", surname: "Nastas", phone: "666555444", payment:"cash", dni: "alyna@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", RolId:3},
      {id: 2,name: "Ignacio", surname: "Furio", phone: "333222111", payment:"cash", dni: "ignacio@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", RolId:3},
      {id: 3,name: "Marcos", surname: "Garrido", phone: "888777555", payment:"Credit Card", dni: "marcos@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", RolId:3},
 
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};