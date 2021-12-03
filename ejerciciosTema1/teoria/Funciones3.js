/* ------------- ARGUMENTOS CON VALORES POR DEFECTO -------------------*/
// En JS, Los parámetros pueden tener un valor por defecto. Eso convierte a
// dicho parámetro en opcional: es decir, podemos enviar o no valores para ese
// parámetro.
// Las funciones pueden utilizar tantos parámetros por defecto como se desee.

function saludo(texto='Hola'){
    console.log(texto);
}

saludo(); // Salida: Hola
saludo('Buenos días'); // Salida: Buenos días

/* -----------------NÚMERO VARIABLE DE PARÁMETROS ------------------------*/

function media(x,y) {
    return (x+y)/2;
}

console.log(media(10,20)); // Salida: 15
console.log(media(10,20,30)); // Salida: 15

// Se pueden pasar tantos valores como se desee, lo que permite crear 
// funciones con un número variable de parámetros.
// El operador de propagación utilizado en los parámetros de una función,
// permite almacenar una serie indefinida de parámetros en un array.

function f(x,y,...mas) {
    console.log(`x=${x} y=${y} mas=${mas}`);
}

f(10,20); // Salida: x=10 y=20 mas=
f(10,20,30); // Salida: x=10 y=20 mas=30
f(10,20,30,40); // salida: x=10 y=20 mas=30,40

// El operador de propagación en este contecto convierte una lista de 
// parámetros en un array.

// Ejemplo 2. Cálculo de la media para usar cualquier número de parámetros
function media(...numeros) {
    let acu=0;
    for (let n of numeros) {
        acu+=n;
    }
    return acu/numeros.length
}

console.log(media(10,20)); // Salida: 15
console.log(media(10,20,30)); // Salida: 20
console.log(media(10,20,30,40)); // Salida: 25
console.log(media(10,20,30,40,50)); // Salida: 30

// No podremos enviar un array a esta función
console.log(media([10,20,30,40,50])); // Salida: NaN


/* ------------------------LA PILA DE FUNCIONES----------------------- */
// Cuando se invoca a una función en una expresión, esta debe esperar a que la
// función finalice para poder completar la expresión

function f1(){
    console.log('Inicio f1');
    f2();
    console.log('Fin f1');
}

function f2() {
    console.log('Inicio f2');
    f3();
    console.log('Fin f2');
}

function f3(){
    console.log('En f3');
}

f1();

/* Salida:
    Inicio f1
    Inicio f2
    En f3
    Fin f2
    Fin f1
*/

// Se observa que la primera función (f1) no finaliza hasta que las otras
// llamadas han finalizado. Las funciones utilizan la pila de llamadas que
// permite que, el intérprete de JS sepa qué funciones se deben de resolver
// antes.
// A medida que se resuelva el código de las últimas funcioens se irán
// retirando de la pila a la vez que se devuelve el flujo a la función anterior.

// Ante una mala gestión de llamadas se puede llegar a provocar el famoso
// desbordamiento de pila.

// Ejemplo de código que provoca DESBORDAMIENTO DE PILA
function saludo(){
    console.log('Saludo');
    despedida();
}

function despedida(){
    console.log('Despedida');
    saludo();
}

saludo();
 /* Salida:
    Saludo
    Despedida
    Saludo
    Despedida
    Saludo
    ....
    Saludo
    Despedida
    Saludo
    Despedida
    Saludo
    internal/console/constructor.js:290
            if (isStackOverflowError(e))
                ^
    RangeError: Maximum call stack size exceeded
    ....
*/

// La pila tiene un tamaño máximo y eso protege de problemas mayores, si ese
// tope el código anterior provocaría efectos más devastadores.