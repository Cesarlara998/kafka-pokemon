import Battle from "./Battle";

interface BattleRepository {
    save(battle: Battle): Promise <String | Error >;
}

export default BattleRepository;