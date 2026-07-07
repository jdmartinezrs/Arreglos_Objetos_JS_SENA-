/**1. 5. Lista de tareas: Cree un arreglo vacío llamado tareas. Agregue tres actividades
utilizando push(). Luego elimine la última utilizando pop(). Muestre el resultado.
*/
import promptSync from "prompt-sync";

const prompt = promptSync();

export const aniadirTresTareasEnLista = (tarea, listaTareas) => {
  for (let i =0; i<3; i++){
    let tarea = prompt("Ingresa el nombre de la tarea: ")
    listaTareas.push(tarea)
  }
}

export const eliminarUltimaTarea=(listaTareas)=>{
  return listaTareas.pop();
}