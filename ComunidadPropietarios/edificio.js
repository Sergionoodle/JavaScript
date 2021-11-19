function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
    this.tipoVia = tipoVia;
    this.nombreVia = nombreVia;
    this.numeroEdificio = numeroEdificio;
    this.codigoPostal = codigoPostal;
    this.mapaPropietariosEdificio = new Map();

    this.agregarPlanta = function(numeroPlanta) {
        this.numeroPlanta = numeroPlanta;
    }

    this.agregarPropietario = function(nombrePropietario, numeroPlanta, numeroPuerta) {
        this.nombrePropietario = nombrePropietario;
        this.__protoPlanta__ = new agregarPlanta(numeroPlanta);
        this.numeroPuerta = numeroPuerta;
    }

    this.agregarPuerta = function(numeroPlanta, numeroPuerta) {
        this.__protoPropi__ = new agregarPropietario(numeroPlanta, numeroPuerta);
    }

    this.imprimirCodigoPostal = function() {
        return "\nCodigo Postal: " + this.codigoPostal;
    }

    this.imprimirNombreVia = function() {
        return "\nNombre de Via: " + this.nombreVia;
    }

    this.imprimirNumeroEdificio = function() {
        return "\nNumero Edificio: " + this.numeroEdificio;
    }

    this.imprimirTipoVia = function() {
        return "\nTipo de Via: " + this.tipoVia;
    }

    this.imprimirTodosPropietarios = function() {
        return "\nPropietarios: " + this.nombrePropietario;
    }

    this.modificarCodigoPostal = function(nuevoCodigoPostal) {
        this.codigoPostal = nuevoCodigoPostal;
    }
}