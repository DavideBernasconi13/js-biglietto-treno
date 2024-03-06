// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let km = parseInt(prompt("Quanti km vuoi percorrere?"));
document.getElementById('Km').innerHTML = km;
let age = parseInt(prompt("Quanti hanni hai?"));
document.getElementById('age').innerHTML = age;

const prezzoBase = 0.21;
const scontoUnder = 0.20;
const scontoOver = 0.40;

let prezzoSenzaSconto = km * prezzoBase;


if (age < 18) {
    let scontoUnderSuPrezzo = prezzoSenzaSconto * scontoUnder;
    console.log(scontoUnderSuPrezzo.toFixed(2));
    let prezzoFinale = prezzoSenzaSconto - scontoUnderSuPrezzo;
    let messaggio = prezzoFinale;
    document.getElementById('price').innerHTML = messaggio.toFixed(2);
} else if (age >= 65) {
    let scontoOverSuPrezzo = prezzoSenzaSconto * scontoOver;
    console.log(scontoOverSuPrezzo.toFixed(2));
    let prezzoFinale = prezzoSenzaSconto - scontoOverSuPrezzo;
    let messaggio = prezzoFinale.toFixed(2);
    document.getElementById('price').innerHTML = messaggio;
} else if (km === null && age === null) {
    document.getElementById('Km').innerHTML = "ERRORE!";
    document.getElementById('age').innerHTML = "ERRORE!";
} else {
    document.getElementById('price').innerHTML = prezzoSenzaSconto.toFixed(2);
}  