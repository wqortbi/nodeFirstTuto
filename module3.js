const a1=12, a2=14,a3="Hello to NodeJS";
function Somme(){
    s=0;
    for(i=0;i<arguments.length; i++)
    {
        s+=arguments[i];
    }
    console.log(`La somme est : ${s}`);
}
Somme(a1,a2,a3);