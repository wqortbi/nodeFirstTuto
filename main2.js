const os = require("os");// Modules du S.E 
// informatoon aboit current user 
console.log("The user info : ",os.userInfo());
console.log("the system uptime : ",os.uptime()/360);
console.log("Le S.E et sa version : ",os.type()," - ",os.release());
console.log("La Mémoire de mon terminal est : ",os.totalmem()," en totalité la mémoire libre est seulement : ",os.freemem());