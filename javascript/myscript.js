let listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
let cognomeUtente = prompt("Inserisci il tuo cognome");

document.getElementById("cognome_user").innerHTML = cognomeUtente;
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);  // trasformo primo carattere del cognome dato in maiuscolo per ordinamento della lista
listaCognomi.push(cognomeUtente);
document.getElementById("nuova_lista").innerHTML = listaCognomi;
document.getElementById("nuova_lista_ordinata").innerHTML = listaCognomi.sort();

// for ( let i = 0; i <= listaCognomi.length; i++){
    let posizione = listaCognomi.indexOf(cognomeUtente) + 1;
    document.getElementById("posizione_lista").innerHTML = posizione;
// }
