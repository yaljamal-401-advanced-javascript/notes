'use strict';
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const test = new Input();
console.log(test.obj);

const note = new Note(test.obj);