// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  
  const strangeArray2 = strangeArray.filter(element => typeof element === 'string'); 
  // filter es un método de array que crea un nuevo array con todos los elementos que cumplen con una condición específica.
  // typeof element === 'string' verifica si el tipo del elemento es una cadena de texto (string). Solo los elementos que pasan esta condición se incluyen en el nuevo array stringsOnly.
  
  strangeArray2.sort();
  // sort es un método de array que ordena los elementos del array en su lugar y devuelve el array ordenado. Por defecto ordena a los string en orden alfabético.
  
  showList(strangeArray2);
  // La función showList toma un array y lo muestra en un elemento HTML con el id list. Crea un nuevo elemento <li> para cada elemento del array y lo agrega a la lista.
  
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
});
