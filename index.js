'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const mongoose = require('mongoose');
const input = new Input();
const note = new Note();
note.execute(input)
  .then(mongoose.disconnect());