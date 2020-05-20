const minimist = require('minimist');
class Input {
  constructor() {
    const argv = minimist(process.argv.slice(2));
    this.delete=argv.delete||argv.d;
    this.add=argv.add||argv.a;
    this.list=argv.list||argv.l;
    this.category=argv.category||argv.c;
    this.help=argv.help||argv.h;

    if(!(this.add||this.delete||this.list||this.category||this.help)){
      console.log('invaled Key ');
      return {};
    }else if(this.add && this.category){
      if(this.add === true || this.category===true){
        console.log('you are miss the method or the catogry ');
        return {};
      }else{
        return{
          action:'add',
          payload:this.add,
          category: this.category};
      }
    }else if(this.add){
      if(this.add===true){
        console.log('you are missing the note ');
        return {};
      }else{
        return{action:'add',payload:this.add,category:'general'};
      }
    }else if(this.list){
      return{action:'list',category:this.list};
    }else if(this.delete){
      if(this.delete===true){
        console.log('plz enter the id ');
        return {};
      }else{
        return{action:'delete',id:this.delete};
      }
    }else if(this.help){
      return{action:'help'};
    }
  }
}
module.exports = Input;