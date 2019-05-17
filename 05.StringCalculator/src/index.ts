import { parse } from "@babel/parser";

export interface IStringCalculator {
    add(str: string):  number
}

export class StringCalculator implements IStringCalculator {
    character: string[] = [',', '\n', '-']
    add(str: string) {
        if (str.length === 0) {
            return 0
        }
        if (str.indexOf(this.character[2]) >= 0) {
            throw new Error(`can't contain negative number`)
        }
        if (str.indexOf(this.character[0]) > 0 && str.indexOf(this.character[1]) > 0) {
            let arr: string[] = []
            str.split(this.character[0]).forEach(item => {
                item.split(this.character[1]).forEach(temp => {
                    arr.push(temp)
                })
            })
            return this.calculate(this.character[0], arr.join(','))
            
        }
        if(str.indexOf(',') > 0) {
            return this.calculate(this.character[0], str)
        }
        if (str.indexOf('\n') > 0) {
            return this.calculate(this.character[1],str)
        }
        return parseInt(str)
    }

    private calculate(spliter: string, str: string) {
        return str.split(spliter).reduce((total, current) => {
            return total + parseInt(current);
        }, 0);
    }
}
