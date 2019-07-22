// Crea un array vuoto e chiedi all'utente 6 volte di inserire un numero
// e se è dispari mettilo nell'array.
// Per es. :
// quando chiedo all’utente di inserire un numero,
// cosa succede se lui inserisce invece una stringa?
// come posso controllare ciò e dare un feedback e/o
//  correggere il comportamento dell’utente?
// come posso proseguire?
// che altro ci sarebbe da controllare, se c’è? etc.

// Mi creo le variabili

var stampa, numIns, num;

stampa = document.getElementById('my');

// Creo il array vuoto

num = [];

// Chiedo all'utente di inserire 6 volte un numero qualsiasi

for (i = 0; i < 6; i++) {
  numIns = parseInt(prompt("Inserisci un numero qualsiasi"));
  if (numIns !== numIns) {
    alert("Devi scegliere un numero mi dispiace");
  }
  if (numIns % 2 !== 0) {
    num.push(numIns);
  }
}

// Faccio dei controlli

if (numIns !== numIns) {
  alert("Devi scegliere un numero mi dispiace");
}



// Stampo i valori richesti

console.log(num);
stampa.innerHTML = "<li>" + num + "</li>";
// Chiedere come dividere i <li>
