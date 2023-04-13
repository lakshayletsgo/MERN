// Global Objects
// __dirname => This will give the directory name of any file 
// __filename => This will give the file name of the file with its path  
// require => This is used to import of some other file 
// console => This is used to print anything on the command prompt
// buffer => This creates a temporary space where memory is stored(Working time me hi voh memory create karega aur  working time me hi memory store karega) 
// module => 
// exports => Agr hame dusri file se koi variable ya function import karana hai toh pehle toh require use karna hai. Uske baad uss file me jo function ya variable import karana hai usko exports karna hoga. Jaise yaha par kiya tha



// Use ./ to call file otherwise sometime it gives error
// This will also run the code in the imported file
var main  = require('./nodeTut2');
// Tut2 me toh yeh use kara hai 
// const a = 10;
// module.exports.abc = a;
console.log(main.abc);

console.log(__dirname);
console.log(__filename);
