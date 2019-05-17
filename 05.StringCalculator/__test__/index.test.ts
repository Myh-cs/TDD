
// 写一个含有Add 方法的 StringCalculator 类，通过分割符分割给定的字符串，返回字符串中所有数字的总和
// Todo
// * '' => 0
// * '1' => 1 '2' => 2
// * 两个数字，逗号分割 '1,2' => 3 '10,20' => 30
// * 两个数字，换行符分割 '1\n2' => 3
// * 以任意方式分割字符串 '1\n2,3\n4' => 10
// * 不允许使用负数 '-1,2,-3' => 'negatives not allowed: -1,-3'

import { StringCalculator, IStringCalculator} from '../src/index'
import { types } from '@babel/core';
describe('字符串计算器', () => {
    let stringCalculator: IStringCalculator
    beforeEach( () => {
        stringCalculator = new StringCalculator()
        return stringCalculator
    })
    test('StringCalculator should be defined', () => {
        expect(stringCalculator).toBeDefined()
    })
    test('StringCalculator should have add method', () => {
        expect(stringCalculator.add).toBeDefined()
    })
    test('give "" should return 0', () => {
        expect(stringCalculator.add('')).toBe(0)
    })

    test('give "," should return 0', () => {
        expect(stringCalculator.add('')).toBe(0)
    })
    test.each([['1', 1], ['2',2]])('add(%s, %d)', (str, expected) => {
        expect(stringCalculator.add(str as string)).toEqual(expected)
    })
    test('give "1" should return 1', () => {
        expect(stringCalculator.add('1')).toBe(1)
    })

    test.each([['1,2', 3], ['10,20', 30]])('add(%s, %d)', (str, expected) => {
        expect(stringCalculator.add(str as string)).toEqual(expected)
    })
    test('give "1\n2" should return 3', () => {
        expect(stringCalculator.add('1\n2')).toBe(3)
    })

    test('give "1\n2,3\n4" should return 10', () => {
        expect(stringCalculator.add('1\n2,3\n4')).toBe(10)
    })

    test(`given str can't contain negative number`, () => {
        expect(() => stringCalculator.add('-1,2,-3')).toThrowError(new Error(`can't contain negative number`))
    })

})