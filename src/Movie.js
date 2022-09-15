import React from "react";
import MovieList from "./MovieList";
const dummyDatas = [
	{
		name: "athif",
		content: "Test materials",
		date: "2022/14/09",
	},
];
function Movie() {
	return (
		<ul>
			<MovieList />
		</ul>
	);
}

export default Movie;
