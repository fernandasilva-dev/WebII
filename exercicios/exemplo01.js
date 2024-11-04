//var H = 0;
//var P = 3;
//var F = 1;
//var Direcao = 1; //1 = horário; -1 = anti-horário

function fugir(H,P,F,D){
    while(true){
        if(D == 1){
            F = (F + 1) % 16;
        }else{
            F = (F - 1 + 16) % 16; 
        }
        if(F == H){
            return "S";
        }
        if(F == P){
            return "N";
        }
    }
}

let resultado = fugir(4,14,7,1);//H,P,F,D

console.log("...",resultado);