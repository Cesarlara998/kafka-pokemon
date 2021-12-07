import { config } from "dotenv";
config();
import { PORT } from "./shared/config";
import App from "./shared/app";
import PokemonRouter from "./pokemon-fight-record/infrastructure/Pokemon.router";
const app = new App(
    [new PokemonRouter()],
    PORT
);

app.listen();