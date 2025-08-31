// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(nombreAmigo);
    if (nombreAmigo != "") {
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
        limpiarCaja();
        actualizarListaVisual("listaAmigos", listaAmigos);
        
        return;
    } else {
        alert("Por favor ingresar un nombre valido");
        
        return;
    }
    
}

function actualizarListaVisual(idLista, arrayDeNombres) {
    const ul = document.getElementById(idLista);
    ul.innerHTML = ""; // Limpia la lista visual

    arrayDeNombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
    return;
}

function sortearAmigo() {
    let cantidadAmigos = listaAmigos.length;
    console.log(cantidadAmigos);
    let nroGanador = Math.floor(Math.random()*cantidadAmigos);
    console.log(nroGanador);
    console.log(listaAmigos[nroGanador]);
    
    const ula = document.getElementById("listaAmigos");
    ula.innerHTML = "";

    const ulr = document.getElementById("resultado");
    ulr.innerHTML = "El amigo secreto sorteado es " + listaAmigos[nroGanador];

    listaAmigos = [];
    return
}