/**
 * Supplier.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const Waterline = require('waterline');

module.exports = Waterline.Collection.extend({

  tableName: 'suppliers',
  identity: 'supplier',
  connection: 'localOrient',

  attributes: {
    name: 'string',
    procurers: {
      collection: 'Procurer',
      through: 'award',
      via: 'supplier',
      dominant: false,
    }
  }
});
