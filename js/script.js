// 1 - Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// chiedere email all'utente

// creare array per la mailing list
var mailList = ["michelafranchini@gmail.com" , "antoniocomerci@gmail.com" , "annaferracuti@gmail.com" , "giuseppefranchini@gmail.com" , "mailafranchini@gmail.com"]; 
console.log(mailList);

var mailUtente = prompt("Inserisci la tua email"); 

// controllo email nella lista

for (i = 0; i < mailList.length; i++) {
    if (mailList[i].includes(mailUtente)) {
        console.log("mail Ok");
    } else {
        console.log("non va bene");
    }
}

// stampa messaggio