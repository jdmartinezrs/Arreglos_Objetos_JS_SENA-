/**1. git commit -m "Lista de asistencia: Cree un arreglo con los nombres de cinco aprendices. Agregue
un nuevo nombre al final y elimine el primero. Finalmente, muestre la cantidad total
de nombres registrados" */


export const aniadirAlFinalListaAsistencia = (alumnos, alumno) => {
  return alumnos.push(alumno);
}

export const eliminarPrimerNombreListaAsistencia = (alumnos) => {
  return alumnos.shift();
}

export const mostrarTotalNombresRegistrados = (alumnos) => {
  return alumnos.length
}