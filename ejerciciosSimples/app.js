console.log('Holaaa');

function fizzbuzz (num){

    const isZero = 0;
    const isDivisibleBy3 = num % 3 === 0;
    const isDivisibleBy5 = num % 5 === 0;

    if(num === isZero) return 0;
    if (isDivisibleBy3 && isDivisibleBy5) return 'fizzbuzz';
    if (isDivisibleBy3) return 'fizz';
    if (isDivisibleBy5) return 'buzz';

    return num;
}

function print(num){
    for (let index = 0; index < num; index++) {
        console.log(`${index}: ${fizzbuzz(index)}`);
    }
}

print(16);

module.exports = fizzbuzz;