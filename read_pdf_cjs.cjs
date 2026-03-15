const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync(process.argv[2]);

pdf(dataBuffer).then(function(data) {
    console.log("---- INICIO CV ----");
    console.log(data.text);
    console.log("---- FIN CV ----");
}).catch(err => {
    console.error(err);
});
