'use strict';

const uuid = require('uuid/v4');
const Product = require('../categories/file-products.js');


let file = `${__dirname}/../data/categories.db`;



describe('File Model' , () => {
  let newProduct ;
  beforeEach(() => {
    newProduct = new Product();
  });
    
  it('Create() adding data to the file works', () => {
    let id =uuid() ;
    let testObj = { _id : id , price : 5 , weight : 10 }; 
    let buffedData = Buffer.from(JSON.stringify(testObj)); 

    return newProduct.create(file , buffedData)
      .then(() =>{
        return newProduct.read(file)
          .then((data) => {
            let jsonData = JSON.parse(data.toString().trim());
            expect(jsonData.price).toEqual(testObj.price);
          });
      });
  });

  it('read() data from the file', ()=> {
    return newProduct.read(file)
      .then((data) => {
        let jsonData = JSON.parse(data.toString().trim());
        expect(jsonData.price).toEqual(5);
      });

  });

  it('update the data in the file', ()=> {
    return newProduct.read(file)
      .then((data) => {
        let jsonData = JSON.parse(data.toString().trim());
        jsonData.price = 7 ;
        return jsonData;
      })
      .then((data) => {
        let buffedData = Buffer.from(JSON.stringify(data)); 
        return newProduct.create(file ,buffedData)
          .then(()=> {
            return newProduct.read(file)
              .then((data) => {
                let newData = JSON.parse(data.toString().trim());
                expect(newData.price).toEqual(7);
              });
          });
      });
  });



  it('Delete the data from the file', ()=> {
    let buffedData = Buffer.from(JSON.stringify('')); 
    return newProduct.create(file ,buffedData)
      .then(()=> {
        return newProduct.read(file)
          .then((data) => {
            console.log(data);
            let newData = JSON.parse(data.toString().trim());
            console.log(newData);

            expect(newData).toEqual('');
          });
      });
  });



});