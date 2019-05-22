
export interface ISchema {
    isLogging: {
        type: String
        default: Boolean
    }
    port: {
        type: String,
        default: Number
    }
    directory: {
        type: String,
        default: String
    }
    getValueFor(flat: string): String| Number|Boolean
}

interface  IParams {
    l: Boolean,
    p: Number,
    d: String
}

export class Schema implements ISchema {
    isLogging: { type: String; default: Boolean; };
    port: { type: String; default: Number; };
    directory: { type: String; default: String; };
    
    constructor(params?: IParams){
        this.isLogging = {
            type: 'boolean',
            default: params!.l || false
        }
        this.port = {
            type: 'number',
            default: params!.p || 0
        }
        this.directory = {
            type: 'string',
            default: params!.d || ''
        }
    }
    getValueFor(flag: string): Boolean|Number|String {
        let result: Boolean | Number | String
        switch (flag){
            case 'l': {
                result = this.isLogging.default
                break
            }
            case 'p': {
                result = this.port.default
                break
            }
            case 'd': {
                result = this.directory.default
                break
            }
            default:
                result = 'wrong type '
        }
        return result
    }
}

