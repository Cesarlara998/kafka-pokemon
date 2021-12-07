import * as config from "./config";

export default class BrokerConnection {
    private amqp = require('amqplib');
    public URL = 'amqp://' + config.BROKER_USER + ':' +config.BROKER_PASSWORD + '@' + config.BROKER_HOST + ':' + config.BROKER_PORT;
    public connection;
    public channel;
    public callbacks;
    public message;

    constructor() {

      //this.init();
      this.callbacks = {};
      this.message = '';

    }

    async init() {
      this.connection = this.amqp.connect(this.URL)
      }
      
      createChannel = (callback)=> {
        this.connection.then((conn) => {
            return conn.createChannel();
          }).then((ch) => {
            callback(ch);
          }).catch(console.warn);
      
    };

}