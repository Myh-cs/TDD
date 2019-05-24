export default class FizzBuzz {
    constructor(){

    }
    get(i: number) {
        return this.isFizzBuzz(i)|| this.isBuzz(i) || this.isFizz(i) || i.toString()
    }
    print(count: number): string[] {
        let result: string[] = []
        for(let i = 1; i <=count; i++ ) {
            result.push(this.get(i))
        }
        return result
    }

    isFizz(num: number) {
        return (num % 3 === 0) ? 'fizz': false
    }
    isBuzz(num: number) {
        return (num % 5 === 0) ? 'buzz' : false
    }
    isFizzBuzz(num: number) {
        return (num % 5 === 0 && num % 3 === 0) ? 'fizzBuzz': false
    }

}