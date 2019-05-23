
export interface IArgs {
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
    getValueFor(flat: string): String | Number | Boolean
}

interface IParams {
    l: Boolean,
    p: Number,
    d: String
}

export class Args implements IArgs {
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
            default: 0
        }
        this.directory = {
            type: 'string',
            default: ''
        }
        params && this.parse(params)
    }

    parse(params: string) {
        const paramsIsLogging = params.match(/-l(\s(\w+))+/)
        const port = params.match(/p\s(\d+)/)
        const directory = params.match(/-d\s([a-zA-Z\/]+)?/)
        this.isLogging = {
            type: 'boolean',
            default: paramsIsLogging && paramsIsLogging[2] === 'true' ? true : false
        }
        this.port = {
            type: 'number',
            default: port && Number(port[1]) || 0
        }
        this.directory = {
            type: 'string',
            default: directory && directory[1] || ''
        }
    }
    getValueFor(flag: string): Boolean | Number | String {
        let result: Boolean | Number | String
        switch (flag) {
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

