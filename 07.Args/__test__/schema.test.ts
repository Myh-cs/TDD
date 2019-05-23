
// # Args
// > http://codingdojo.org/kata/Args/

// 以指定模式解析传入的参数，如命令行程序后面的各种参数

// Todo

// * 确定有args
// * args 为 -l: boolean， -p: number, -d ：string
// * args 有默认值 l: true ，p: 8080 d: /user/logs
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

import { IArgs, Args } from '../src/args'

describe('args without params', () => {
    describe('init.....', () => {
        test('init...', () => {
            const answer = 42
            expect(answer).toBe(42)
        })
    })

    describe('scheme', () => {
        let scheme: IArgs
        beforeEach(() => {
            scheme = new Args()
        })

        test('args should have isLogging', () => {
            expect(scheme.isLogging).toBeDefined()
        })
        test('args should have port', () => {
            const scheme = new Args() as IArgs
            expect(scheme.port).toBeDefined()
        })
        test('args should have directory', () => {
            const scheme = new Args() as IArgs
            expect(scheme.directory).toBeDefined()
        })
        
    })
    describe('test args default value', () => {
        const argsTest: IArgs = new Args()
        test(`args.isLogging should have default value false of `, () => {
            expect(argsTest.isLogging).toBeDefined()
            expect(argsTest.isLogging.default).toBe(false)
        })
        test(`args.port should have default value 0 of `, () => {
            expect(argsTest.port).toBeDefined()
            expect(argsTest.port.default).toBe(0)
        })
        test(`args.directory should have default value false of `, () => {
            expect(argsTest.directory).toBeDefined()
            expect(argsTest.directory.default).toBe('')
        })
    })
    describe('test args with params', () => {
        
        const argsTest: IArgs = new Args()
        test(`args.isLogging should have default value false of `, () => {
            expect(argsTest.isLogging).toBeDefined()
            expect(argsTest.isLogging.default).toBe(false)
        })
        test(`args.port should have default value 0 of `, () => {
            expect(argsTest.port).toBeDefined()
            expect(argsTest.port.default).toBe(0)
        })
        test(`args.directory should have default value false of `, () => {
            expect(argsTest.directory).toBeDefined()
            expect(argsTest.directory.default).toBe('')
        })
    })
})

describe('args with params', () => {
    describe('params should be parsed', () => {
        const params = '-l -p 8080 -d /user/home'
        const args = new Args(params)
        test('isLogging should be false', () => {
            expect(args.isLogging.default).toBeFalsy() 
        })
        test('port should be 8080', () => {
            expect(args.port.default).toEqual(8080)
        })
        test('directory should be /user/home', () => {
            expect(args.directory.default).toEqual('/user/home')
        })
    })
    describe('l is true in param should be parsed', () => {
        const params = '-l true -p 8080 -d /user/home'
        const args = new Args(params)
        test('isLogging should be true', () => {
            expect(args.isLogging.default).toBeTruthy()
        })
        test('isLogging should be true', () => {
            expect(args.port.default).toEqual(8080)
        })
        test('isLogging should be true', () => {
            expect(args.directory.default).toBe('/user/home')
        })
        
    })
    describe('l is true in param should be parsed', () => {
        const params = '-d /user/home -l true -p 8080'
        const args = new Args(params)
        test('isLogging should be true', () => {
            expect(args.isLogging.default).toBeTruthy()
        })
        test('isLogging should be true', () => {
            expect(args.port.default).toEqual(8080)
        })
        test('isLogging should be true', () => {
            expect(args.directory.default).toBe('/user/home')
        })
    })
    describe('l is true in param should be parsed', () => {
        const params = '-d /user/home -l true -p'
        const args = new Args(params)
        test('isLogging should be true', () => {
            expect(args.isLogging.default).toBeTruthy()
        })
        test('isLogging should be true', () => {
            expect(args.port.default).toEqual(0)
        })
        test('isLogging should be true', () => {
            expect(args.directory.default).toBe('/user/home')
        })
    })
    describe('test args with params', () => {
        const params = '-l true -p 9999 -d /user/home/test'
        const argsTest: IArgs = new Args(params)
        const testTable = [
            ['l', true],
            ['p', 9999,],
            ['d', '/user/test']
        ]
        test(`args.isLogging should have default value false of `, () => {
            expect(argsTest.getValueFor('l')).toBe(true)
        })
        test(`args.port should have default value 0 of `, () => {
            expect(argsTest.getValueFor('p')).toBe(9999)
        })
        test(`args.directory should have default value false of `, () => {
            expect(argsTest.getValueFor('d')).toBe('/user/home/test')
        })
    })
})