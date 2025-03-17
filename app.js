// Array para almacenar los nombres
let amigos = [];

// Elementos del DOM
const amigoInput = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = amigoInput.value.trim(); // Obtener el valor y eliminar espacios

    // Validar si el campo está vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el campo de texto
    amigoInput.value = '';
}

// Función para actualizar la lista visible
function actualizarLista() {
    listaAmigos.innerHTML = ''; // Limpiar la lista actual
    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Crear un elemento <li>
        li.textContent = amigo; // Asignar el nombre
        listaAmigos.appendChild(li); // Agregar a la lista
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Verificar si hay nombres en la lista
    if (amigos.length === 0) {
        alert('Agrega al menos un nombre antes de sortear.');
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    resultado.innerHTML = ''; // Limpiar el resultado anterior
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}