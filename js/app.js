//Escribe tu código aqui----
//Variables globales
const sectionContainer = document.getElementById("gallery");
const images = document.querySelectorAll("img");

//Convertir a array
const imagesArray = Array.from(images);
// console.log(typeof imagesArray);
// console.log(imagesArray);

//luego todos mis eventos
window.addEventListener("load", function() {
  replaceImg(imagesArray);
});

function replaceImg(imagesArray){
  //Vaciar section
  sectionContainer.innerHTML = " ";
  //Iterar en array y pintar en html
  imagesArray.forEach(function(img){
    //Crear
    let imageFigure = document.createElement("figure");
    let imageImg = document.createElement("img");
    let imageFigcaption = document.createElement("figcaption");

    //Atributos
    imageFigure.className = "images";
    imageImg.src = img.src;
    imageFigcaption.innerHTML = img.alt;

    //Agregar a html
    imageFigure.appendChild(imageImg);
    imageFigure.appendChild(imageFigcaption);
    sectionContainer.appendChild(imageFigure);

    // console.log(img.src);
    // console.log(img.alt);
  });
}

// let pietro = imagesArray.find(item => item.alt === "Pietro De Grandi - Pragser Wildsee, Italy");
// console.log(pietro);
