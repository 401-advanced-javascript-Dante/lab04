'use strict' ;


const Categories = require('../categories/categories.js');
const validator = require('../categories/validator.js');
const Product = require('../categories/products.js');

describe('Categories Model', () => {

  let categories;
  let valClass = new validator ;

  beforeEach(() => {
    categories = new Categories();
    // products = new Product ;
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a category' , () => {
    let obj = { name: 'Test Category' };
    let newObj = {name: 'DanTe'};
    return categories.create(obj)
      .then((record) => {
        return categories.update(record.id , newObj)
          .then((updatedValue) => {
            return expect(updatedValue.name).toEqual(newObj.name);
          });
      });
  });

  it('can delete() a category ', () => {
    let obj = { name: 'Test Category' };

    return categories.create(obj)
      .then((record) => {
        return categories.delete(record.id)
          .then((deleted) => {
            return expect(deleted).toEqual(undefined);
          });
      });
  });


  describe('Validator' , () => {

    it('post() return an object', ()=> {
      let obj = { name: 'Test Category' };
      return categories.create(obj)
        .then(record => {
          expect(valClass.isAnObject(record)).toEqual(true);
        });
    });

    it('get() return an array' , ()=> {
      let obj = { name: 'Test Category' };
      return categories.create(obj)
        .then(record => {
          return categories.get(record._id)
            .then(category => {
              expect(valClass.isAnObject(category)).toEqual(true);
            });
        });
    });

    it('update() return name as string', ()=>{
      let obj = { name: 'Test Category' };
      let newObj = {name: 'DanTe'};
      return categories.create(obj)
        .then((record) => {
          return categories.update(record.id , newObj)
            .then((updatedValue) => {
              return expect(valClass.isString(updatedValue.name)).toEqual(true);
            });
        });

    });

    it('delete() return undefined', () => {
      let obj = { name: 'Test Category' };
  
      return categories.create(obj)
        .then((record) => {
          return categories.delete(record.id)
            .then((output) => {
              return expect(valClass.isValid(output)).toBeTruthy();
            });
        });
    });
  });
});


describe('Product Model', () => {
  let products ;
  beforeEach(() => {
    products = new Product ;
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' , price: 20 };
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(category => {
            // console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a category' , () => {
    let obj = { name: 'Test Category' };
    let newObj = {name: 'DanTe'};
    return products.create(obj)
      .then((record) => {
        return products.update(record.id , newObj)
          .then((updatedValue) => {
            return expect(updatedValue.name).toEqual(newObj.name);
          });
      });
  });

  it('can delete() a category ', () => {
    let obj = { name: 'Test Category' };

    return products.create(obj)
      .then((record) => {
        return products.delete(record.id)
          .then((deleted) => {
            return expect(deleted).toEqual(undefined);
          });
      });
  });

});


  

