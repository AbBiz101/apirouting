import classes from './comment-list.module.css';

function CommentList({ items }) {
	return (
		<ul className={classes.comments}>
			{items.map((i) => (
				<li key={i._id}>
					<p>{i.comment}</p>
					<div>
						By <address>{i.name}</address>
					</div>
				</li>
			))}
		</ul>
	);
}

export default CommentList;
