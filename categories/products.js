'use strict';

const FileDataModel = require('../memory-data-model');


class Products extends FileDataModel {
  constructor() {
    super();
    this.schema = {
      category_id: { type: [String], required: true },
      price: { type: [Number], required: true },
      weight: { type: [Number] },
      quantity_in_stock: { type: [Number], required: true },
    };
  }
}


module.exports = Products;