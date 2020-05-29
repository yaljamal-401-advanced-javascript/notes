'use strict';
const mongoose = require('mongoose');
const note=new mongoose.Schema({
  text:{type:'string',require:true},
  catogry:{type:'string',require:true},

});
module.exports = mongoose.model('note', note);
