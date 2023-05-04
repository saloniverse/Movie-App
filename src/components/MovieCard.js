import React from 'react';
import './MovieCard.css'

const MovieCard = (props) => {
    const { Poster, Title, Year, imdbID } = props.movie;

    return(
        <div className="card-container" onClick={() => {
            props.onMovieSelect(imdbID);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            <div className="card-img-container">
                <img className='card-img' src={Poster} alt={Title} />
            </div>
            <div className='card-details'>
                <div className='title'>
                    <span>{Title}</span>
                    <span>{Year}</span>
                </div>
            </div>
        </div>
    );
};
export default MovieCard;