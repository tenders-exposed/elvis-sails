/**
 * Award.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const Waterline = require('waterline');

module.exports = Waterline.Collection.extend({

  tableName: 'awards',
  identity: 'award',
  connection: 'localOrient',

  attributes: {
    number: 'string',
    awarded_to: {
      collection: 'Supplier',
      through: 'award',
      foreignKey: true,
      references: 'supplier',
      on: 'id',
      onKey: 'id',
      via: 'awarded_by',
    },
    awarded_by: {
      collection: 'Procurer',
      through: 'award',
      foreignKey: true,
      references: 'procurer',
      on: 'id',
      onKey: 'id',
      via: 'awarded_to',
    }
  }
});
