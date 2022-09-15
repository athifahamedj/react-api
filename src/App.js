import React, { useState } from "react";
import "./App.css";

import Movie from "./Movie";

function App() {
	const [movies, setMovies] = useState([]);

	const showMovieHandler = () => {
		fetch("https://swapi.dev/api/films")
			.then((response) => {
				return response.json();
				// return response;
			})
			.then((data) => {
				setMovies(data.results);
				// console.log(data.results);
			});
		// setMovies(!movies);
	};
	// const dummyDatas = [
	// 	{
	// 		id: "m1",
	// 		title: "God Father",
	// 		content: "A Don story",
	// 		date: "1989/14/09",
	// 	},
	// 	{
	// 		id: "m2",
	// 		title: "Dog tooth",
	// 		content: "A thriller story",
	// 		date: "1788/09/12",
	// 	},
	// ];
	return (
		<React.Fragment>
			<h1>Movie List</h1>

			<Movie movies={movies} />
			<button onClick={showMovieHandler}>show list</button>
		</React.Fragment>
	);
}

export default App;
