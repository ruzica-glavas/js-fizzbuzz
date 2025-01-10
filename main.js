/* 
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/


/* Mini task:
    -Creare un ciclo
    -Creare un if
      - se il numero é divisibile sia per 3 sia per 5 allora "FizzBuzz" --> 100 % 3 && 100 % 5 --> True
      - se il numero é divisibile per 3 allora "Fizz" -->  100 % 3 --> True
      - se il numero é divisibile per 5 allora "Buzz" --> 100 % 5 --> True

*/

for ( let i=0; i<100; i++){

    if(i % 3==0 && i % 5==0){

        //se true

        console.log(`Il tuo numero ${i} é divisibile per 3 e 5 quindi FizzBuzz`)

    } else if(i % 3 == 0){

        //se true

        console.log(`Il tuo numero ${i} é divisibile per 3 quindi Fizz`)

    } else if(i % 5==0){

        //se true

        console.log(`Il tuo numero ${i} é divisibile per 5 quindi Buzz`)

    } else{
        console.log(`Il tuo numero ${i} non é divisibile né per 3 né per 5`)
    }

}

