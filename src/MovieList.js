import React from "react";

function MovieList(props) {
	return (
		<div>
			<li>{props.data.name}</li>
			<li>{props.data.content}</li>
			<li>{props.data.date}</li>
		</div>
	);
}

export default MovieList;
