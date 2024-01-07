

//lampe
document.getElementById("grlampe").setAttribute("display", "none");
// document.getElementById("path26").setAttribute("display", "none");

//porte
document.getElementById("g7").setAttribute("display", "none");

//trucks
document.getElementById("g3").setAttribute("display", "none");

//mouton
document.getElementById("g85").setAttribute("display", "none");
document.getElementById("g2-3").setAttribute("display", "none");
document.getElementById("g2-00").setAttribute("display", "none");
document.getElementById("g2-8").setAttribute("display", "none");
document.getElementById("g2-83").setAttribute("display", "none");

//drone
//document.getElementById("g23").setAttribute("display", "none");

//document.getElementById("g23").setAttribute("display", "inline");

let drone = document.getElementById("g23").setAttribute("display", "none");


function allumerLampe() {
  var rectElement = document.getElementById("grlampe");
 

 
  var rectDisplay = window
    .getComputedStyle(rectElement)
    .getPropertyValue("display");

 
  if (rectDisplay === "none") {
    rectElement.setAttribute("display", "block");
  } else {
    rectElement.setAttribute("display", "none");
  }


  return false;
}

function ouvrirPorte() {
  var rectElement = document.getElementById("g7");
 

 
  var rectDisplay = window
    .getComputedStyle(rectElement)
    .getPropertyValue("display");

 
  if (rectDisplay === "none") {
    rectElement.setAttribute("display", "block");
  } else {
    rectElement.setAttribute("display", "none");
  }


  return false;
}



function activerDrone() {
  var rectElement = document.getElementById("g23");
 /*
  rectElement.style.fill = "blue"; 
  rectElement.style.stroke = "red";
  rectElement.style.borderColor="red" ;
 */
  var rectDisplay = window
    .getComputedStyle(rectElement)
    .getPropertyValue("display");

 
  if (rectDisplay === "none") {
    rectElement.setAttribute("display", "block");
  } else {
    rectElement.setAttribute("display", "none");
  }


  return false;
}

//activerDrone()
//sortirMouton()

function sortirMouton() {
  var rectElement = document.getElementById("g85");
 
document.getElementById("g2-3").setAttribute("display", "none");

document.getElementById("g2-8").setAttribute("display", "none");
document.getElementById("g2-83").setAttribute("display", "none");


 /*
  rectElement.style.fill = "blue"; 
  rectElement.style.stroke = "red";
  rectElement.style.borderColor="red" ;
 */
  var rectDisplay = window
    .getComputedStyle(rectElement)
    .getPropertyValue("display");

 
  if (rectDisplay === "none") {
    rectElement.setAttribute("display", "block");
    
document.getElementById("g2-3").setAttribute("display", "block");

document.getElementById("g2-8").setAttribute("display", "block");
document.getElementById("g2-83").setAttribute("display", "block");
  } else {
    rectElement.setAttribute("display", "none");
    document.getElementById("g2-3").setAttribute("display", "none");

document.getElementById("g2-8").setAttribute("display", "none");
document.getElementById("g2-83").setAttribute("display", "none");
  }


  return false;
}

var track_enmarche= 0 ; 

function allumertrack() {
  var rectElement = document.getElementById("g3");
 /*
  rectElement.style.fill = "blue"; 
  rectElement.style.stroke = "red";
  rectElement.style.borderColor="red" ;
 */
  var rectDisplay = window
    .getComputedStyle(rectElement)
    .getPropertyValue("display");

 
  if (rectDisplay === "none") {
    rectElement.setAttribute("display", "block");
     track_enmarche= 1 ; 

  } else {
    rectElement.setAttribute("display", "none");
    track_enmarche= 0 ; 

  }


  return false;
}


function protectFarm() {
  var svgElement = document.getElementById("g5");



// Changer le fond (fill) de l'élément SVG
svgElement.style.fill = "blue"; // Remplacez "blue" par la couleur que vous souhaitez

return false ;
}



var svgElement = document.getElementById("g3");

// Définir la position initiale et la vitesse de déplacement
var positionX = 0;
speed = 10;


// Valeur initiale de transformation matricielle
var initialTransform = "matrix(0.290002, 0, 0, 0.327221, -1.88964, 275.106)";
svgElement.setAttribute("transform", initialTransform);

// Fonction pour animer le déplacement
function animateElement() {
if (track_enmarche==1) {

// Mettre à jour la position en fonction de la vitesse
positionX += speed;
if (positionX==700) {
positionX=0  ;
} 
// Appliquer la transformation de translation sur l'axe x
var newTransform = "matrix(0.290002, 0, 0, 0.327221, " + positionX + ", 275.106)";
svgElement.setAttribute("transform", newTransform);
console.log(positionX) ;
}
}


setInterval(animateElement, 1000); 