//Creamos el constructor de Edificio
function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
    this.tipoVia = tipoVia;
    this.nombreVia = nombreVia;
    this.numeroEdificio = numeroEdificio;
    this.codigoPostal = codigoPostal;
    //Creamos un mapa que se llame mapaPropietariosEdificio
    this.mapaPropietariosEdificio = new Map();

    //metodo donde agregamos una planta al mapa
    this.agregarPlanta = function(numeroPlanta) {
        let mapeoPlanta = new Map()
        this.mapaPropietariosEdificio.set(numeroPlanta, mapeoPlanta);
    }

    //metodo donde agregamos un propietario con su numero planta y numero puerta en el mapa
    this.agregarPropietario = function(nombrePropietario, numeroPlanta, numeroPuerta) {
        let planta = this.mapaPropietariosEdificio.get(numeroPlanta)
        let puerta = planta.get(numeroPuerta)
        puerta.push(nombrePropietario)
    }

    //metodo donde agregamos un numero de puerta
    this.agregarPuerta = function(numeroPlanta, numeroPuerta) {
        let planta = this.mapaPropietariosEdificio.get(numeroPlanta)
        planta.set(numeroPuerta, [])
    }

    //imprimimos el codigo postal
    this.imprimirCodigoPostal = function() {
        return "\nCodigo Postal: " + this.codigoPostal;
    }

    //imprimimos el nombre de via
    this.imprimirNombreVia = function() {
        return "\nNombre de Via: " + this.nombreVia;
    }

    //imprimimos el numero de edificio
    this.imprimirNumeroEdificio = function() {
        return "\nNumero Edificio: " + this.numeroEdificio;
    }

    //imprimimos el tipo de via
    this.imprimirTipoVia = function() {
        return "\nTipo de Via: " + this.tipoVia;
    }

    //imprimimos a todos los propietarios
    this.imprimirTodosPropietarios = function() {
        //le damos valor a entidades con el mapa
        let entidades = this.mapaPropietariosEdificio.entries(); //entries para entidades
        //esto lo creamos porque si no da error
        let echo = "";

        //recorremos el mapa con el .size  y le damos el valor a let planta
        for (let i = 0; i < this.mapaPropietariosEdificio.size; i++) {
            let planta = entidades.next().value[0]; //para recorrer las entidades .next() y sacamos el valor 0
            //usando el let planta hacemos un echo para sarae las plantas
            echo += "\nPlanta:" + planta + "\n";

            //hacemos lo mismo pero sacando ahora la puerta
            let entidades2 = this.mapaPropietariosEdificio.get(planta); //ahora sacamos las entidades de la planta
            let key = entidades2.keys();

            for (let j = 0; j < entidades2.size; j++) { //.size = .lenght
                let puerta = key.next().value;
                echo += "  Puerta:" + puerta + "\n";

                //finalmente sacamos el propietario
                entidades2.get(puerta).forEach(propietario => {
                    echo += "      " + propietario + "\n";
                });
            }
        }

        return echo;
    }

    //modificamos el codigo postal mediante la entrada de datos
    this.modificarCodigoPostal = function(nuevoCodigoPostal) {
        this.codigoPostal = nuevoCodigoPostal;
    }

    //modificamos el nombre de la via mediante la entrada de datos
    this.modificarNombreVia = function(nuevoNombreVia) {
        this.nombreVia = nuevoNombreVia;
    }

    //modificamos el numero de edificio mediante la entrada de datos
    this.modificarNumeroEdificio = function(nuevoNumeroEdificio) {
        this.numeroEdificio = nuevoNumeroEdificio;
    }

    //modificamos el tipo de via mediante la entrada de datos
    this.modificarTipoVia = function(nuevoTipoVia) {
        this.tipoVia = nuevoTipoVia;
    }
}

//PRUEBA
const edificio1 = new Edificio('calle', 'marques de la fontsanta', 60, '07005');
console.log(edificio1)
    /* SALIDA:
        Edificio {
        tipoVia: 'calle',
        nombreVia: 'marques rubio',
        numeroEdificio: 70,
        codigoPostal: '07005',
        mapaPropietariosEdificio: Map(0) {},
        modificarTipoVia: [Function (anonymous)],
        modificarNombreVia: [Function (anonymous)],
        modificarNumeroEdificio: [Function (anonymous)],
        modificarCodigoPostal: [Function (anonymous)],
        imprimirTipoVia: [Function (anonymous)],
        imprimirNombreVia: [Function (anonymous)],
        imprimirNumeroEdificio: [Function (anonymous)],
        imprimirCodigoPostal: [Function (anonymous)],
        agregarPlanta: [Function (anonymous)],
        agregarPuerta: [Function (anonymous)],
        agregarPropietario: [Function (anonymous)],
        imprimirTodosPropietarios: [Function (anonymous)]
        }
    */

edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');
console.log(edificio1);
/* SALIDA:
    Edificio {
    tipoVia: 'calle',
    nombreVia: 'marques rubio',
    numeroEdificio: 70,
    codigoPostal: '07005',
    mapaPropietariosEdificio: Map(2) { '1A' => Map(0) {}, '1B' => Map(0) {} },
    modificarTipoVia: [Function (anonymous)],
    modificarNombreVia: [Function (anonymous)],
    modificarNumeroEdificio: [Function (anonymous)],
    modificarCodigoPostal: [Function (anonymous)],
    imprimirTipoVia: [Function (anonymous)],
    imprimirNombreVia: [Function (anonymous)],
    imprimirNumeroEdificio: [Function (anonymous)],
    imprimirCodigoPostal: [Function (anonymous)],
    agregarPlanta: [Function (anonymous)],
    agregarPuerta: [Function (anonymous)],
    agregarPropietario: [Function (anonymous)],
    imprimirTodosPropietarios: [Function (anonymous)]
    }
*/

edificio1.agregarPuerta('1A', '3');
edificio1.agregarPuerta('1A', '2');
edificio1.agregarPuerta('1B', '1')
console.log(edificio1);
/* SALIDA:
    Edificio {
    tipoVia: 'calle',
    nombreVia: 'marques rubio',
    numeroEdificio: 70,
    codigoPostal: '07005',
    mapaPropietariosEdificio: Map(2) {
        '1A' => Map(2) { '3' => [], '2' => [] },
        '1B' => Map(1) { '1' => [] }
    },
    modificarTipoVia: [Function (anonymous)],
    modificarNombreVia: [Function (anonymous)],
    modificarNumeroEdificio: [Function (anonymous)],
    modificarCodigoPostal: [Function (anonymous)],
    imprimirTipoVia: [Function (anonymous)],
    imprimirNombreVia: [Function (anonymous)],
    imprimirNumeroEdificio: [Function (anonymous)],
    imprimirCodigoPostal: [Function (anonymous)],
    agregarPlanta: [Function (anonymous)],
    agregarPuerta: [Function (anonymous)],
    agregarPropietario: [Function (anonymous)],
    imprimirTodosPropietarios: [Function (anonymous)]
    }
*/

edificio1.agregarPropietario('Belén Laserna Belenguer', '1A', '3');
edificio1.agregarPropietario('Pedro Jimenez Vázquez', '1A', '3');
edificio1.agregarPropietario('Ana María Rodriguez Figuerola', '1A', '2');
edificio1.agregarPropietario('Miguel López López', '1B', '1');
console.log(edificio1);
/* SALIDA:
    Edificio {
    tipoVia: 'calle',
    nombreVia: 'marques rubio',
    numeroEdificio: 70,
    codigoPostal: '07005',
    mapaPropietariosEdificio: Map(2) {
        '1A' => Map(2) { '3' => [Array], '2' => [Array] },
        '1B' => Map(1) { '1' => [Array] }
    },
    modificarTipoVia: [Function (anonymous)],
    modificarNombreVia: [Function (anonymous)],
    modificarNumeroEdificio: [Function (anonymous)],
    modificarCodigoPostal: [Function (anonymous)],
    imprimirTipoVia: [Function (anonymous)],
    imprimirNombreVia: [Function (anonymous)],
    imprimirNumeroEdificio: [Function (anonymous)],
    imprimirCodigoPostal: [Function (anonymous)],
    agregarPlanta: [Function (anonymous)],
    agregarPuerta: [Function (anonymous)],
    agregarPropietario: [Function (anonymous)],
    imprimirTodosPropietarios: [Function (anonymous)]
    }
*/

console.log(edificio1.imprimirTodosPropietarios());
/* SALIDA:
    Planta: 1A
        Puerta: 3
            Belén Laserna Belenguer
            Pedro Jimenez Vázquez
        Puerta: 2
            Ana María Rodriguez Figuerola
    Planta: 1B
        Puerta: 1
            Miguel López López
*/

edificio1.modificarTipoVia('avenida');
edificio1.modificarNombreVia('Marques de la Fontsanta');
edificio1.modificarNumeroEdificio('60A');
edificio1.modificarCodigoPostal('007005');
console.log(edificio1.imprimirTipoVia());
/* SALIDA:
    Tipo de via: avenida
*/

console.log(edificio1.imprimirNombreVia());
/* SALIDA:
    Nombre de la vía: Marques de la Fontsanta
*/

console.log(edificio1.imprimirNumeroEdificio());
/* SALIDA:
    Número del edificio 60A
*/

console.log(edificio1.imprimirCodigoPostal());
/* SALIDA:
    Código Postal(CP): 007005
*/