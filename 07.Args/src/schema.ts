
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
    isLogging: {
        type: String;
        default: Boolean;
    };
    port: {
        type: String;
        default: Number;
    };
    directory: {
        type: String;
        default: String;
    };

    constructor(params?: string) {
        this.isLogging = {
            type: 'boolean',
            default: false
        }
        this.port = {
            type: 'number',
            default:  0
        }
        this.directory = {
            type: 'string',
            default: ''
        }
        params && this.parse(params)
    }
    
    parse(params: string){
        // Todo
        // 解析params
        const paramsIsLogging = params.match(/.*/)!
        const port = params.match(/p\s(\d+)/)![1]
        const directory = params.match(/d\s(.*)\s?/)![1]
        this.isLogging = {
            type: 'boolean',
            default: paramsIsLogging[1] === 'true'? true : false
        }
        this.port = {
            type: 'number',
            default: Number(port) || 0
        }
        this.directory = {
            type: 'string',
            default: directory || ''
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
                result = 'wrong type! Please entry correctly！'
                break
        }
        return result
    }
}

