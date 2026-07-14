/**8. Registro de un libro: Cree un objeto llamado libro con las propiedades: título, autor,
número de páginas y género. Luego imprima un mensaje descriptivo usando estas
propiedades, por ejemplo:
El libro '___' del autor ___ pertenece al género ___."*/

export const imprimirMensajeDescriptivoLibro = (libro) => {
  console.log(
    `El libro "${libro.titulo}" del autor ${libro.autor}, tiene ${libro.numero_paginas} páginas y pertenece al género ${libro.genero}.`
  );
};
