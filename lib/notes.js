'use strict';
const mongoose = require('mongoose');
const collection=require('../model/notes-collection');
const MONGODB_URI ='mongodb://localhost:27017/notes';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Note {
  constructor() {
    this.id=Math.ceil(Math.random()*10);
  }
  execute(input){
    // if(!input){
    //   return;
    // }
    if(input.get){
      return this.get(input);
    }else if(input.create){
      return this.create(input);
    }else if(input.delete){
      return this.delete(input);
    }else if(input.update){
      return this.update(input);
    }else if(input.list){
      return this.list();
    }
  }

  async create(input){
    let noteObj={
      text:`${input.create}`,
      catogry:`${input.category}`,
    };
    let newNote= await collection.create(noteObj);
    console.log(newNote);
  }
  async delete(obj){
    let id=obj.delete;
    let deleteNode=await collection.delete(id);
    console.log('deleted Sucsses ',deleteNode);
  }
  // async add(obj){
  //   let addNote=new note_schema({
  //     action:obj.action,
  //     catogry:obj.payload});
  //   let result=await addNote.save();
  //   return result;
  // }
  async list(obj){
    let list=await collection.list(obj);
    console.log('all list',list);
  }
}
module.exports = Note;