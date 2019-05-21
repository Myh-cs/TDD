
// # Args
// > http://codingdojo.org/kata/Args/

// 以指定模式解析传入的参数，如命令行程序后面的各种参数

// Todo

// * 确定有schema
// * schema 为 -l: boolean， -p: number, -d ：string
// * schema 有默认值 l: true ，p: 8080 d: /user/logs
// * [ ] 单个参数
//   * 参数为l
//     * 指定值为boolean， 默认 false
//     * 指定值不是boolean
//   * 参数为p
//     * 未指定该值，默认个 0
//     * 指定值为number
//     * 指定值不为number
//   * 参数为d
//     * 未指定该值, 默认 /user/logs
//     * 指定值为string
//     * 指定值不为string
// * [ ] 多个参数
//   * l & p
//   * L& d

import { ISchema, Schema } from '../src/schema'

describe('args', () => {
    describe('init.....', () => {
        test('init...', () => {
            const answer = 42
            expect(answer).toBe(42)
        })
    })

    describe('scheme', () => {
        let scheme: ISchema
        beforeEach(() => {
            scheme = new Schema()
        })

        test('schema should have flag l', () => {
            expect(scheme.l).toBeDefined()
        })
        test('schema should have flag p', () => {
            const scheme = new Schema() as ISchema
            expect(scheme.p).toBeDefined()
        })
        test('schema should have flag d', () => {
            const scheme = new Schema() as ISchema
            expect(scheme.d).toBeDefined()
        })
        
    })
    describe('batch test schema', () => {
        const schemaTester: ISchema = new Schema()
        const testTable = [
            [schemaTester.l.default, false],
            [schemaTester.p.default, 0],
            [schemaTester.d.default, '']
        ]
        describe.each(testTable)('%v, should be %v', (input, expected) => {
            test(`schema should have default value false of ${input}`, () => {
                expect(input).toBe(expected)
            })
        })
    })
})