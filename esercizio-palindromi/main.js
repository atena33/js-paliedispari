// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;

// Chiedo a utente di inserire come input una parola

var parola = prompt("Inserisci una parola");
var revParola;
console.log(parola);

parolaPalindroma ();

// tramite una funzione verifico se la parola inserita è palindroma
function parolaPalindroma () {
  var splitParola = parola.split("");   // Trasformo la stringa in un array per poterlo revertare
  revParola = splitParola.reverse();
  // dò output a utente dicendogli che ho verificato;
  if (revParola.join("") === parola) {  // Ritrasformo l'array in stringa per poterlo confrontare all'input
      document.getElementById('parola').innerHTML = "Ho verificato: la tua parola è palindroma!";
  } else {
      document.getElementById('parola').innerHTML = "Ho verificato: la tua parola non è palindroma!";
  }
}
 console.log(revParola.join(""));
