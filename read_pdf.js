import fs from 'fs';
import pdfParse from 'pdf-parse/lib/pdf-parse.js';

let dataBuffer = fs.readFileSync(process.argv[2]);

pdfParse(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
