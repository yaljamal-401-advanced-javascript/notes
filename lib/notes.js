'use strict';

// function Note(input) {
//     this.execute(input);
// }
// Note.prototype.execute = function(input) {
//     if (Object.values(input).action === 'a' || Object.values(input).action === 'add')
//         this.add(Object.values(input).action);
//     else {
//         console.log(Object.values(input).action);
//     }

// }
// Note.prototype.add = function(method) {
//     this.msg = method.payload;
//     this.id = Math.ceil(Math.random() * 1000);
//     console.log('msg=', this.msg, ' ', 'ID', this.id);
// }

class Note {
    constructor(input) {
        this.method = this.execute(input);
    }
}
Note.prototype.execute = function(input) {
    if (Object.values(input).action === 'a' || Object.values(input).action === 'add')
        this.add(Object.values(input).action);
    else {
        console.log(Object.values(input).action);
    }

}
Note.prototype.add = function(method) {
    this.msg = method.payload;
    this.id = Math.ceil(Math.random() * 1000);
    console.log('msg=', this.msg, ' ', 'ID', this.id);
}

module.exports = Note;