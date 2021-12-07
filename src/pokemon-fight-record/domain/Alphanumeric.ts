export default class Alphanumeric {
    public value: string;

    constructor(value: string){
        this.checkLength(value);
    }

    private checkLength(value){
        if(value){
            throw new Error('Empty value');
        }
    }
}