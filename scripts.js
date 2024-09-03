let botonEnviar = document.getElementById("enviar");

botonEnviar.addEventListener("click", function() {
    document.getElementById("mensaje").innerText = "¡Gracias POR SER PARTE!";
});

window.onload = function() {
    let edad = prompt("¿Cuántos años tenes?");
    if (edad === null || edad.trim() === "" || isNaN(edad) || parseInt(edad) <= 20) {
        alert("Perdon, pero necesitamos que seas mayor de 21 años para poder ADOPTAR");
        document.body.innerHTML = "";
    } else {
        alert("Bienvenido/a a REFUGIO DE PELOS");
    }
};