// Modules 
// Modules are used to export some function or variables from a file

// This is written in nodeTut5
// const variablesa = 200;
// function abc(){
//     console.log("This is function in the nodeTut5 ");
// }
// module.exports.vari = variablesa;
// module.exports.a = abc;

// OR

// module.exports={
//     abc:function(){
//        console.log("This is function in the nodeTut5");
// },
//    variables : 200,
// }



const exported = require("./nodeTut5");
exported.a();
console.log(exported.vari);