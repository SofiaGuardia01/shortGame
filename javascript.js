let opcionesAleatorias = ["piedra", "papel", "tijera"];
let puntos = 0;

function userChoice(userSelection){
    /* obtiene opcion aleatoria */
    let computerSelection = obtenerSeleccionAleatoria();

    /* muestra opcion del usuario y compu */
    document.getElementById("opcionElegida").innerText = "Computadora eligió " + computerSelection.toUpperCase();

    /* lógica de la partida */
    determinarResultado(userSelection.toLowerCase(), computerSelection.toLowerCase());

    /* actualiza puntos */
    document.getElementById("puntos").innerText = puntos;
}

function obtenerSeleccionAleatoria(){
    let indiceAleatorio = Math.floor(Math.random() * opcionesAleatorias.length);
    return opcionesAleatorias[indiceAleatorio]
}

function determinarResultado(user, computer){
    console.log("Usuario: " + user);
    console.log("Computadora: " + computer);

    if (user === computer){
        console.log("Empate");
    } else if (
        (user === "piedra" && computer === "tijera") || 
        (user === "tijera" && computer === "papel") ||
        (user === "papel" && computer === "piedra")){
            console.log("Ganaste!");
            puntos++;
        }else {
            console.log("Perdiste");
            puntos--;
        }
}

document.getElementById("restart").addEventListener("click", function(){
    puntos = 0;
    document.getElementById("opcionElegida").innerText = "...";
    document.getElementById("puntos").innerText = 0;
})





/* obtiene elección aleatoria de la compu */
/* let computerSelection = obtenerSeleccionAleatoria(); */

/*  */



/* IF CLICK ROCK 
let a = click en rock*/
/* let rock = document.getElementsByClassName("rock");
let a = rock.onclick;

/* IF CLICK SCISSORS 
let b = click en scissors*/
/* let scissors = document.getElementsByClassName("scissor");
let b = scissors.onclick;

/* IF CLICK PAPER 
let c = click en paper*/
/* let paper = document.getElementsByClassName("paper");
let c = paper.onclick; */ 

/* LOGICA ALEATORIA DE LA COMPUTADORA || MOSTRARLA UNA VEZ QUE EL USUARIO HAYA HECHO SU CLICK 

let opciones = ["piedra", "papel", "tijera"]
>>>> funcion p elección aleatoria

let campoAleatorio = document.getElementsByClassName(aleatorio)

let opcionElegida = campoAleatorio[1]

opcionElegida = >>>> funcion aleatoria
*/


/* IF COINCIDEN = EMPATE 
switch{
    case (a=opciones[0]):
        
}
*/


/* IF = GANA */

/* IF = PIERDE */

/* FUNCION CON : ? */

/*  */