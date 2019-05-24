

import FizzBuzz from './FizzBuzz'

const fizzBuzz = new FizzBuzz()
const result = fizzBuzz.print(100);
console.log(result)
document.getElementById('root')!.innerHTML = result.join('<br/>')