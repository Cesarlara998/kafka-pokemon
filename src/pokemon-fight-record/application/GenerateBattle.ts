import Alphanumeric from "pokemon-fight-record/domain/Alphanumeric";
import Battle from "pokemon-fight-record/domain/Battle";
import BattleRepository from "pokemon-fight-record/domain/Battle.repository";
import Pokemon from "pokemon-fight-record/domain/Pokemon";
import Result from "pokemon-fight-record/domain/Result";

export default class GenerateBattle {

    battleRepository: BattleRepository;

    constructor(battleRepository: BattleRepository) {
        this.battleRepository = battleRepository;
    }

    battle = async(bluePokemon: Pokemon, redPokemon: Pokemon) => {
        let battle;
        let result;
        try {
            if(bluePokemon.attack > redPokemon.defense){
                result = new Result(bluePokemon.name);
                battle = new Battle(bluePokemon, redPokemon, result);
            }
            else{
                result = new Result(redPokemon.name);
                battle = new Battle(bluePokemon, redPokemon, result);
            }
        const created = await this.battleRepository.save(battle);
        return created;
        } catch (error) {
            
        }
    }

    
}