'use strict';
const schema=require('../DB/note-schema.js');
let mongoose=require('mongoose');
mongoose.set('useFindAndModify',false);

class Collection{
  constructor(){}
  get(_id){
    if(_id){
      return schema.findOne({_id:_id});
    }
  }

  create(obj){
    const newNote=new schema(obj);
    return newNote.save();
  }
  // read(_id){
  //   if(_id){
  //     return schema.findOne({_id});
  //   }else{
  //     return schema.find({});
  //   }
  // }

  update(_id,obj){
    return schema.findByIdAndUpdate(_id,obj,{new:true});
  }
  delete(_id){
    return schema.findOneAndDelete(_id);
  }
  list(record){
    if(record.catagory){
      return schema.find({catagory:record.catagory});
    }else{
      return schema.find({});
    }
  }
}
module.exports =Collection;
