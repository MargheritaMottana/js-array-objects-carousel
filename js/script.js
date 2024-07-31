/*

Consegna:
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione

Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider. - ✔

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra,
l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo. - ✔

Milestone 2:
Aggiungere il ciclo infinito del carosello. 
Ovvero se la slide attiva è la prima e l'utente clicca la freccia verso destra, 
la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.

*/

// dichiaro il contenitore delle immagini
const immagini = document.querySelector('.immagini');
console.log('immagini', immagini, typeof immagini)

// array  di oggetti con tutte le immagini, titoli e descrizioni
const imgCarosello = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// creare ciclo for per leggere tutte le immagini
for (let i = 0; i < imgCarosello.length; i++) {
    console.log('imgCarosello[i]', imgCarosello[i], typeof imgCarosello[i])

    if (i == 0) {

        // aggiungo la classe active
        immagini.innerHTML += `
                <div class="card active">
                    <h3>${imgCarosello[i].title}</h3>
                    <img src="${imgCarosello[i].image}">
                    <p>${imgCarosello[i].text}</p>
                </div>
        `;
    }
    else {
        immagini.innerHTML += `
                 <div class="card">
                    <h3>${imgCarosello[i].title}</h3>
                    <img src="${imgCarosello[i].image}">
                    <p>${imgCarosello[i].text}</p>
                </div>
        `;
    }
}

// aggiunta variabile per ricordarmi l'immagine attualmente attiva
// questo mi permetterà di poter incrementare con ++ e di cambiare l'immagine attiva
let activeImmagine = 1;

// dichiaro e ascolto il click sul bottone
const dxButton = document.getElementById('dx');
dxButton.addEventListener('click', function () {

    if (activeImmagine < imgCarosello.length) {

        document.querySelector('.immagini > div:nth-child(' + activeImmagine + ')').classList.remove('active');

        activeImmagine++;

        document.querySelector('.immagini > div:nth-child(' + activeImmagine + ')').classList.add('active');
    }

})

const sxButton = document.getElementById('sx');

sxButton.addEventListener('click', function () {

    if (activeImmagine > 1) {

        document.querySelector('.immagini > div:nth-child(' + activeImmagine + ')').classList.remove('active');

        activeImmagine--;

        document.querySelector('.immagini > div:nth-child(' + activeImmagine + ')').classList.add('active');
    }
})