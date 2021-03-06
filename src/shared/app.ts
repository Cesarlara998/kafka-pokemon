import express from "express";
import * as bodyParser from "body-parser";
import ErrorMiddleware from "./middlewares/Error.middleware";
import Consumer from "../pokemon-fight-record/infrastructure/Pokemon.consumer";

class App {
    public app: express.Application;
	public port: number;
	public consumer: Consumer
	constructor(routers, port) {
		this.app = express();
		this.port = port;
		this.initializeMiddlewares();
		
		if (routers) this.initializeRouters(routers);
		this.initializeErrorHandling();
	}

    private initializeMiddlewares() {
		this.app.use(bodyParser.json());
	}
	
	private initializeErrorHandling() {
		this.app.use(ErrorMiddleware);
	}
	private initializeConsumer() {
		this.consumer = new Consumer();
		this.consumer.Consumer()
	}
	private initializeRouters(routers) {
		routers.forEach((router) => {
			this.app.use("", router.router);
		});
	}

	public async listen() {
		this.app.listen(this.port, () => {
			this.initializeConsumer();
			console.log(`App listening on the port ${this.port}`);
		});
	}

}

export default App;
