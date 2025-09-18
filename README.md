# 🎁 Reto del Amigo Secreto

## 📌 Introducción

En este reto propuesto por el programa de **Alura Latam**, desarrollamos una aplicación que permite al usuario agregar nombres en una caja de texto. Una vez ingresados, el sistema selecciona aleatoriamente uno de ellos para revelar quién será el "amigo secreto".

## ⚙️ Desarrollo

Para implementar este programa, se tuvieron en cuenta las siguientes consideraciones:

- Verificar que no se introduzca un nombre en blanco.
- Mostrar en pantalla todos los nombres agregados a la lista.
- Limpiar la caja de texto cada vez que se termina de agregar un nombre.
- Al presionar el botón **"Sortear amigo"**, se debe mostrar el nombre seleccionado y ocultar la lista de amigos.

Con base en estas condiciones, se desarrollaron cuatro funciones en el archivo `app.js`, junto con una variable que contiene el arreglo donde se almacenan todos los nombres ingresados. Este arreglo se utiliza para realizar el sorteo.

## 🛠️ Funciones desarrolladas

### `agregarAmigo()`

Esta función se encarga de tomar el valor ingresado en la caja de texto al pulsar el botón **Añadir**, y agregarlo al arreglo `listaAmigos`. Si la caja de texto está vacía, se lanza una alerta solicitando un nombre válido y no se agrega ningún valor vacío al arreglo.

### `actualizarListaVisual(idLista, arrayDeNombres)`

Recibe dos parámetros: el ID del elemento HTML donde se mostrará la lista, y el arreglo de nombres (`listaAmigos`). Esta función actualiza la lista visual en pantalla con los nombres almacenados en el arreglo.

### `limpiarCaja()`

Cada vez que se invoca esta función, borra el contenido de la caja de texto, dejándola lista para ingresar un nuevo nombre.

### `sortearAmigo()`

Esta función selecciona aleatoriamente uno de los nombres del arreglo `listaAmigos` y lo muestra en pantalla como el amigo secreto. Utiliza la función `Math.floor(Math.random() * cantidadAmigos)` para generar un índice aleatorio, que se emplea para elegir un nombre del arreglo. Una vez realizado el sorteo, la lista de amigos se oculta.

## ✅ Conclusión

Gracias a estas funcionalidades, se logró desarrollar una aplicación funcional que cumple con los objetivos del reto. Este proyecto representa una excelente base para futuras mejoras, como agregar validaciones más robustas, persistencia de datos o una interfaz más dinámica. ¡Gracias por leer y explorar este proyecto!
