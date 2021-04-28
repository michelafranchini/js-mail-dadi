// 1 - Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// chiedere email all'utente

// creare array per la mailing list
var mailList = ["michelafranchini@gmail.com" , "antoniocomerci@gmail.com" , "annaferracuti@gmail.com" , "giuseppefranchini@gmail.com" , "mailafranchini@gmail.com"]; 
console.log(mailList);

var mailUtente = prompt("Inserisci la tua email"); 

//controllo email nella lista

var inLista = false;
for (i = 0; i < mailList.length; i++) {
    if (mailList[i] == mailUtente) {
        inLista = true;
        document.getElementById("frase").innerHTML = "Ok puoi accedere!"; 
    }
}

if (inLista == true) {
    console.log("mail Ok");
} else {
    console.log("non sei in lista");
    document.getElementById("frase").innerHTML = "Ci dispiace ma la tua email non risulta nelle nostre liste!";
}

// stampa messaggio