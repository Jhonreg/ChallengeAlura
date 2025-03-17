// Arrays para almacenar los nombres y los ya sorteados
let amigos = [];
let amigosSorteados = [];

// Elementos del DOM
const amigoInput = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = amigoInput.value.trim(); // Obtener el valor y eliminar espacios
    const nombreMinusculas = nombre.toLowerCase(); // Convertir a minúsculas para comparación

    // Validar si el campo está vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Verificar si el nombre ya existe (ignorando mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombreMinusculas)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    // Agregar el nombre al array (manteniendo el formato original)
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
    // Verificar si hay nombres disponibles para sortear
    const nombresDisponibles = amigos.filter(nombre => !amigosSorteados.some(sorteado => sorteado.toLowerCase() === nombre.toLowerCase()));

    console.log('Amigos:', amigos);
    console.log('Amigos sorteados:', amigosSorteados);
    console.log('Nombres disponibles:', nombresDisponibles);

    if (nombresDisponibles.length === 0) {
        resultado.innerHTML = ''; // Limpiar resultado anterior
        const li = document.createElement('li');
        li.textContent = '¡Todos los amigos secretos ya fueron sorteados!';
        resultado.appendChild(li);
        return;
    }

    // Seleccionar un nombre aleatorio de los disponibles
    const indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
    const amigoSecreto = nombresDisponibles[indiceAleatorio];

    // Agregar el nombre a los sorteados
    amigosSorteados.push(amigoSecreto);

    // Mostrar el resultado en la lista de resultados
    resultado.innerHTML = ''; // Limpiar el resultado anterior
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}

// Bonus: Permitir agregar nombres con la tecla Enter
amigoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});