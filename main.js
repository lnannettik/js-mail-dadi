// CHECH
console.log(`JS OK`);


// // ESERCIZIO DADI


let btnUtente = document.getElementById('btnUtente');

let numUtente = Math.floor(Math.random() * 6) + 1;
console.log(numUtente);


let btnPC = document.getElementById('btnPC');

let numPC = Math.floor(Math.random() * 6) + 1;
console.log(numPC);




btnUtente.addEventListener('click', function () {
    document.getElementById("casualeUtente").innerHTML ="Il tuo numero a caso è: " + numUtente;
});



btnPC.addEventListener('click', function () {   
    document.getElementById("casualePC").innerHTML ="Il mio numero è: " + numPC;
});



if (numUtente > numPC) {
    console.log(`Hai vinto con ${numUtente}!`)
    document.getElementById("risultato").innerHTML =`Hai vinto con ${numUtente}!`;

} else {
    console.log(`Hai perso contro ${numPC}! Godo!`)
    document.getElementById("risultato").innerHTML =`Hai perso contro ${numPC}! Godo!`;
}




// // ESERCIZIO MAIL

// // Mail
// // - crea una lista contenente almeno 3 indirizzi email
// // - chiedi all’utente la sua email,
// // - controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
// // - stampa un messaggio appropriato sull’esito del controllo.


// const mailList = [`alpaca@gmail.com`, `aieie.brazorf@gmail.com`, `pdor@gmail.com`]
// console.log(mailList);
// console.log(`numero di elementi array`, mailList.lenght);

















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