import { conocerTamanho, agregarMango, deleteLastFruit, agregarUvaInicio} from './ejercicios/index.js'


let frutas = ["Manzana", "Pera", "Banano"]

let insertar = agregarMango (frutas, "MANGO")
let conocer = conocerTamanho(frutas);
let deletelast = deleteLastFruit(frutas)
conocer = conocerTamanho(frutas);
let agregarUva =agregarUvaInicio (frutas ,  "UVA")
console.log(frutas)


