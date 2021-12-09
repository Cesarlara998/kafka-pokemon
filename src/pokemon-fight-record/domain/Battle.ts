import Alphanumeric from "./Alphanumeric";
import Pokemon from "./Pokemon";
import Result from "./Result";


export default class Battle {

    private namePokemonBlue: Pokemon;
    private namePokemonRed: Pokemon;
    private result: Result;
    

    constructor(namePokemonBlue: Pokemon, namePokemonRed: Pokemon, result: Result){
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