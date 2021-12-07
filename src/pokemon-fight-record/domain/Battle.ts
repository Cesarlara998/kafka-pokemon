import Alphanumeric from "./Alphanumeric";


export default class Battle {

    private namePokemonBlue: {};
    private namePokemonRed: Alphanumeric;
    private result: Alphanumeric;
    

    constructor(namePokemonBlue: Alphanumeric, namePokemonRed: Alphanumeric, result: Alphanumeric){
                this.namePokemonBlue = namePokemonBlue;
                this.namePokemonRed = namePokemonRed;
                this.result = result;
    }

    toJSON = (): Object => {
        const json = {
            blue: this.namePokemonBlue,
            red: this.namePokemonRed,
            result: this.result,
        };
        return json;
    };

}