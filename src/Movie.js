import React from "react";
import MovieList from "./MovieList";
const dummyDatas = {
	name: "God Father",
	content: "A Don story",
	date: "1989/14/09",
};
//https://swapi.dev/api/people/1
// console.log(dummyDatas);
function Movie(props) {
	return (
		<ul>
			dummyDatas.map(()=>{})
			<MovieList data={dummyDatas} />
		</ul>
	);
}

export default Movie;
