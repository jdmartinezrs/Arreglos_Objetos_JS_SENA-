/**1. 3. Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
usando for y calcule el promedio (no use funciones externas). */


export const recorrerNArregloDeNotas= (notas) => {
   let sumaNotas =0;
  for(let i = 0; i<6; i++){
   
 sumaNotas  += notas[i];
  }
  let promedio = sumaNotas / 6
  return promedio 
}
