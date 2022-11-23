import { MongoClient } from 'mongodb';

export default async function userComment(req, res) {
	const eventId = req.query.eventId;

	const { email, name, text } = req.body;
	if (!email) {
		console.log('no email address added');
	} else if (!name) {
		console.log('no name added');
	} else if (!text) {
		console.log('no text added');
	}
	const client = await MongoClient.connect(
		'mongodb+srv://abNextJS:JZkkU57MAyHpN3Jj@abcluster.vqjrw.mongodb.net/NextJSNewsLetter?retryWrites=true&w=majority',
	);
	const db = client.db();
	if (req.method === 'POST') {
		const newComment = {
			eventId,
			email,
			name,
			comment: text,
		};
		const result = await db.collection('comments').insertOne({ newComment });
		newComment.id = result.insertedId;

		console.log(result);
	}

	if (req.method === 'GET') {
		const docs = await db
			.collection('comments')
			.find()
			.sort({ _id: -1 })
			.toArray();
		res.status(200).json({ message: 'req sent successfully', comments: docs });
	}

	client.close;
}
