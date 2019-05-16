export interface IStringCalculator {
    add(str: string):  number
}

export class StringCalculator implements IStringCalculator {

    add(str: string) {
        if (str === '') {
            return 0
        }
        if(str.indexOf(',') > 0) {
            return str.split(',').reduce((total, current) => {
                return total + parseInt(current)
            }, 0)
        }
        if (str.indexOf('\n') > 0) {
            return str.split(',').reduce((total, current) => {
                return total + parseInt(current)
            }, 0)
        }
        return parseInt(str)
    }

}
