import { aniadirAlFinalListaAsistencia, eliminarPrimerNombreListaAsistencia, mostrarTotalNombresRegistrados  } from './actividadTransferencia/index.js'

let productos = [{nombre: "Gafas" , precio: 500000, disponibilidad: true },
    {nombre: "Camiseta selección Colombia " , precio: 600000, disponibilidad: true},
    {nombre: "Álbum Panini" , precio: 70000, disponibilidad: false }]

let aniadirAlFinal = aniadirAlFinalListaAsistencia(listaEstudiantes, "Karol")

let eliminarPrimero = eliminarPrimerNombreListaAsistencia(listaEstudiantes)

let mostrarCantidadTotal = mostrarTotalNombresRegistrados(listaEstudiantes)





