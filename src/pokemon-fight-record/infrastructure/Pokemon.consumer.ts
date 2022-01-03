import BrokerConnection from "../../shared/rabbitmq.connection";

export default class Consumer{
    constructor(){
        //this.recibeMessage();
    }
    async Consumer(){
        const exchange:String = 'Pokemon'
        const queue:String = 'PokemonBattle'
        try {
           
            const conn = await require('amqplib').connect(new BrokerConnection().URL)

            const channel = await conn.createChannel()

            channel.consume(queue, message => {
                
                console.log(message.content.toString())

                channel.ack(message)
            })

        } catch (error) {
            console.error(error)
        }
    }
}