// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(nombreAmigo);

    listaAmigos.push(nombreAmigo);
    console.log(listaAmigos);

    limpiarCaja();

    actualizarListaVisual("listaAmigos", listaAmigos)
    return;
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