import { MongoClient } from 'mongodb';

export default async function newsletterRegistration(req, res) {
	if (req.method === 'POST') {
		const email = req.body.email;
		const client = await MongoClient.connect(
			'mongodb+srv://abNextJS:JZkkU57MAyHpN3Jj@abcluster.vqjrw.mongodb.net/NextJSNewsLetter?retryWrites=true&w=majority',
		);

		const db = client.db();
		await db.collection('emails').insertOne({ email: email });
		client.close;
		res.status(201).json({ message: 'Signed up!', obj: email });
	}
}
