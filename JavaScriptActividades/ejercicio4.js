var numeroAleatorio = parseInt(Math.random()*101);
var contador = 1;
var resultado = prompt("Adivina el número del 1 al 100 "+ numeroAleatorio);

while(Number(resultado)){

    if(resultado < numeroAleatorio){
        alert("Sigue intentandolo, el numero es: "+numeroAleatorio);
        var resultado = prompt("Adivina el número del 1 al 100 "+ numeroAleatorio);
        //var numeroAleatorio = parseInt(Math.random()*101);
        contador ++;
    }else if( resultado > 100){
        alert("Relax maquina que te pasas...");
        var resultado = prompt("Adivina el número del 1 al 100 "+ numeroAleatorio);
        contador++;
    }
    
    else if(resultado == numeroAleatorio){
        alert("HAS ACERTADO BONIFACIO ;D te costó "+ contador+" intentos");
        break;
    }


}