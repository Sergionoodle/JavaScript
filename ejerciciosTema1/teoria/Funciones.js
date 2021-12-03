/* -------------------ASIGNAR FUNCIONES A VARIABLES ------------------------*/
// El acceso al código de una función en JS se puede realizar de diversas formas
// Función anónima. La función no tiene nombre.

const trip = function(x) {
    return 3*x;
}

// El código de la función es accesible porque se lo estamos asignando a la 
// variable trip. Aunque trip es una variable, puede acceder al código de la 
// función de la misma forma que si hubiera puesto ese nombre a la función.

console.log(trip(3)); //Salida: 9

// La variable es una referencia a la función.

// El hecho de declarar trip como constante (const) tiene sentido si esa 
// variable siempre se asocia con la función a la que se asigna en la declaración,
// si asignamos otra función ocurriría error porque cambiamos la referencia.

// Dos variables pueden hacer referencia a la misma función
const trip = function(x) {
    return 3*x;
}

let x = trip;
console.log(x(8)); // Salida: 24

/* --------------------FUNCIONES FLECHA ----------------------------*/
// Otra manera de declarar variables.
// Fácil escritura.
// Sólo sirve para funciones anónimas.
// No aparece la palabra function y una flecha separa los parámetros del cuerpo
// de la función

const triple=x=>3*x;
console.log(triple(20)); // Salida: 60

// x=>3*x   ES EQUIVALENTE A     function(x){3*x}
// El símbolo de la flecha separa los argumentos del cuerpo de la función, en
// el que, además, se sobreentiden la palabra return

// Si hay más de un parámetro se deben escribir entre paréntesis
const media=(x,y)=>(x+y)/2;
console.log(media(10,20)); // Salida: 15

// Si el cuerpo de la función es más complejo, requiere ser incluido entre 
// llaves
const sumatorio = (n) => {
    let acu = 0;
    for (let i=n;i>0;i--) {
        acu+=i;
    }
    return acu;
}

console.log(sumatorio(3)); // Salida: 6

// También son necesarias las llaves cuando no hay return
const saludo = mensaje => {
    console.log(mensaje); 
}

saludo ('Hola'); // Salida: Hola

// Si la función no tiene parámetros, hay que colocar paréntesis vacíos en la
// posición que ocuparían los parámetros
const hola=() => {
    console.log('Hola');
}

hola(); // Salida: Hola

// Ante funciones complejas, las ventajas de las funciones flecha se diluyen

const pares=(array)=>{
    let nPares=0;
    if (array instanceof Array) {
        for (n of array) {
            if (n%2===0) {
                nPares++;
            }
        }
    }
    return nPares;
}

// No ahorra mucho respecto a la forma clásica de escribir las funciones 
// anónimas
const pares = function (array) {
    let nPares=0;
    if (array instanceof Array) {
        for (n of array) {
            if (n%2===0) {
                nPares++;
            }
        }
    }
    return nPares;
}