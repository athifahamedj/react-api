import React from "react";
import MovieList from "./MovieList";

//https://swapi.dev/api/films
// console.log(dummyDatas);
function Movie(props) {
	// console.log(props.movies);
	return (
		<ul>
			{props.movies.map((movie) => (
				<MovieList
					key={movie.episode_id}
					title={movie.title}
					content={movie.opening_crawl}
					date={movie.release_date}
				/>
			))}
		</ul>
	);
}

export default Movie;
