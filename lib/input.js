const minimist = require('minimist');
class Input {
  constructor() {
    const argv = minimist(process.argv.slice(2));
    this.create=argv.create;
    this.delete=argv.delete||argv.d;
    this.text=argv.text;
    this.update=argv.update;
    this.category=argv.category;
    this.get=argv.get;
    this.list=argv.list;}
    
  valid(action){
    if(action===undefined||action===null){
      return false;
    }else if(action===''){
      return false;
    }else{
      return true;
    }
  }
  getKeys(){
    let obj={
      action:'add',
      payload:`Adding notes ${this.note}`,
    };
  }

//     if(!(this.add||this.delete||this.list||this.category||this.help)){
//       console.log('invaled Key ');
//       return {};
//     }else if(this.add && this.category){
//       if(this.add === true || this.category===true){
//         console.log('you are miss the method or the catogry ');
//         return {};
//       }else{
//         return{
//           action:'add',
//           payload:this.add,
//           category: this.category};
//       }
//     }else if(this.add){
//       if(this.add===true){
//         console.log('you are missing the note ');
//         return {};
//       }else{
//         return{action:'add',payload:this.add,category:'general'};
//       }
//     }else if(this.list){
//       return{action:'list',category:this.list};
//     }else if(this.delete){
//       if(this.delete===true){
//         console.log('plz enter the id ');
//         return {};
//       }else{
//         return{action:'delete',id:this.delete};
//       }
//     }else if(this.help){
//       return{action:'help'};
//     }
//   }
}
module.exports = Input;