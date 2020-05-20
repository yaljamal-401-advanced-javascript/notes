'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const note_schema=require('../DB/note-schema.js');
const MONGODB_URL=process.env.MONGODB_URL;

mongoose.connect(process.env.MONGODB_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});


class Note {
  constructor(input) {
    this.execute(input);

  }


  execute(input){
    if (input.action === 'a' || input.action === 'add'){
      return this.add(input);

    }else{
      if (input.action === 'd' || input.action === 'delete'){
        return this.delete(input);
      }
    }
  }
 
  async delete(obj){
    console.log('jlkdsfj');
    let result =  await note_schema.findByIdAndRemove(obj.id);
    console.log(result);
    mongoose.disconnect();
    return result;
  }
  async add(method){
    let msg = method.payload;
    let id = Math.ceil(Math.random() * 1000);
    console.log('msg=', msg, ' ', 'ID', id);

    let addNote=new note_schema({action:method.action,catogry:method.payload });
    let result=await addNote.save();
    mongoose.disconnect();
    return result;
  }

}
module.exports = Note;