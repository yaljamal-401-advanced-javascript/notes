'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const MONGODB_URL=process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});
const input = new Input();
const note = new Note(input.obj);
note.execute(input)
  .then(mongoose.disconnect());