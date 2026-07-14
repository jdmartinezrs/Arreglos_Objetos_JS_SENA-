import { recorrerClavesValoresObjetoPersonal  } from './actividadTransferencia/index.js'

let productos = [{nombre: "Gafas" , precio: 500000, disponibilidad: true },
    {nombre: "Camiseta selección Colombia " , precio: 600000, disponibilidad: true},
    {nombre: "Álbum Panini" , precio: 70000, disponibilidad: false }]


let mapNombres = recorrerClavesValoresObjetoPersonal(productos)

console.log( mapNombres);


/**let registros = [{idUser:1, userName:'user1'},{idUser:2, userName:'user2'}, {idUser:3, userName:'user3'}]

let mapIdUsers = registros.map(({idUser}) => idUser);

console.log(mapIdUsers); */