import { dbConnection, insertDoc, getDocs } from '../../../helpers/db-util';

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
	const db = await dbConnection();
	if (req.method === 'POST') {
		const newComment = {
			eventId,
			email,
			name,
			comment: text,
		};
		const result = await insertDoc('comments', newComment);
		newComment.id = result.insertedId;

		console.log(result);
	}

	if (req.method === 'GET') {
		const docs = await getDocs('comments')
		res.status(200).json({ message: 'req sent successfully', comments: docs });
	}

	db.close;
}
