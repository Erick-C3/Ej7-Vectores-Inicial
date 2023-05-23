const divContenedorTitulos = document.querySelector("#contenedor-titulos");


const titulosNum = [5,6,1,2,6,3];
const titulosContenido = [
    "Contenido 111",
    "Contenido 1",
    "Contenido 1",
    "Contenido 1",
    "Contenido 21",
    "Contenido 111",
];

let numeroTitulo = 0;

for (let i = 0; i < titulosNum.length; i++) {
    numeroTitulo = titulosNum[i];
    divContenedorTitulos.innerHTML += `
        <h${ numeroTitulo }> ${titulosContenido[i]} </h${ numeroTitulo }>
    `;
}