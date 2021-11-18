function parOno(num) {
    if (num % 2 === 0) {
        return "es par";
    } else {
        return "es impar";
    }
}

for (var i = 0; i < 500; i++) {
    var randoms = Math.random() * 10001;
    var numeritos = Math.round(randoms);

    document.write("<br>");

    document.write(numeritos + " ");

    document.write(parOno(numeritos));


}

//funcion flecha -->
//const par = (x) => (x%2 == 0) ? "par" : "impar"; -->