<<<<<<< HEAD
//array ac comme valeurs les couleurs des boutons
var buttonColours = ["red", "blue", "yellow", "green"];

//array vide pour stocker le pattern du jeu
var gamePattern = [];

//array vide pour stocker le pattern proposé par l'utilisateur
var userClickedPattern = [];

// on initialise le level du jeu
var level = 0;

//variable pour vérifier que le jouer a lancé le jeu
var gameStarted = false;




//on détecte si le jeu a commencé avec un keypress
    $(document).on("keypress", function(){
        //si une touche a été pressé
        if(!gameStarted) {
            $("h1").text("Level " + level);
            nextSequence();

            //on retourne la variable game started a true pour ne pas recommencer le jeu si le joueru appuie sur une autre touche
            gameStarted = true;
        }
    
    });



//on ajoute un event listener sur les boutons
$(".btn").on("click", function() {

    //on récupère l'attribut du bouton cliqué
    var userChosenColour = $(this).attr("id");
   
    //on rajoute la valeur à l'array userClickedPattern
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    //on appelle la fonction playSound avec comme paramètre le nom de la couleur choisie
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
   });



// FONCTION POUR RANDOMISER LA SEQUENCE DE COULEUR::

function nextSequence() {
    //update du niveau de la partie
    level++;
    
    //update du titre
    $("h1").text("Level " +  level);

    userClickedPattern = [];

    //on génère un nbre randome de 1 à 4
    var randomNumber = Math.floor(Math.random()*3 + 1);

    //on associe le nombre random à une valeur de l'array des button de couleur
    var randomChosenColour = buttonColours[randomNumber];

    //on rajoute la valeur à l'array de game pattern
    gamePattern.push(randomChosenColour);

    // on récupère l'id du button et on crée un effet flash
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    //on appellela fonction playSound avec le nom de la couleur randomisée
    playSound(randomChosenColour);

    return randomChosenColour;

}


// VERIFIER LES REPONSES DE L'UTILISATEUR
function checkAnswer(currentLevel) {
    console.log(currentLevel);
    // on vérifie si le dernier élément cliqué par l'utilisateur correspond bien
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("succes");
        console.log(gamePattern);

        //on vérifie si la séquence correspond
        if(userClickedPattern.length === gamePattern.length) {
             //on lance le prochain niveau et on ajoute un timer
             setTimeout(function () {
                nextSequence();
             }, 1000);
        }

    // si la réponse ne correspond pas
    } else {
        console.log(gamePattern);
        console.log("wrong");
        // on update le titre
        $("h1").text("Game over, press any key to Restart");
        //on rajoute la classe game over
        $("body").addClass("game-over");

        //on enlève la classe game-over après 1000millisecondes
         setTimeout(function() {
            $("body").removeClass("game-over");
         }, 1000);

       startOver();
        
    }
}


//FONCTION POUR JOUER LES SONS ASSOCIES AUX COULEURS
    function playSound(name) {
        // on fait joué le son associé en concaténant pour obtenir l'url du fichier
        var audio = new Audio("/sounds/" + name + ".mp3");
        console.log(audio);
       
        //on fait jouer l'audio
        audio.play();
          }
       


//FONCTION POUR ANIMER LES CLICK UTILISATEURS
function animatePress(currentColour) {
    $("#"+ currentColour).addClass("pressed");

        setTimeout(function () {
            $("#"+ currentColour).removeClass("pressed");
        }, 100);
            
};


//relancer la partie après un game over
function startOver() {
    
    // on réinitialise les variables
    gameStarted = false;
    gamePattern = [];
    level = 0;
}
=======
//array ac comme valeurs les couleurs des boutons
var buttonColours = ["red", "blue", "yellow", "green"];

//array vide pour stocker le pattern du jeu
var gamePattern = [];

//array vide pour stocker le pattern proposé par l'utilisateur
var userClickedPattern = [];

// on initialise le level du jeu
var level = 0;

//variable pour vérifier que le jouer a lancé le jeu
var gameStarted = false;




//on détecte si le jeu a commencé avec un keypress
    $(document).on("keypress", function(){
        //si une touche a été pressé
        if(!gameStarted) {
            $("h1").text("Level " + level);
            nextSequence();

            //on retourne la variable game started a true pour ne pas recommencer le jeu si le joueru appuie sur une autre touche
            gameStarted = true;
        }
    
    });



//on ajoute un event listener sur les boutons
$(".btn").on("click", function() {

    //on récupère l'attribut du bouton cliqué
    var userChosenColour = $(this).attr("id");
   
    //on rajoute la valeur à l'array userClickedPattern
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    //on appelle la fonction playSound avec comme paramètre le nom de la couleur choisie
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
   });



// FONCTION POUR RANDOMISER LA SEQUENCE DE COULEUR::

function nextSequence() {
    //update du niveau de la partie
    level++;
    
    //update du titre
    $("h1").text("Level " +  level);

    userClickedPattern = [];

    //on génère un nbre randome de 1 à 4
    var randomNumber = Math.floor(Math.random()*3 + 1);

    //on associe le nombre random à une valeur de l'array des button de couleur
    var randomChosenColour = buttonColours[randomNumber];

    //on rajoute la valeur à l'array de game pattern
    gamePattern.push(randomChosenColour);

    // on récupère l'id du button et on crée un effet flash
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    //on appellela fonction playSound avec le nom de la couleur randomisée
    playSound(randomChosenColour);

    return randomChosenColour;

}


// VERIFIER LES REPONSES DE L'UTILISATEUR
function checkAnswer(currentLevel) {
    console.log(currentLevel);
    // on vérifie si le dernier élément cliqué par l'utilisateur correspond bien
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("succes");
        console.log(gamePattern);

        //on vérifie si la séquence correspond
        if(userClickedPattern.length === gamePattern.length) {
             //on lance le prochain niveau et on ajoute un timer
             setTimeout(function () {
                nextSequence();
             }, 1000);
        }

    // si la réponse ne correspond pas
    } else {
        console.log(gamePattern);
        console.log("wrong");
        // on update le titre
        $("h1").text("Game over, press any key to Restart");
        //on rajoute la classe game over
        $("body").addClass("game-over");

        //on enlève la classe game-over après 1000millisecondes
         setTimeout(function() {
            $("body").removeClass("game-over");
         }, 1000);

       startOver();
        
    }
}


//FONCTION POUR JOUER LES SONS ASSOCIES AUX COULEURS
    function playSound(name) {
        // on fait joué le son associé en concaténant pour obtenir l'url du fichier
        var audio = new Audio("sounds/" + name + ".mp3");
        console.log(audio);
       
        //on fait jouer l'audio
        audio.play();
          }
       


//FONCTION POUR ANIMER LES CLICK UTILISATEURS
function animatePress(currentColour) {
    $("#"+ currentColour).addClass("pressed");

        setTimeout(function () {
            $("#"+ currentColour).removeClass("pressed");
        }, 100);
            
};


//relancer la partie après un game over
function startOver() {
    
    // on réinitialise les variables
    gameStarted = false;
    gamePattern = [];
    level = 0;
}
>>>>>>> workingGame
