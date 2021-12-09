import express from "express";
import BattleController from "./Battle.controller";

export default class PokemonRouter {
    public path = "";
    public router = express.Router();
    private battleController: BattleController;

    constructor(){
        this.battleController = new BattleController();
        this.battleController.recibeMessage()
        this.router.get(`${this.path}/`, this.battleController.resultados);
        // this.router.get('',this.pokemonController.)
    }
}