import React from "react";

function MovieList(props) {
	return (
		<div>
			{/* <h3>Movie List</h3> */}
			<li>
				<p>{props.key}</p>
				<h3>{props.title}</h3>
				<p>{props.content}</p>
				<p>{props.date}</p>
			</li>
		</div>
	);
}

export default MovieList;
