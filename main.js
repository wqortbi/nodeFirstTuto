const names= require("./names");
const Salutation =require("./module1");
console.clear();
Salutation(names.prenom+" "+names.nom);
Salutation("Hamid");
const obj = require("./module2");
console.log("obj = ",obj);
require("./module3");