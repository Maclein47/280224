// By Angel Majan

var vehiculo2 = {
    Marca: "Chevrolet",
    Modelo: "Camaro",
    Año: 2020,
    color: "negro",
    cambioColor: function (nuevo_color) {
        this.color = nuevo_color;
        document.getElementById("salida_valor").textContent = JSON.stringify(this);
        actualizarSalida();
    }
};

function actualizarSalida() {
    var salidaDiv = document.getElementById("salida");
    salidaDiv.innerHTML = "<p>Valores del array vehiculo2:</p>";
    for (var propiedad in vehiculo2) {
        if (vehiculo2.hasOwnProperty(propiedad)) {
            salidaDiv.innerHTML += "<div>" + propiedad + ": " + vehiculo2[propiedad] + "</div><br>";
        }
    }
}
document.getElementById("calculos").addEventListener("keydown", function () {
    if (event.key === "Enter") {
        vehiculo2.cambioColor(this.value);
        event.preventDefault(); // Esto evita que el formulario se envíe si está dentro de un formulario
    }
});
// Evento de escucha "input" actualiza a cada tecla

// vehiculo2.cambioColor("azul");
// console.log(vehiculo2);
