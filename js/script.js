/*Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
*/

alert('WARNING: Photosensitive Epilepsy');
let i;
const divContainer = document.querySelector("#container");


for (let i = 1;  i <= 100; i++){
    
    if(i % 3 === 0 && i % 5 === 0){
        const element =`<div class="box fizzbuzz">fizzbuzz</div>`;
        divContainer.innerHTML += element;
    }

    else if(i % 3 === 0){
        const element =`<div class="box fizz">fizz</div>`;
        divContainer.innerHTML += element;
    }

    else if(i % 5 === 0){
        const element =`<div class="box buzz">buzz</div>`;
        divContainer.innerHTML += element;
    }

    else{
        const element =`<div class="box">${i}</div>`;
        divContainer.innerHTML += element;
    }
}
