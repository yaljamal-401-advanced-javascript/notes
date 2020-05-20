'use strict';
require('@code-fellows/supergoose');
const Note = require('../model/notes-collection.js');
jest.spyOn(global.console, 'log');
describe('Input Module test',()=>{
  it('does nothing when execute() is called with enter command',()=>{
    const note=new Note();
    note.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('test',()=>{
    let obj={
      action:'add',
      payload:'tesssssssst',
    };
    const note=new Note();
    note.execute(obj);
    expect(console.log).toHaveBeenCalled();
  });
  
});