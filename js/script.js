
//inizializzazione variabile form (legare form a JS)
const form = document.getElementById("am_form");

const costoKm = 0.21;

//aggiunta funzione al bottone, al submit restituisce dati 
form.addEventListener("submit", calcoloPrezzoFinale);

//dichiarazione funzione submit per calcolo prezzoFinale
function calcoloPrezzoFinale() {

    let etaViaggiatore;
    let kmViaggiatore;
    let prezzo;
    let nomeCognome;

    // inizializzazione variabile nomeCognome (prendo il dato dal form)
    nomeCognome = document.getElementById("am_nomecognome").value;

    //inizializzazione variabile etaViaggiatore (prendo il dato dall'input)
    etaViaggiatore = document.getElementById("am_age").value;
    console.log(etaViaggiatore);

    //inizializzazione variabile kmViaggiatore (prendo il dato nell'input) 
    kmViaggiatore = document.getElementById("am_km").value;
    console.log(kmViaggiatore);

    //calcolo del prezzo provvisorio senza sconto
    prezzo = costoKm * kmViaggiatore;
    console.log(prezzo);


    // gestione casi sconto
    if (isNaN(kmViaggiatore) || isNaN(etaViaggiatore)) {
        alert("Dati inseriti in modo errato");
    }

    if (etaViaggiatore > 65) {
        prezzo = prezzo - prezzo * 0.4;
    }

    else if (etaViaggiatore < 18) {
        prezzo -= prezzo * 0.2;
    }

    // stampo nell'html dati seguenti
    document.getElementById("am_cellanomecognome").innerHTML = nomeCognome;

    document.getElementById("am_cellacarrozza").innerHTML = Math.floor(Math.random() * 12);

    document.getElementById("am_cellacodicecp").innerHTML = Math.floor(Math.random() * 100000);

    document.getElementById("am_cost").innerHTML = "€ " + prezzo.toFixed(2);


}















































// const form = document.getElementById("am-form");

// form.addEventListener("submit", costoTotale);

// function costoTotale() {

//     let risultato;

//     let percorrenzaKm = document.getElementById("am_km").value;
//     console.log("am_km");
//     let etàViaggiatore = document.getElementById("am_age").value;
//     console.log("am_age");

//     risultato = percorrenzaKm * 0.21;

//     if (etàViaggiatore > 65)
//         risultato = risultato - (risultato * 0.40);

//     else if (etàViaggiatore < 18)
//         risultato = risultato - (risultato * 0.20);


//     document.getElementById("am_cost").innerHTML = risultato.toFixed(2);

// }



