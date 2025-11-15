'use strict';
const {Op} = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'A320',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
  },
      {
        modelNumber: 'B737',
        capacity: 160,
        createdAt: new Date(),
        updatedAt: new Date()
  },
      {
        modelNumber: 'E190',
        capacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
  },
]);},
  
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', null, {[Op.or]:[
      {modelNumber: 'A320'},
      {modelNumber: 'B737'},
      {modelNumber: 'E190'}
    ]});
  }
};
