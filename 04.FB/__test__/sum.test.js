// TODO: a +b = c

import {sum}  from '../src/sum'

// const sum = require('../src/sum')

const table = [
    [1,1,2],
    [1,2,3],
    [2,3,5]
];

describe.each(table)('sum( %i, %i)', (a, b, expected) => {
    test("sum", () => {
        expect(sum(a, b)).toBe(expected)
    })
})

describe('sum function', () => {
    test('sum is delicious', () => {
        expect(sum).toBeDefined()
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })

});