console.log('Holaaa');

function fizzbuzz (num){

    const isDivisibleBy3 = num % 3 === 0;
    const isDivisibleBy5 = num % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5) return 'fizzbuzz';
    if (isDivisibleBy3) return 'fizz';
    if (isDivisibleBy5) return 'buzz';

    return num;
}

module.exports = fizzbuzz;