/*
TOOLS:

- let / const
- for
- if / else
*/

/* Inizializzo le stringhe */

// Inizializzo 'Fizz'
const fizz = 'Fizz'

// Inizializzo 'Buzz'
const buzz = 'Buzz'

// Inizializzo 'FizzBuzz'
const fizzBuzz = 'FizzBuzz'

/* Stampo i numeri da 1 a 100 */

// Apro un ciclo 'for'
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        // Stampo 'FizzBuzz' per i numeri che sono multipli sia di 3 che di 5
        console.log(fizzBuzz)

    } else if (i % 3 === 0){
        // Stampo 'Fizz' per i numeri che sono multipli di 3
        console.log(fizz)

    } else if (i % 5 === 0){
        // Stampo 'Buzz' per i numeri che sono multipli di 5
        console.log(buzz)
    } else {
        console.log(i)
    }
}


