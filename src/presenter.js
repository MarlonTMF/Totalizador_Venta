import Items_Total from "./Totalizador";

const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio");
const mostrarButton = document.querySelector("#mostrar-button");
const resultadoDiv = document.querySelector("#resultado-div");

mostrarButton.addEventListener("click", () => {
  const cantidad = Number.parseInt(cantidadInput.value, 10);
  const precio = Number.parseFloat(precioInput.value);
  const total = Items_Total(cantidad, precio);
  resultadoDiv.innerHTML = `<p>Cantidad ingresada: ${cantidad}</p><p>Total: ${total}</p>`;
});
