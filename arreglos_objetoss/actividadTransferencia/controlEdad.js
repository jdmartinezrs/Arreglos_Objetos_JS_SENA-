/**7. git commit -m "Control de edades: Cree un arreglo con edades de cinco personas. Recorra el
arreglo usando for...of y muestre solo las edades mayores o iguales a 18".*/

export const mostrarEdadesMayoresOIgualesDiezOcho = (edadesPersonas,edad) => {
for (let edad of edadesPersonas){
  if(edad>=18){
    console.log(edad)
  }
}
}