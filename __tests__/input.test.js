'use strict';
const Input = require('../lib/input.js');
jest.spyOn(global.console, 'log');
describe('Inmput Module test',()=>{
  it('does nothing when valid() is called with invalid options',()=>{
    const input=new Input();
    input.valid();
    expect(console.log).toHaveBeenCalled();
  });
  it('does nothing when valid() is called with valid options',()=>{
    const input=new Input();
    input.valid({action : 'add',payload:'some text'});
    expect(console.log).toHaveBeenCalled();
  });
  
});