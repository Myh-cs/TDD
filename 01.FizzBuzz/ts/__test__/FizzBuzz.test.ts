

import FizzBuzz from '../src/FizzBuzz'

describe('fizzbuzz', () => {
    let fizzBuzz: FizzBuzz
    beforeEach(() => {
        fizzBuzz = new FizzBuzz()
    })
    // describe('init 123', () => {
    //     const testTable = [
    //         [1, '1'],
    //         [2, '2'],
    //         [3, 'fizz']
    //     ]
    //     describe.each(testTable)('.get(%d)', (input, expected) => {
    //         expect(fizzBuzz.get(Number(input))).toBe(expected)
    //     })
    // })
    describe('get', () => {
        test('give 1 should return 1', () => {
            expect(fizzBuzz.get(1)).toBe('1')
        })
        test('give 3 should return fizz', () => {
            expect(fizzBuzz.get(1)).toBe('1')
        })
        test('give 5 should return buzz', () => {
            expect(fizzBuzz.get(5)).toBe('buzz')
        })
        test('give 15 should return fizzBuzz', () => {
            expect(fizzBuzz.get(15)).toBe('fizzBuzz')
        })
    })
    describe('print', () => {
        test('give 100, the last should be Buzz', () => {
            expect(fizzBuzz.print(100)[99]).toBe('buzz')
        })
    })
    
   
})