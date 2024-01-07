class ElementManipulator {
    constructor(elementId) {
      this.element = document.getElementById(elementId);
    }
    // afficher cacher les elements 
    toggleDisplay() {
      const display = window.getComputedStyle(this.element).getPropertyValue("display");
      this.element.setAttribute("display", display === "none" ? "block" : "none");
    }
    // cahcher l element 
    hide() {
      this.element.setAttribute("display", "none");
    }
    //afficher l element 
    show() {
      this.element.setAttribute("display", "block");
    }
  }
  
  class Lamp extends ElementManipulator {
    constructor() {
      super("grlampe"); // reference de  svg 
    }
  }
  
  class Door extends ElementManipulator {
    constructor() {
      super("g7");// reference de  svg 
    }
  }
  
  class Sheep extends ElementManipulator {
    constructor() {
      super("g85");// reference de  svg 
      
      this.additionalElements = ["g2-3", "g2-00", "g2-8", "g2-83"];// reference de  svg 
      this.additionalElementObjects = this.additionalElements.map((id) => new ElementManipulator(id));
    }
  // lancer cette methode pour afficher/cacher les motons sinn la fonction du classe principale manipule le groupe de 3 c tt 
    toggleSheepElementsDisplay() {
      this.toggleDisplay();
      this.additionalElementObjects.forEach((element) => element.toggleDisplay());
    }
  }
  
  class Drone extends ElementManipulator {
    constructor() {
      super("g23");
      this.positionX = 0;
      this.speed = 10;
      this.svgElement = this.element; // Référence à l'élément SVG du drone
      this.initialTransform = "matrix(0.290002, 0, 0, 0.327221, -1.88964, 25)";
      this.svgElement.setAttribute("transform", this.initialTransform);
      this.isMoving = false;
    }
  
    move() {
      if (this.isMoving) {
        // Mettre à jour la position en fonction de la vitesse
        this.positionX += this.speed;
        if (this.positionX >= 700) {
          this.positionX = 0;
        }
  
        // Appliquer la transformation de translation sur l'axe x
        const newTransform = `matrix(0.290002, 0, 0, 0.327221, ${this.positionX}, 20)`;
        this.svgElement.setAttribute("transform", newTransform);
        console.log(this.positionX);
      }
    }
  
    startMoving() {
      this.isMoving = true;
    }
  
    stopMoving() {
      this.isMoving = false;
    }
  
    setSpeed(speed) {
      this.speed = speed;
    }
  }
  
  
  class Farm extends ElementManipulator {
    constructor() {
      super("g5");
    }
  
    upDateColor(c) {
      this.element.style.fill = c;
    }
  
    protect() {
      if (this.element.style.fill === "blue") {
        console.log('1');
        this.upDateColor("black"); // Changer la couleur de "red" à "black"
      } else {
        console.log('2');
        this.upDateColor("blue");
      }
    }
  }
  
  
  
  class Truck extends ElementManipulator {
    constructor() {
      super("g3");// reference de  svg 
      this.positionX = 0;
      this.speed = 0;
      this.svgElement = this.element; // Référence à l'élément SVG du camion
      this.initialTransform = "matrix(0.290002, 0, 0, 0.327221, -1.88964, 275.106)";
      this.svgElement.setAttribute("transform", this.initialTransform);
      this.trackEnMarche = 0;
    }
  
    move() {
       

      if (this.trackEnMarche === 1) {
        // Mettre à jour la position en fonction de la vitesse
        this.positionX += this.speed;
        if (this.positionX >= 700) {    // extremité droite de l'element svg 
          this.positionX = 0;   // position de depart 
        }
  
        // Appliquer la transformation de translation sur l'axe x
        const newTransform = `matrix(0.290002, 0, 0, 0.327221, ${this.positionX}, 275.106)`;
        this.svgElement.setAttribute("transform", newTransform);
        //console.log(this.positionX);
      }
    }
  
setTrucktoOn(){
    
    console.log(this.trackEnMarche) ;
    if(this.trackEnMarche==1) {
        this.trackEnMarche=0 ; 
        this.speed=0 ;
    } else {
        this.trackEnMarche=1 ; 
        this.speed=10 ;
    } 
    console.log(this.trackEnMarche) ;
}

    toggleTrack() {
      this.toggleDisplay();
      this.trackEnMarche = this.element.getAttribute("display") === "block" ? 1 : 0;
    }
  }
  

  // Creer les objets de chaque classe 
  const lamp = new Lamp();
  const door = new Door();
  const truck = new Truck();
  const sheep = new Sheep();
  const drone = new Drone();
  const farm = new Farm();
  
  // lancer la mouvement du track
  function animateElement() {
    drone.move() ;
    if (truck.trackEnMarche === 1) {
      truck.move();
    }
  }
  

  setInterval(animateElement, 100); //1000=1 seconde 
  // recov cursor
const speedSlider = document.getElementById('speedSlider');


// Écoutez evénements sur le curseur pr maj la vitesse du drone
speedSlider.addEventListener('input', function() {
    console.log('lisn') ;
  const speedValue = parseInt(speedSlider.value);
  drone.setSpeed(speedValue);

  if(speedValue>5) {
   // drone.move() ;
    drone.startMoving();
  } else  {
    drone.stopMoving();
  }
});

  

  