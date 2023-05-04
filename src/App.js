import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
import MovieCard from './components/MovieCard';
import searchicon from './image/icon-search.png';
import MovieInfoCard from './components/MovieInfoCard.js';

export const API_KEY = "258d878c";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, updateSearchQuery] = useState('');
  const [selectedMovie, onMovieSelect] = useState();
  const [timeoutId, updateTimeoutId] = useState();

  const getMovies = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    setMovies(response.data.Search);
  };

  const onMovieSearch = (event) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => getMovies(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div>
      <div className='header'>
        <h1 className='heading'>Movie App</h1>
        <div className='searchbox'>
          <img className='searchicon' src={searchicon} />
          <input className='searchbar' value={searchQuery} placeholder="Search Movie" onChange={onMovieSearch}/>
        </div>
      </div>
      { selectedMovie && <MovieInfoCard selectedMovie={selectedMovie} /> }
      <main className='main'>        
        { movies?.length ? movies.map((movie, index) => (
          <MovieCard key={index}
          movie={movie}
          onMovieSelect={onMovieSelect} />
        )):"No Movie Found"}
        
      </main>
    </div>
  );
}
export default App;
