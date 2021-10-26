// CHECH
console.log(`JS OK`);


// ESERCIZIO DADI

let btnUtente = document.getElementById('btnUtente');

let btnPC = document.getElementById('btnUtente');


btnUtente.addEventListener('click', function () {
    let numUtente = Math.floor(Math.random() * 6) + 1;
    console.log(numUtente);

    document.getElementById("casualeUtente").innerHTML ="Il tuo numero a caso è: " + numUtente;
});


btnPC.addEventListener('click', function () {
    let numPC = Math.floor(Math.random() * 6) + 1;
    console.log(numPC);
    
    document.getElementById("casualePC").innerHTML ="Il mio numero è: " + numPC;
});


if (numUtente > numPC) {
    console.log(`Hai vinto con ${numUtente}!`)
    document.getElementById("risultato").innerHTML =`Hai vinto con ${numUtente}!`;

} else {
    console.log(`Hai perso contro ${numPC}! Godo!`)
    document.getElementById("risultato").innerHTML =`Hai perso contro ${numPC}! Godo!`;
}


// ESERCIZIO MAIL







// // CHIEDIAMO DI GENERARE IL NUMERO
// const numUtente = parseInt(prompt(`genera il tuo numero`));
// console.log(`il tuo numero è ${numUtente}`)

// // Generatore di numeri random Utente
// const numUtente = Math.floor(Math.random()*100);

// // Generatore di numeri random Computer
// const numComputer = Math.floor(Math.random()*100);

// if (numUtente > numComputer) {
//     console.log(`Hai vinto con ${numUtente}!`)
// } else {
//     console.log(`Hai perso contro ${numComputer}! Godo!`)
// }





// // ESPRESSIONE CHE DA' IL RISULTATO random
// const passUtente = nomeUtente + valRandomA + cognomeUtente + valRandomB + coloreUtente + valRandomC;


// // MOSTRIAMO IL RISULTATO
// document.getElementById('risultato').innerHTML = `La tua password (molto poco sicura) è: ${passUtente} 21`;