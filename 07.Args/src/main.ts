

import { Args} from './args'

const param = '-l true -d /proc/version -p 99999'
const args = new Args(param)
console.log(args.getValueFor('l'))
console.log(args.getValueFor('p'))
console.log(args.getValueFor('d'))
document.getElementById('root')!.innerHTML = `l: ${args.getValueFor('l')} <br/> p: ${args.getValueFor('p')} <br/> d: ${args.getValueFor('d')}`