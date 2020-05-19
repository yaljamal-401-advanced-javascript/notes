const minimist = require('minimist');


class Input {
  constructor() {
    this.argv = minimist(process.argv.slice(2));
    this.obj = {};
    if (Object.keys(this.argv)[1] === 'a' || Object.keys(this.argv)[1] === 'add') {
      this.obj.action = Object.keys(this.argv)[1];
      this.obj.payload = Object.values(this.argv)[1];
      this.valid(this.obj);
    }
  }
  valid(obj) {
    if(obj){
      console.log(obj);
    }else{
      console.log('plz enter --a or --add ');

    }
  }
}


module.exports = Input;