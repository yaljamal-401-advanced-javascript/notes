'use strict';
const noteModel=require('../DB/note-schema.js');
class Note{
  constructor(){}
  create(obj){
    const newNote=new noteModel(obj);
    return newNote.save();
  }
  read(_id){
    if(_id){
      return noteModel.findOne({_id});
    }else{
      return noteModel.find({});
    }
  }
  update(_id,obj){
    return noteModel.findByIdAndUpdate(_id,obj,{new:true});
  }
  delete(_id){
    return noteModel.findOneAndDelete(_id);
  }
}
module.exports = new Note();
