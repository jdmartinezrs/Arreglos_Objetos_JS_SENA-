/**
 * 6. Describiendo un objeto personal: Cree un objeto que represente algo que lleve
consigo todos los días (ej. audífonos, libreta, termo). Debe tener al menos cuatro
propiedades. Recorra sus claves y valores usando un ciclo for...of sobre
Object.entries().

 */

export const recorrerClavesValoresObjetoPersonal =(objetoPersonal)=>{
  for (const [key, value] of Object.entries(objetoPersonal)) {
  console.log(`${key}: ${value}`);
}

}