'use strict';
require('@code-fellows/supergoose');
const Note = require('../model/notes-collection.js');
const newNote=new Note();
describe('Note Model',()=>{
  it('Create()',()=>{
    let obj={text:'yazan',category:'cofee'};
    return newNote.create(obj)
      .then(result=>{
        Object.keys(obj).forEach(key=>{
          expect(result[key]).toEqual(obj[key]);
        });
      });
  });
  it('get()',()=>{
    let obj={text:'yazan',category:'cofee'};
    return newNote.create(obj)
      .then(result=>{
        return newNote.get(result._id)
          .then(item=>{
            Object.keys(obj).forEach(key=>{
              expect(item[key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('update()',()=>{
    let obj={text:'yazan',category:'cofee'};
    let newobj={text:'updated',category:'cofee'};
    return newNote.create(obj)
      .then(result=>{
        return newNote.update(result._id,newobj)
          .then(item=>{
            Object.values(obj).forEach(value=>{
              expect(item[value]).toEqual(obj[value]);
            });
          });
      });
  });
  it('list()',()=>{
    let obj={text:'yazan',category:'cofee'};
    return newNote.create(obj)
      .then(result=>{
        return newNote.list(result.category)
          .then(item=>{
            Object.values(obj).forEach(value=>{
              expect(item[value]).toEqual(obj[value]);
            });
          });
      });
  });
});