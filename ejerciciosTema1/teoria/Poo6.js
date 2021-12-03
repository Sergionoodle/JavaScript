/*--------------------------PROTOTIPOS---------------------------*/
//  IDEA DE PROTOTIPO
// En JS la idea es que todos los objetos procedentes del mismo tipo
// de función constructora, tienen un mismo prototipo con el que 
// enlazan. El prototipo de un objeto es una serie de métodos y 
// propiedades comunes.

// En los lenguajes que usan clases, el código de los métodos se
// copia a los objetos de esa clase.
// Sin embargo, en JS lo que se hace es enlazar con su prototipo.
// El prototipo es la parte común de los objetos del mismo tipo.
// En JS podemos modificar el prototiposobe la marcha, y los objetos
// que enlazan con ese prototipo inmediatamente estarán al día porque
// el enlace con su prototipo es dinámico.

// El acceso al prototipo de un objeto se puede hacer con la
// propiedad __proto__ (hay dos guiones al principio y dos al final
// de la palabra proto).

function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};

let a = new Punto(10,20);
console.log(a.__proto__); // Salida: Punto{}

// Una forma equivalente de obtener el prototipo es mediante el 
// método getPrototypeof que es un método de la clase genérica
// Object
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};

var a = new Punto(10,20);
console.log(a instanceof Punto); // Salida: True
console.log(a);
console.log(Object.getPrototypeOf(a)); // Salida: {}

// MODIFICAR PROTOTIPOS
// Para modificar prototipos basta con indicar la propiedad prototype
// y después definir propiedades y métodos a voluntad.
// Esta propiedad solo está disponible en las funciones constructoras
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};
console.log(Punto.prototype); // Salida: {}

// La salida es un objeto vacío porque no hemos definido nada en él.

// Para definir un nuevo método y una nueva propiedad podemos 
// indicarlos y darles valor.
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};
Punto.prototype.sumaXY = function() {
    return this.x+this.y;
}
Punto.prototype.z=0;

console.log(Punto.prototype); 
/* Salida: { sumaXY: [Function (anonymous)], z: 0 } */

let a = new Punto(10,20);
let b = new Punto (-3,6);
console.log(a.sumaXY()); // Salida: 30
console.log(b.sumaXY()); // Salida: 3
console.log(a.z); // Salida: 0
console.log(b.z); // Salida: 0

// Ejemplo de modificación de propiedad heredada
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};
Punto.prototype.sumaXY = function() {
    return this.x+this.y;
}
Punto.prototype.z=0;


let a = new Punto(10,20);
console.log(a.z); // Salida: 0
a.z = 7;
console.log(a.z); // Salida: 7

// Ahora aunque modifiquemos la propiedad z a través del prototipo,
// la variable a no lo reflejará porque su propiedad z ya es 
// independiente de su prototipo.
// Sin embargo, todos los demás objetos usarán la propiedad z del 
// prototipo.
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
};
Punto.prototype.sumaXY = function() {
    return this.x+this.y;
}
Punto.prototype.z=0;


let a = new Punto(10,20);
let b = new Punto(-3,6);

a.z = 7;

console.log(a); 
console.log(b.z);
/* Salida: 
    Punto {
    x: 10,
    y: 20,
    mostrarCoordenadas: [Function (anonymous)],
    z: 7
    }
    Punto { x: -3, y: 6, mostrarCoordenadas: [Function (anonymous)] }
*/

// Si un objeto redefine un método o una propiedad, entonces, 
// usa su versión de forma prioritaria sobre la del prototipo.

// Se pueden modificar los prototipos de los modelos estándar pero
// no es recomendable.



/* ---------------------NOTACIÓN JSON-----------------------*/
// Es el acrónimo de JavaScript Object Notation
// Es la idea de aprovechar la forma que posee JS de crear objetos
// estáticos para crear un formato documental que sea más cómodo y
// eficiente para los programadores que los lenguajes de marcado
// como XML.

// Inicialmente se creo para ser usado desde JS, actualmente se 
// considera un formato documental independiente de cualquier 
// lenguaje.
// La información almacenada en formato JSON se puede manipular
// desde casi cualquier lenguaje de programación actual.

// El lenguaje JSON es muy parecido a la forma de crear objetos 
// de JS, se basa en indicar propiedades y valores separados por
// dos puntos. Los valores se indican igual que en JS (textos
// entrecomillados, los números tal cual y usando el punto como
// decimal, etc.). Se permite el uso de arrays, anidar objetos, etc.

/* Hay diferencias entre JSON y JS:
    - JSON solo admite definir propiedades, no se pueden indicar
        métodos en el formato JSON.
    - En JSON el nombre de las propiedades tienen que ir entre 
        comillas dobles (no se admiten el resto de comillas).
*/


/* EJEMPLO DE JSON
    {
        'titulo' : 'Manual de UFOlogía',
        'n-serie': '187C2',
        'autores' : ['Pedro Martínez','Ana León'],
        'editorial' : {
            'nombre' : 'Inexistente S.A',
            'pais' : 'España',
        }
        'editorial' : 2,
        'ensayo' : true
    }
*/

// Manipular datos en JSON es muy importante en la creación actual
// de aplicaciones web. 
// JS aporta un objeto global llamado JSON que permite manipular 
// los datos en este formato.

/* El objeto JSON posee dos métodos:
    - stringify. Sirve para convertir un objeto JS en un string que
        contiene el formato JSON equivalente.
    - parse. Recibe un texto en formato JSON y evalúa su corrección.
        Si es correcto, retorna el objeto equivalente y si no, 
        devuelve una excepción de tipo SyntaxError.
*/

// EJEMPLO STRINGIFY
const musico1 = {
    nombre: 'Bob',
    apellido: 'Dylan',
    fecha_nacimiento: {
        dia: 24,
        mes: 5,
        año: 1941
    },
    discos: ['Highway 61 Revisited', 'Blonde on Blonde', 'Self Portrait']
}

console.log(JSON.stringify(musico1));

/* Salida
{"nombre":"Bob","apellido":"Dylan","fecha_nacimiento":{"dia":24,
"mes":5,"año":1941},"discos":["Highway 61 Revisited","Blonde on 
Blonde","Self Portrait"]}
*/

// El método parse haría lo contrario, a partir del texto crea el
// objeto.

/* -------------------OBJETO DATE------------------------*/
// Es un tipo de objeto preparado para manejar fechas.
// Crear un objeto de fecha es usar el constructor de objetos Date.
// En la construcción más simple, la función Date no requiere
// parámetros.

// Ejemplo de construcción simple
let hoy = new Date();
console.log(hoy); // Salida: 2021-11-10T18:38:02.186Z

// Un objeto tipo Date representa un momento concreto del tiempo

/* Los objetos Date se pueden crear indicando una fecha concreta
     de la siguiente manera:
        new Date(año,mes,dia,hora,minutos,segundos,ms);
*/

// Ejemplo de fecha concreta
let fecha = new Date(2021,11,10,18,12,0,0);
console.log(fecha); // Salida: 2021-12-10T17:12:00.000Z
// Considera que Enero es el mes 0 por eso indica el mes 12 en 
// la salida.

// No se obligatorio indicar todos los datos
let fecha = new Date(2021,11,10);
console.log(fecha); // Salida: 2021-12-09T23:00:00.000Z

// También se puede crear una fecha a partir del número de
// milisegundos transcurridos desde el 1 de enero de 1970.
let fecha2 = new Date(1000);
console.log(fecha2); // Salida: 1970-01-01T00:00:01.000Z

/* Lista de métodos del objeto Date:
        https://www.w3schools.com/js/js_dates.asp
        https://www.w3schools.com/js/js_date_methods.asp
        https://www.w3schools.com/js/js_date_methods_set.asp

    Formato de las fechas:
        https://www.w3schools.com/js/js_date_formats.asp
*/

/* -------------------EXPRESIONES REGULARES---------------------*/
// Las expresiones regulares se utilizan para establecer un patrón
// que permita establecer condiciones avanzadas en los textos, de 
// modo que se puedan validar los textos que encajen con ese patrón.

/* Las labores típicas en las que ayudan las expresiones son:
    - Validación de errores
    - Búsqueda de textos con reglas complejas
    - Modificación avanzada de textos.
*/

// En JS las expresiones regulares son objetos de tipo RegExp.

// Las expresiones regulares se pueden crear indicando las mismas
// entre dos barras de dividir. Tras las barras se pueden indicar
// modificadores.

// Ejemplo de creación de una expresión regular
// Expresión que permite validar un NIF o un NIE como correcto
let expNIF = /[KLXYZ0-9][0-9]{7}[A-Z]/;

// Utilizando una notación más formal
let expNIF = new RegExp('[KLXYZ0-9][0-9]{7}[A-Z]');

// Es más habitual utilizar la otra fomra al ser más rápida e incluso
// entendible.

//ELEMENTOS DE LAS EXPRESIONES REGULARES
// El patrón de las expresiones regulares puede contener diversos 
// símbolos que se interpretan de forma especial.

// El método test
// Permite evaluar el texto con la expresión regular. Devuelve
// verdadero si el texto que evaluamos con la expresión regular
// cumple el patrón.

let expresion = /c/;
console.log(expresion.test('casa')); // Salida: true
console.log(expresion.test('Casa')); // Salida: false
console.log(expresion.test('barbacoa')); // Salida: true

// Por defecto se distingue entre mayúsculas y minúsculas.
// Si queremos no distinguir entre mayúsculas y minúsculas podemos
// añadir el modificar i al final de la expresión.
let expresion = /c/i;
console.log(expresion.test('casa')); // Salida: true
console.log(expresion.test('Casa')); // Salida: true
console.log(expresion.test('barbacoa')); // Salida: true

// Si buscamos más de un carácter
let expresion2 = /as/;
console.log(expresion2.test('casa')); // Salida: true
console.log(expresion2.test('Casa')); // Salida: true
console.log(expresion2.test('asador')); // Salida: true
console.log(expresion2.test('Asador')); // Salida: false

// La potencialidad de las expresiones regulares se dispara con el
// uso de símbolos especiales.

// SÍMBOLO CIRCUNFLEJO (^)
// Obliga a que el siguiente símbolo de la expresión sea el primero
// que obligatoriamente tenga el texto que validemos
let expresion3 = /^c/;
console.log(expresion3.test('casa')); // Salida: true
console.log(expresion3.test('barbacoa')); // Salida: false

// SÍMBOLO DEL DÓLAR ($)
// Hace que el carácter anterior al $ sea, obligatoriamente, el 
// último del texto 
let expresion4 = /a$/;
console.log(expresion4.test('casa')); // Salida: true
console.log(expresion4.test('barbacoa')); // Salida: true
console.log(expresion4.test('río')); // Salida: false

// EL PUNTO (.)
// Es un símbolo especial de las expresiones regulares que representa
// un carácter cualquiera
let expresion5 = /a.e/;
console.log(expresion5.test('caserío')); // Salida: true
console.log(expresion5.test('aereo')); // Salida: false
console.log(expresion5.test('alambique')); // Salida: false

// SÍMBOLO OPCIONALES
// Cuando se pone una serie de símbolos entre corchetes, se
// permite cualquier de ellos.
let expresion6 = /[ao]$/;
console.log(expresion6.test('casa')); // Salida: true
console.log(expresion6.test('Casa')); // Salida: true
console.log(expresion6.test('río')); // Salida: true

// Podemos indicar rangos
let expresion7 = /^[a-z]/; // Valido cualquier texto que comience con minúscula
console.log(expresion7.test('casa')); // Salida: true
console.log(expresion7.test('Casa')); // Salida: false
console.log(expresion7.test('río')); // Salida: true
console.log(expresion7.test('árbol')); // Salida: false // Cuidadín con la á

let expresion8 = /^[a-záéíóúü]/;
console.log(expresion8.test('casa')); // Salida: true
console.log(expresion8.test('Casa')); // Salida: false
console.log(expresion8.test('río')); // Salida: true
console.log(expresion8.test('árbol')); // Salida: true

// CARÁCTER NO PERMITIDO
// Si dentro del corchete indicamos un carácter circunflejo, estamos
// indicando que el contenido no se tiene que cumplir
let expresion9 = /^[^AEIOU]/; // Que NO empiece por ninguna vocal en mayúsculas
console.log(expresion9.test('Empresa')); // Salida: false
console.log(expresion9.test('Casa')); // Salida: true
console.log(expresion9.test('Ala')); // Salida: false

// SÍMBOLOS DE CARDINALIDAD
// Se utilizan para indicar la repetición de una expresión
/* 
    x+      La expresión de la izquierda de este símbolo se puede repetir
            una o más veces
    x*      La expresión de la izquierda de este símbolo se puede repetir
            cero o más veces
    x?      El carácter a la izquierda de este símbolo se puede repetir
            cero o una vez
    x{n}    Significa que la expresión x aparecerá n veces, siendo n
            un número entero positivo
    x{n,}   Significa que la expresión x aparecerá n o más veces
    x{m,n}  Significa que la expresión x aparecerá de m a n veces
*/
let expresion10 = /^[AEIOU].+a/;
console.log(expresion10.test('Asa')); // Salida: true
console.log(expresion10.test('Estación')); // Salida: true
console.log(expresion10.test('Ea')); // Salida: false

let expresion11 = /^[AEIOU].*a/;
console.log(expresion11.test('Asa')); // Salida: true
console.log(expresion11.test('Estación')); // Salida: true
console.log(expresion11.test('Ea')); // Salida: true

// Si queremos validar un código postal español, debemos indicar
// que solo se permiten 5 caracteres numéricos
let CPvalido = /^[0-9]{5}$/;
console.log(CPvalido.test('07005')); // Salida: true
console.log(CPvalido.test('RJ03D')); // Salida: false
console.log(CPvalido.test('7005')); // Salida: false

// PARÉNTESIS
// Permiten agrupar expresiones. Así se pueden realizar expresiones
// aún más complejas
let expresion12 = /([a-z]{2}[0-9]){3}/;

// La expresion12 obliga a que el texto tenga dos letras de la a a
// la z en un texto, luego un número. El último número entre llaves
// hace referencia a todo el paréntesis, por lo que las dos letras
// y el número deberán aparecer tres veces seguidas
console.log(expresion12.test('ad3rf1hj4')); // Salida: true
console.log(expresion12.test('a3f1j4')); // Salida: false
console.log(expresion12.test('ab3fg1')); // Salida: false

// LA BARRA VERTICAL (|)
// Permite indicar que se da por válida la expresión de la izquierda
// o la de la derecha
let expresion13 = /^([A-Z][0-9]{6})|([0-9][A-Z]{6})$/;
console.log(expresion13.test('A123456')); // Salida: true
console.log(expresion13.test('1ABCDEF')); // Salida: true

let cp1 = '49345';
let cp2 = '53345';
let expresion14 = /^((5[012])|([0-4][0-9]))([0-9]{3})$/;
console.log(expresion14.test(cp1)); // Salida: true
console.log(expresion14.test(cp2)); // Salida: false

// SÍMBOLOS ABREVIADOS
// Son símbolos que se usan con el carácter backlash y que permite
// escribir expresiones de forma aún más rápida.
/*
    Estas opciones se pueden encontrar en:
        https://www.w3schools.com/js/js_regexp.asp
*/