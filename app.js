// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  // 1. Capturar el valor del campo de texto
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // 2. Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // 3. Actualizar el array
  amigos.push(nombre);

  // 4. Limpiar el campo de entrada
  input.value = "";
  actualizarLista(); // refresca la lista en la página

  // 5. (Opcional de prueba) Mostrar en consola
  console.log(amigos);
}

function actualizarLista() {
  // 1. Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // 2. Limpiar la lista existente
  lista.innerHTML = "";

  // 3. Recorrer el array amigos
  for (let i = 0; i < amigos.length; i++) {
    // 4. Crear un nuevo <li> y asignarle el nombre
    const li = document.createElement("li");
    li.textContent = amigos[i];

    // Agregar el <li> a la lista
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  // 1. Validar que haya amigos
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // 2. Generar un índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  const amigoSorteado = amigos[indice];

  // 4. Mostrar el resultado en la lista
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpiar resultados anteriores

  const li = document.createElement("li");
  li.textContent = amigoSorteado;
  resultado.appendChild(li);
}

