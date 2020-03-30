// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (random).
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e un numero da 1 a 5 (random).

var utente = prompt("Scegli pari o dispari");
console.log(utente);
var numUtente = numero();
var numPc =  numero();
var risultato = numUtente + numPc;
console.log(numUtente, numPc, risultato);

if ((utente === 'pari') && (risultato % 2 = 0)){
 document.getElementById('numero').innerHTML = "hai vinto";
}




function numero(min, max) {
var random =  Math.floor(Math.random() * (5 - 1 + 1) + 1);
return random
}
