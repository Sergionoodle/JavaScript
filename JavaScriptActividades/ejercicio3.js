//Declaramos variables
var nombre;
var apellids;
var edad;
var salario;

//incrementos
const incremento3 = 1.03;
const incremento2 = 1.10;
const incremento1 =  1.15;
//Recogida de datos
nombre = prompt("Escribe tu nombre: ");
apellids = prompt("Escribe tus apellidos: ");
edad = prompt("Escribe tu edad: ");
salario = prompt("Escribe tu salario: ");

//Valoraciones

if(salario < 1000){
    if(edad < 30){
        salario = 1100;
    }else if (edad < 45){
        salario*=incremento3;
    }else{
        salario*= incremento2;
    }
}else if (salario <=2000){
    if(edad > 45){
        salario*= incremento3;
    }else{
        salario *= incremento1
    }
}

document.write("<p>"+nombre+", "+apellids+", de "+edad+ " años con un salario de "+salario+"</p>");