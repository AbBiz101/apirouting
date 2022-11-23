import { MongoClient } from 'mongodb';

export async function dbConnection() {
	const client = await MongoClient.connect(
		'mongodb+srv://abNextJS:JZkkU57MAyHpN3Jj@abcluster.vqjrw.mongodb.net/NextJSNewsLetter?retryWrites=true&w=majority',
	);
	return client;
}

export async function insertDoc(collection, doc) {
	const client = await dbConnection();
	const db = client.db();
	return await db.collection(collection).insertOne(doc);
}
