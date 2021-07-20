import {config} from 'dotenv'
config()

export const options = {
	options: {debug: true},
	identity: {
		username: process.env.FS_USERNAME,
		password: process.env.FS_PASSWORD,
	},
	channels: ['fazttech'],
}