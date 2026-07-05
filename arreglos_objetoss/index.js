import { aniadirAlFinalListaAsistencia, eliminarPrimerNombreListaAsistencia, mostrarTotalNombresRegistrados  } from './actividadTransferencia/index.js'

let listaEstudiantes = ["Jose", "Victor", "Marlon", "Juan", "Luisa"]

let aniadirAlFinal = aniadirAlFinalListaAsistencia(listaEstudiantes, "Karol")
console.log(listaEstudiantes)

let eliminarPrimero = eliminarPrimerNombreListaAsistencia(listaEstudiantes)
console.log(listaEstudiantes)

let mostrarCantidadTotal = mostrarTotalNombresRegistrados(listaEstudiantes)
console.log(mostrarCantidadTotal)




