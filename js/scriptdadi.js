// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

var player = Math.floor(Math.random() * 6 ) +1; 
console.log("Il player ha il numero " + player);
document.getElementById("player").innerHTML = "Il numero del player è: " + player; 

var computer = Math.floor(Math.random() * 6 ) +1; 
console.log("Il computer ha il numero " + computer);
document.getElementById("computer").innerHTML = "Il numero del computer è: " + computer;

if (player > computer) {
    console.log("Vince il player!");
    document.getElementById("vincitore").innerHTML = "Vince il player!"; 
} else if (computer > player) {
    console.log("Vince il computer!");
    document.getElementById("vincitore").innerHTML = "Vince il computer!";
} else {
    console.log("Pareggio!");
    document.getElementById("vincitore").innerHTML = "Pareggio!";
}