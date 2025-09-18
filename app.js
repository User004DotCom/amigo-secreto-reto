//Creacion del arreglo de amigos
let listaAmigos = [];

//funcion para agregar amigos al arreglo
function agregarAmigo() {
    const ulr = document.getElementById("resultado");
    ulr.innerHTML = "";  
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

//actualizar los valores de los nombres que se muestran por pantalla de la lista de amigos
function actualizarListaVisual(idLista, arrayDeNombres) {
    const ul = document.getElementById(idLista);
    ul.innerHTML = ""; // Limpia la lista visual

    for (let i = 0; i < arrayDeNombres.length; i++) {
        const li = document.createElement("li");
        li.textContent = arrayDeNombres[i];
        ul.appendChild(li);
    }
}

//vacia el contenedor para ingrasar otro nombre
function limpiarCaja() {
    document.getElementById("amigo").value = "";
    return;
}

//selecciona al azar un nombre del arreglo y lo muestra por pantalla
function sortearAmigo() {
    let cantidadAmigos = listaAmigos.length;
    console.log(cantidadAmigos);
    if (cantidadAmigos > 0) {
        let nroGanador = Math.floor(Math.random()*cantidadAmigos);
        console.log(nroGanador);
        console.log(listaAmigos[nroGanador]);
    
        const ula = document.getElementById("listaAmigos");
        ula.innerHTML = "";

        const ulr = document.getElementById("resultado");
        ulr.innerHTML = "El amigo secreto sorteado es " + listaAmigos[nroGanador];

        listaAmigos = [];
    }
    return;
}