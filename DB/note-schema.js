'use strict';
const mongoose = require('mongoose');

const note=new mongoose.Schema({
  action:{type:'string',require:true},
  catogry:{type:'string',require:true},

});
module.exports = mongoose.model('note', note);
