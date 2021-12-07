import BrokerConnection from "../../shared/rabbitmq.connection";

export default class PokemonController{
    constructor(){
        //this.recibeMessage();
    }
    
    async recibeMessage(){
        // console.log(this.broker.registerCallback);
        //const broker = new BrokerConnection();

        try {
            const conn = await require('amqplib').connect(new BrokerConnection().URL)

            const channel = await conn.createChannel()
            const res = await channel.assertQueue('test')

            channel.consume('test', message => {
                console.log(message.content.toString())
            })

            
        } catch (error) {
            console.error(error)
        }
    }
}