'use strict';
const Note = require('../lib/notes.js');
jest.spyOn(global.console, 'log');
describe('Inmput Module test',()=>{
  // it('does nothing when execute() is called with no enter command',()=>{
  //   const note=new Note();
  //   expect(console.log).not.toHaveBeenCalled();

  // });
  it('does nothing when execute() is called with enter command',()=>{
    const note=new Note({action:'add',payload:'something'});
    expect(console.log).toHaveBeenCalled();

  });
  
});