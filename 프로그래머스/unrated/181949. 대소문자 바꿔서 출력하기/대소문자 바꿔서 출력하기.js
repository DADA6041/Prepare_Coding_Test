const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split("").map(i => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase());
    console.log(str.join(""));
});