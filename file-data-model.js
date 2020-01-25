'use strict';

// const uuid = require('uuid/v4');
const fs = require('fs');
const util = require('util');
const writeOnFile = util.promisify(fs.writeFile) ;
const readTheFile = util.promisify(fs.readFile) ;


class Model {

  constructor() {
  }

  create(file , data) {
    return writeOnFile(file , data);
  }
    
  read(file) {
    return readTheFile(file)
      .then( (data) => {
        return data ;
      });
  }
  
}

module.exports = Model;