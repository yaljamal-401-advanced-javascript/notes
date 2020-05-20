'use strict';
const Input = require('../lib/input.js');
const minmist=require('minimist');
jest.mock('minimist');
minmist.mockImplementationOnce(()=>({
  add:'this is my first test',
}));
describe('input mudel',()=>{
  it('return every thnges ',()=>{
    const input=new Input();
    expect(input).toEqual({
      action:'add',
      paylod:'the test',
    });
  });
  minmist.mockImplementationOnce(()=>({
    wrong:'the first test',
  }));
  it('should throw the error invalid key',()=>{
    const input=new Input();
    expect(input).toEqual({});
  });
  minmist.mockImplementationOnce(()=>({
    add:true,
  }));
  it('should throw the error invalid input',()=>{
    const input=new Input();
    expect(input).toEqual({});
  });
});