/**a Manipulación de un Arreglo. Dado el arreglo inicial:
let frutas = "Manzana", "Pera", "Banano";
• Realice las siguientes operaciones y escriba el resultado final del arreglo:
• Agregue "Mango" al final.
• Elimine el último elemento.
• Agregue "Uva" al inicio.
• Elimine el primer elemento.
• Escriba cuántos elementos tiene el arreglo actualmente usando length. */


export const agregarMango = (listaFruta,fruta)=>{
    return listaFruta.push(fruta);
}