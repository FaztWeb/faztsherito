import fs from 'fs-extra'

export async function readFile() {
	return await fs.readJson('./db.json', 'utf-8')
}
export async function writeFile(dbJSON) {
	await fs.writeJson('./db.json', dbJSON, 'utf-8')
}