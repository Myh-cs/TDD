

import FizzBuzz from '../src/FizzBuzz'

describe('fizzbuzz', () => {
    let fizzBuzz: FizzBuzz
    beforeEach(() => {
        fizzBuzz = new FizzBuzz()
    })
    describe('get()', () => {
        const testTable = [
            [1, '1'],
            [2, '2'],
            [3, 'fizz'],
            [15, 'fizzBuzz'],
            [100, 'buzz']
        ]
        test.each(testTable)('.get(%d)', (input, expected) => {
            expect(fizzBuzz.get(Number(input))).toBe(expected)
        })
    })
    describe('print', () => {
        test('give 100, the last should be Buzz', () => {
            expect(fizzBuzz.print(100)[99]).toBe('buzz')
        })
    })
})