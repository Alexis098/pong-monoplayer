let demarrer = false;

//cette fonction permet de déplacer la balle et les raquettes en récupérant les fonctions bouge dans les fichiers js correspondant
setInterval(function(){  
  if(demarrer){
    balle.bouge();
    raquetteG.bouge();
    raquetteD.bouge(); 
  }
 
  
}, 10);

$("#btn-jouer").on("mouseup", function (event) {
  event.preventDefault();
  demarrer=true;
  $("#ecran-debut").addClass("invisible");
});

//fonction permettant "d'écouter" les touches "h et b" du clavier lorsqu'elles sont pressées
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    if(event.key === "h"){
      raquetteG.monte();
    }
    if(event.key === "h"){
      raquetteD.descend();
    }
    if(event.key === "b"){
      raquetteD.monte();
    }
    if(event.key === "b"){
      raquetteG.descend();
    }
    event.preventDefault();
  }, true);

//fonction permettant "d'écouter" les touches "h et b" du clavier lorsqu'elles sont relachées
window.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) { return}
  if(event.key === "h"){
    raquetteG.stop();
  }
  if(event.key === "h"){
    raquetteD.stop();
  }
  if(event.key === "b"){
    raquetteD.stop();
  }
  if(event.key === "b"){
    raquetteG.stop();
  }
  event.preventDefault();
}, true);