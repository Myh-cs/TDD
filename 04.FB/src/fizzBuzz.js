export const FizzBuzz = () => {
    let result = []
    for(let i =0; i< 100; i ++) {
        if ((i + 1) % 15 === 0) {
            result[i] = 'fizzBuzz'
        } else if ((i + 1) % 3 === 0) {
            result[i] = 'fizz'
        } else if ((i + 1) % 5 === 0) {
            result[i] = 'buzz'
        } else {
            result[i] = i + 1
        }
    }
    return result
}