import Fight from "./Battle";

interface BattleRepository {
    save(fight: Fight): Promise <String | Error >;
    findWinner(red: string): Promise <Object | Error >;
    FindAll(): Promise <String | Error >;
}

export default BattleRepository;