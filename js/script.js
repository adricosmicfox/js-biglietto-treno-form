
const form = document.getElementById("am-form");

form.addEventListener("submit", costoTotale);

function costoTotale() {

    let risultato;

    let percorrenzaKm = document.getElementById("am_km").value;
    console.log("am_km");
    let etàViaggiatore = document.getElementById("am_age").value;
    console.log("am_age");

    risultato = percorrenzaKm * 0.21;

    if (etàViaggiatore > 65)
        risultato = risultato - (risultato * 0.40);

    else if (etàViaggiatore < 18)
        risultato = risultato - (risultato * 0.20);


    document.getElementById("am_cost").innerHTML = risultato.toFixed(2);

}



