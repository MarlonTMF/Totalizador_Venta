import Items_Total from "./Totalizador";

const cantidadInput = document.querySelector("#cantidad-items");
const mostrarButton = document.querySelector("#mostrar-button");
const resultadoDiv = document.querySelector("#resultado-div");

mostrarButton.addEventListener("click", () => {
  const cantidad = Number.parseInt(cantidadInput.value, 10);
  resultadoDiv.innerHTML = `<p>Cantidad ingresada: ${cantidad}</p>`;
});
