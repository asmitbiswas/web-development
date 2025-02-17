const fs = require('fs');

console.log(fs);

console.log('Starting');

// fs.writeFileSync('MY.htmlll', 'writing codes in nodejs');
// console.log('file written and ending:)');
fs.write("my2.file", "Web development is fun" ,  () => {
    console.log("file written and ending");
})
