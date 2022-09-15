import React, { useState } from "react";
import "./App.css";

import Movie from "./Movie";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const showMovieHandler = async () => {
		setIsLoading(true);
		const response = await fetch("https://swapi.dev/api/films");
		const data = await response.json();
		setMovies(data.results);
		setIsLoading(false);

		// fetch("https://swapi.dev/api/films")
		// 	.then((response) => {
		// 		return response.json();
		// 		// return response;
		// 	})
		// 	.then((data) => {
		// 		setMovies(data.results);
		// 		// console.log(data.results);
		// 	});
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

			{!isLoading && <Movie movies={movies} />}
			{isLoading && <p>Loading...</p>}
			{!isLoading && movies.length === 0 && <p>No Movies Found</p>}
			<button onClick={showMovieHandler}>show list</button>
		</React.Fragment>
	);
}

export default App;
