'use strict';
const note_schema=require('../model/notes-collection.js');
class Note {
  constructor(input) {
    this.id=0;

  }
  execute(input){
    if(!input){
      return;
    }
    if (input.action==='add'){
      return this.add(input);
    }else if (input.action === 'delete'){
      return this.delete(input);
    }else if(input.action==='list'){
      return this.list(input);
    }
  }

 
  async delete(obj){
    let d =  await note_schema.findByIdAndRemove(obj.id);
    console.log(d);
  }
  async add(obj){
    let addNote=new note_schema({action:obj.action,catogry:obj.payload });
    let result=await addNote.save();
    return result;
  }
  async list(obj){
    let list;
    if(obj.catogry===true){
      list=await note_schema.find({});
    }else{
      list=await note_schema.find({catogry:obj.catogry});
    }
    return list;
  }
}
module.exports = Note;