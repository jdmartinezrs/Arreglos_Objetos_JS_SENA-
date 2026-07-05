/**2. Inventario de frutas: Dado el arreglo ["Manzana", "Pera", "Uva"], agregue “Banano”
al inicio, retire el último elemento y muestre el arreglo final. Luego recórralo
utilizando for...of. */


export const agregarFrutaAlInicioListaFrutas = (frutas, fruta) => {
  return frutas.unshift(fruta);
}

export const retirarUltimoElementoDelListado = (frutas) => {
  return frutas.pop()
}

export const recorrerListadoFrutas = (frutas) => {
  for (let fruta of frutas) {
    console.log(fruta)
  } 
}