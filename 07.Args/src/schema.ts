
export interface ISchema {
    [key: string]: {
        type: string,
        default: Boolean| Number| String
    }
}

interface  IParams {
    l: Boolean,
    p: Number,
    d: String
}

export class Schema implements ISchema {
    [key: string]: { type: string; default: String | Number | Boolean; };
    constructor(params?: IParams){
        return {
            'l': {
                type: 'boolean',
                default: params!.l || false
            }, 
            'p': {
                type: 'number',
                default: params!.p|| 0
            },
            'd': {
                type: 'string',
                default: params!.d || ''
            }
        }
    }
}

