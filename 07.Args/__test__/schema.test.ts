
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

describe('args without params', () => {
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

        test('schema should have isLogging', () => {
            expect(scheme.isLogging).toBeDefined()
        })
        test('schema should have port', () => {
            const scheme = new Schema() as ISchema
            expect(scheme.port).toBeDefined()
        })
        test('schema should have directory', () => {
            const scheme = new Schema() as ISchema
            expect(scheme.directory).toBeDefined()
        })
        
    })
    describe('test schema default value', () => {
        const schemaTester: ISchema = new Schema()
        test(`schema.isLogging should have default value false of `, () => {
            expect(schemaTester.isLogging).toBeDefined()
            expect(schemaTester.isLogging.default).toBe(false)
        })
        test(`schema.port should have default value 0 of `, () => {
            expect(schemaTester.port).toBeDefined()
            expect(schemaTester.port.default).toBe(0)
        })
        test(`schema.directory should have default value false of `, () => {
            expect(schemaTester.directory).toBeDefined()
            expect(schemaTester.directory.default).toBe('')
        })
    })
    describe('test schema with params', () => {
        
        const schemaTester: ISchema = new Schema()
        test(`schema.isLogging should have default value false of `, () => {
            expect(schemaTester.isLogging).toBeDefined()
            expect(schemaTester.isLogging.default).toBe(false)
        })
        test(`schema.port should have default value 0 of `, () => {
            expect(schemaTester.port).toBeDefined()
            expect(schemaTester.port.default).toBe(0)
        })
        test(`schema.directory should have default value false of `, () => {
            expect(schemaTester.directory).toBeDefined()
            expect(schemaTester.directory.default).toBe('')
        })
    })
    describe('schema getValue', () => {
        test(`give l should return false`, () => {
            const schema = new Schema()
            expect(schema.getValueFor('l')).toBe(false)
        })
        test(`give p should return 0`, () => {
            const schema = new Schema()
            expect(schema.getValueFor('p')).toBe(0)
        })
        test(`give d should return ''`, () => {
            const schema = new Schema()
            expect(schema.getValueFor('d')).toBe('')
        })
        test(`give x should return 'W'`, () => {
            const schema = new Schema()
            expect(schema.getValueFor('x')).toBe('wrong type! Please entry correctly！')
        })
    })
})

describe('args with params', () => {
    describe('params should be parsed', () => {
        const params = '-l -p 8080 -d /user/home'
        const schema = new Schema(params)
        test('isLogging should be false', () => {
            expect(schema.isLogging.default).toBeFalsy() 
        })
        test('port should be 8080', () => {
            expect(schema.port.default).toEqual(8080)
        })
        test('directory should be /user/home', () => {
            expect(schema.directory.default).toEqual('/user/home')
        })
    })
    describe('l is true in param should be parsed', () => {
        const params = '-l true -p 8080 -d /user/home'
        const schema = new Schema(params)
        test('isLogging should be true', () => {
            expect(schema.isLogging.default).toBeTruthy()
        })
        
    })
})