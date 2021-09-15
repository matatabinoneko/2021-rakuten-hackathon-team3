function Tag(props) {
	return (
		<span className="badge rounded-pill bg-secondary mx-2 my-1">
			{props.tagName}
		</span>
	);
}

export default Tag;
