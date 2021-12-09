import BrokerConnection from "../../shared/rabbitmq.connection";

export default class BattleController{
    constructor(){
        //this.recibeMessage();
    }
    async resultados() {
        console.log('OKA')
        return 'hola'
    }

    async recibeMessage(){
        const exchange:String = 'Pokemon'
        const queue:String = 'PokemonBattle'
        try {
           
            const conn = await require('amqplib').connect(new BrokerConnection().URL)
            console.log(1)

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