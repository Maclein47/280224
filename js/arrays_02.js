var vehiculo = {
    marca: "Alfa",
    modelo: "155",
    color: "rojo",
    caballos: 155,
    velocidad: 230,
    //Metodo dentro del array con funcion callback
    cambiamosCaballos: function (modifCaballos) {
        this.caballos = modifCaballos; //en este ambito caballos es = al valor que le pasamos a la funcion "modifCaballos"
        document.getElementById("salida_caballos").textContent = JSON.stringify(this); // lo enviamos al DOM con formato JSON
    }
};

//Metemos los caballos
document.getElementById("Ecaballos").addEventListener("input", function ()

{//accedemos al metodo con la sigueitne linea:
    vehiculo.cambiamosCaballos(this.value);
    if (this.value > 150){
        document.getElementById("salida_caballos").innerHTML = "ESTE VEHICULO ES DE CLASE A";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Simula una carga asíncrona (puedes reemplazar este timeout con una función que cargue tus recursos)
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none"; // Oculta el preloader
        document.getElementById("content").style.display = "block"; // Muestra el contenido
    }, 2000); // Tiempo de espera en milisegundos (ejemplo: 3000 = 3 segundos)
});



