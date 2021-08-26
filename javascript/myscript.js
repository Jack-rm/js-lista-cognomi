let listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
let cognomeUtente = prompt("Inserisci il tuo cognome");

document.getElementById("cognome_user").innerHTML = cognomeUtente;
listaCognomi.push(cognomeUtente);
document.getElementById("nuova_lista").innerHTML = listaCognomi;
document.getElementById("nuova_lista_ordinata").innerHTML = listaCognomi.sort();

let posizione = 0;

for ( let i = 1; i <= listaCognomi.length; i++){
    let posizione = listaCognomi.indexOf(cognomeUtente);
    document.getElementById("posizione_lista").innerHTML = posizione;
}
