import { obtenerMarcaCelular, obtenerModeloCelular, obtenerAnioCelular,obtenerEstadoCelular  } from './actividadTransferencia/index.js'

let caracteristicasCelular = {
    marca: "Motorola", 
     modelo: "G30", 
     anio: "2018",
    estado: "Nuevo"
}
    
let obtenerMarca = obtenerMarcaCelular(caracteristicasCelular,"marca")
let obtenerModelo = obtenerModeloCelular(caracteristicasCelular, "modelo")
let obtenerAnio = obtenerAnioCelular(caracteristicasCelular, "modelo")
let obtenerEstado = obtenerEstadoCelular(caracteristicasCelular, "estado")






