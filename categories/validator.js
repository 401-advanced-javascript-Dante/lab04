'use strict';


class validator {
  constructor(){
  }
 
  isValid(input) {
    let isArray = input instanceof Array;
    if (!isArray) {
      return true;
    }
  }

  isString(input){
    return typeof input === 'string';
  }
    
  isAnArray (value) {
    return typeof value[0] === 'string';
  }
    
  isAnObject (value){
    let test = Object.keys(value);
    return typeof test[0] === 'string';
  }
  
}


module.exports = validator ;







