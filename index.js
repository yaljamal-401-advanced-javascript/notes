'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});
const input = new Input();
const note = new Note(input.obj);
note.execute(input)
  .then(mongoose.disconnect());