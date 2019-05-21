
export interface ISchema {
    [key: string]: {
        type: string,
        default: Boolean| Number| String
    }
}

export class Schema implements ISchema {
    [key: string]: { type: string; default: String | Number | Boolean; };
    constructor() {
        return {
            'l': {
                type: 'Boolean',
                default: false
            }, 
            'p': {
                type: 'Number',
                default: 0
            },
            'd': {
                type: 'String',
                default: ''
            }
        }
    }
}

