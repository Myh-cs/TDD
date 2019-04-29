


import { FizzBuzz } from '../src/fizzBuzz'

/** 
 * todo:
 * [].length === 100
 * 3 => fizz
 * 5 => buzz
 * 15 => fizzBuzz
 * 1 => 1
 * 2 => 2
 * 
 */

describe("FizzBuzz Test", () => {
    test('FizzBuzz has been defined', () => {
        expect(FizzBuzz()).toBeDefined()
    })
    test(`FizzBuzz's length is 100`, () => {
        expect(FizzBuzz().length).toBe(100)
    })

    test(`arr[2] is fizz`, () => {
        expect(FizzBuzz()[2]).toBe('fizz')
    })
    test(`arr[4] is buzz`, () => {
        expect(FizzBuzz()[4]).toBe('buzz')
    })
    test(`arr[14] is fizzBuzz`, () => {
        expect(FizzBuzz()[14]).toBe('fizzBuzz')
    })
})