const path = require("path");
//
console.log("Le séparateurs du chemin dans mon system d'exploitation  : ",path.sep);
// Résultat : \

var newPath = path.join("\A","B","file1.txt");
console.log("Construire un Path facilement : ",newPath);
// Résultat : \A\B\file1.txt

// Connaitre le fichier qui est pointé dans un path :
const base=path.basename(newPath);
console.log("Le nom du fichier de base du path = ",base);
// Résultat : file1.txt
// Connaitre le path absolut d'un fihier : 
const absolute = path.resolve(__dirname,'A',"B","file1.txt");
console.log(absolute);
//Résultat :  C:\Users\pc\Desktop\FirstProjectNodeJS\A\B\file1.txt


const fs = require("fs");
const { readFile } = require("fs/promises");
//Lecture et Ecriture de Manière Synchrone :
console.log("===> StartReading F0 <=========");
const f0 = fs.readFileSync("./A/file0.txt","utf8");
console.log("===> StartReading F1 <=========");
const f1 = fs.readFileSync("./A/B/file1.txt","utf8");

console.log(f0,f1);
//attention le chemin doit existé avant de créer le fichier s'il n'existe pas ou l'écraser s'il existe
//fs.writeFileSync("./A/B/C/result.txt",`La Concaténation des deux fichiers donne : ${f0}\n\npuis ${f1}`);//ne marche pas car le dossier n'existe pas
console.log("===> StartWriting F0&F1 <=========");
fs.writeFileSync("./A/B/result.txt",`La Concaténation des deux fichiers donne : ${f0}

puis \n\n${f1}`);//ne marche pas car le dossier n'existe pas
console.log("===> Next Spet Async Work <=========");
//Lecture et Ecriture de manière synchrone 
console.log("****************Async****************");
console.log("===> StartReading  F1 Async Mode <=========");
fs.readFile("./A/B/file1.txt","utf8",(err,result)=>{
    if(err)
        console.log("pb a 3chiri error is : ",er);
    else    
        console.log("result = ", result);
        x1 = result;
        console.log("===> StartReading  F0 Async Mode <=========");
        fs.readFile("./A/file0.txt","utf8",(err,result)=>{
            if(err)
                console.log("pb a 3chiri error is : ",er);
            else    
                console.log("result = ", result);
                x2=result;

                console.log("===> StartReading  writing f0 and F1 Async Mode <=========");
                fs.writeFile("./A/B/resultAsync.txt", 
                x1+"  +++  "+x2,
                (err,result)=>{
                    if(err){console.log(err);}else{
                        console.log(result);
                    }
                });
            
            });

});

console.log("Nexxt Step of code");