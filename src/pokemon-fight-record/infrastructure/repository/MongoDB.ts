import Battle from "pokemon-fight-record/domain/Battle";
import BattleRepository from "pokemon-fight-record/domain/Battle.repository";
import BattleSchema from "pokemon-fight-record/domain/Battle.schema";


export default class MongoDB implements BattleRepository{

    save  = async (): Promise<any | Error> => {
        return await BattleSchema.find().then((res) => {
            return res;
        }).catch((err) => {
            return err;
        })
    }
}  

 
