/*

Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.

Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, che quindi verrà visualizzata al posto della precedente.

*/

/*

Step 1  - Scrivere html con immagini, poi commentare la sezione (per poterla inserire da js)
        - scrivere in html bottoni per scorrere

Step 2 - In css rendere invisibili tutte le immagini con "display: none"
       - Creare in css una classe che mi permetta di rendere visibile un'immagine con "display: block"

Step 3 - Scrivere in JS, un array con tutte le immagini che si vedranno nel carosello

Step 4 - Scrivere Js un ciclo che legga tutte le immagini dell'array

Step 5 - ascoltando il click su un bottone, riprendendo la classe css, rendere visibile l'immegine successiva o precedente

*/

// dichiaro il contenitore delle immagini
const immagini = document.querySelector('.immagini');
console.log('immagini', immagini, typeof immagini)

// array con tutte le immagini (e dei loro percorsi)
const imgCarosello = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

// creare ciclo for per leggere tutte le immagini
for (let i = 0; i < imgCarosello.length; i++) {
    console.log('imgCarosello[i]', imgCarosello[i], typeof imgCarosello[i])

    // aggiunta di if per impostare la classe active
    // per dare active alla prima foto, i deve essere uguale a 0, che è il primo elemento dell'array
    if (i == 0) {

        // una volta lette le immagini, devo scriverle in nel loro div "immagini" usando l'src contenuto nell'array:

        // aggiungo la classe active
        immagini.innerHTML += `<img src="${imgCarosello[i]}" class="active">`;

        // altrimenti, "scrivi" solo l'immagine senza classe
    }
    else {
        immagini.innerHTML += `<img src="${imgCarosello[i]}">`;
    }
};

// aggiunta variabile per ricordarmi l'immagine attualmente attiva
// questo mi permetterà di poter incrementare con ++ e di cambiare l'immagine attiva
let activeImmagine = 1;

// per cambiare immagine con i bottoni, devo "ascoltare" il click
// quindi dichiaro i bottoni, parto dal bottone di destra

const dxButton = document.getElementById('dx');

// ascolto ( cosa 1 = evento, cosa 2 = cosa deve accadere)
dxButton.addEventListener('click', function () {

    //aggiunta di if per dire al click di procedere solo se dentro all'array

    if (activeImmagine < imgCarosello.length) {
        // controllo che il click funzioni
        console.log('clicco bottone dx');

        // prendo l'immagine che attualmente ha la classe active e la elimino
        document.querySelector('.immagini > img:nth-child(' + activeImmagine + ')').classList.remove('active');

        // aggiungo la variabile per cambiare la classe all'immagine
        activeImmagine++;

        // aggiungo la classe active al prossimo elemento dell'array
        document.querySelector('.immagini > img:nth-child(' + activeImmagine + ')').classList.add('active');
    }

});

// aggiunta bottone sx, a cui cambio solo la variabile, che deve decrementare

const sxButton = document.getElementById('sx');

sxButton.addEventListener('click', function () {

    if (activeImmagine > 1) {

        document.querySelector('.immagini > img:nth-child(' + activeImmagine + ')').classList.remove('active');

        activeImmagine--;

        document.querySelector('.immagini > img:nth-child(' + activeImmagine + ')').classList.add('active');
    }
});