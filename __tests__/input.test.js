'use strict';
const Input = require('../lib/input.js');
let option=new Input();
describe('input mudel',()=>{
  it('valid()',()=>{
    expect(option.valid('add')).toEqual(true);
  });
  it('create new instance ',()=>{
    let newinst={
      'action':'add',
      'payload':'hello',
    };
    expect(newinst).toEqual(newinst);
  });


});
