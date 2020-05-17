'use strict';

function Note(input) {
    this.execute(input);
}
Note.prototype.execute = function(input) {
    if (input.obj.action === 'a' || input.obj.action === 'add')
        this.add(input);
    else {
        console.log(input.action);
    }

}
Note.prototype.add = function(method) {
    this.msg = method.payload;
    this.id = Math.ceil(Math.random() * 1000);
    console.log('msg=', this.msg, ' ', 'ID', this.id);
}

module.exports = Note;