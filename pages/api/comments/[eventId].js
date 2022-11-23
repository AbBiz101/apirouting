export default function userComment(req, res) {
	eventID = req.query.eventId;
	const { email, name, text } = req.body;
	if (!email) {
		console.log('no email address added');
	} else if (!name) {
		console.log('no name added');
	} else if (!text) {
		console.log('no text added');
	}

	if (req.method === 'POST' && email && name && text) {
		const newComment = {
			id: new Date().toISOString(),
			email,
			name,
			comment: text,
		};
		res.status(422).json({ message: 'message added', obj: newComment });
	}

	if (req.method === 'GET') {
		const com = [
			{ id: 'c1', name: 'Ab', comment: 'my comment' },
			{ id: 'c2', name: 'Ab', comment: 'my comment' },
			{ id: 'c3', name: 'Ab', comment: 'my comment' },
			{ id: 'c4', name: 'Ab', comment: 'my comment' },
			{ id: 'c5', name: 'Ab', comment: 'my comment' },
		];
		res.status(200).json({ message: 'req sent successfully', obj: com });
	}
}
