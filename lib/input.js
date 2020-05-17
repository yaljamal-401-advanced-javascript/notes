const minimist = require('minimist');

function Input() {
    const obj = {};
    const argv = minimist(process.argv.slice(2));
    if (Object.keys(argv)[1] === 'a' || Object.keys(argv)[1] === 'add') {
        obj.action = Object.keys(argv)[1];
        obj.payload = Object.values(argv)[1];
        console.log(obj);

    } else {
        console.log('plz enter --a or --add ');
    }
}

module.exports = Input;