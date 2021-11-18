//Creamos un constructor
function Punto(coordx, coordy) {
    this.coordx = coordx;
    this.coordy = coordy;
    //añadimos el this.variable

    //funcion para cambiar 
    this.cambiar = function(coordx, coordy) {
        this.coordx = coordx;
        this.coordy = coordy;
        //asignamos lo que vamos a cambiar
    }

    //funcion de obtener distancia
    this.distancia = function(Punto2) { //math.pow es para elevar
            let distancia = Math.sqrt(Math.pow((Punto2.coordx - (this.coordx)), 2) + Math.pow((Punto2.coordy - (this.coordy)), 2));
            return distancia;
        }
        //Piensa que el punto 1 lo ponemos tan solo con el this.coordx y el dos con Punto2.coordx

    //funcion para sumar punto 2 y punto 1 
    this.suma = function(Punto2) {
        let sumax = this.coordx + Punto2.coordx;
        let sumay = this.coordy + Punto2.coordy;

        //lo metemos en un nuevo punto
        return new Punto(sumax, sumay);
    }

    //Funcion tostring
    this.toString = function() {
        return ("Punto X->" + this.coordx + " Punto Y->" + this.coordy);
        //retornamos el string
    }

    //funcion copia
    this.copia = function() {
        return new Punto(this.coordx, this.coordy);
        //retornamos en un nuevo punto las coordenadas
    }
}

// ******* ******** ******** ******* *******

var p = new Punto(1, 2);
console.log("p: " + p.toString()) // Salida: (1,2)
var q = new Punto(6, -3);
console.log("q: " + q.toString()); //Salida: (6,-3)

p.cambiar(-5, 2);

var r = p.copia();
console.log("r: " + r.toString());
r.coordx = 9;

console.log("p: " + p.toString()); // Salida: (-5,2)
console.log("r: " + r.toString()); // Salida: (9,2)

var s = p.suma(r);
console.log("s: " + s.toString()); // Salida: (4,4)

console.log("Distancia entre p y q: " + p.distancia(q)); // Salida: 12.08
