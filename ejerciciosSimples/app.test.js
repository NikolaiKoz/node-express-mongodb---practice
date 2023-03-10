const fizzbuzz = require('./app');

describe('app', () => {

    test('Should print 1 if they recibe 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    test('Should print fizz if they recibe 3', () => {
        const expected = 'fizz';
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    test('Should print fizz if they recibe a multiple of 3', () => {
        const expected = 'fizz';
        const result = fizzbuzz(9);
        expect(expected).toBe(result);
    });

    test('Should print fizz if they recibe 5', () => {
        const expected = 'buzz';
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    });

    test('Should print fizz if they recibe a multiple of 5', () => {
        const expected = 'buzz';
        const result = fizzbuzz(20);
        expect(expected).toBe(result);
    });

    test('Should print fizz if they recibe a multiple of 5 and 3', () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(30);
        expect(expected).toBe(result);
    })


});