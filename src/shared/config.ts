const PORT = process.env.PORT || 3000
const BROKER_HOST = process.env.BROKER_HOST || 'localhost'
const BROKER_PORT = process.env.BROKER_PORT || '5672'
const BROKER_USER = process.env.BROKER_USER
const BROKER_PASSWORD = process.env.BROKER_PASSWORD
export {
    PORT,
    BROKER_HOST,
	BROKER_PORT,
	BROKER_USER,
	BROKER_PASSWORD
}