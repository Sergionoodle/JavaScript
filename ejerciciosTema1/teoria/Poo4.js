/* ----------RECORRER LAS PROPIEDADES DE UN OBJETO------------*/
// El bucle idóneo para recorrer las propiedades de un objeto es 
// el bucle for...in

// Ejemplo
let punto = {
    x: 19,
    y: 36,
    mostrarCoordenadas: function(){
        return `(${this.x},${this.y})`;
    }
};

for (let prop in punto){
    console.log(`${prop} tiene el valor ${punto[prop]}`);
}

/* Salida:
    x tiene el valor 19
    y tiene el valor 36
    mostrarCoordenadas tiene el valor function(){
            return `(${this.x},${this.y})`;
        }
*/

// Si no se desea mostrar las funciones haríamos lo siguiente
let punto = {
    x: 19,
    y: 36,
    mostrarCoordenadas: function(){
        return `(${this.x},${this.y})`;
    }
};

for (let prop in punto){
    if (typeof punto[prop] != 'function') { 
        console.log(`${prop} tiene el valor ${punto[prop]}`);
    }
}

/* Salida:
    x tiene el valor 19
    y tiene el valor 36
*/

/* --------------BORRAR PROPIEDADES DE OBJETOS----------------*/
// OPERADOR DELETE
// El operador delete permite borrar propiedades de los objetos.
// Se usa indicando, detrás de la palabra delete, la propiedad a
// borrar.

// Ejemplo
let objeto = {
    x: 18,
    y: -10,
    z: -1
};

delete objeto.z;
console.log(objeto.x); // Salida: 18
console.log(objeto.z); // Salida: undefined
console.log(objeto);