import React, { useEffect, useState } from "react";
import './MovieInfoCard.css';
import axios from 'axios'
import { API_KEY} from '../App'

const MovieInfoCard = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie }  = props;
    useEffect(() => {
        axios.get(
          `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
        ).then((response) => setMovieInfo(response.data));
      }, [selectedMovie]);


    return(
        <div className="info-card-container">
            {movieInfo ? (
                <>
            <div className="card-img-container">
                <img className='card-img' src={movieInfo?.Poster} alt="Movie Poster" />
            </div>
            <div className='card-details'>
                <div className='tittle'>
                    <span>{movieInfo?.Title}</span>
                    <span className="data">({movieInfo?.Year})</span>
                </div>
                <div>Genre:
                    <span className="data">{movieInfo?.Genre}</span>
                </div>
                <div>
                    Language:<span className="data">{movieInfo?.Language}</span>
                </div>
                <div className='rating'>
                    <span>
                        Rating:<span className="data">{movieInfo?.imdbRating}</span>
                    </span>
                    <span>
                        Runtime:<span className="data">{movieInfo?.Runtime}</span>
                    </span>
                    <span>
                        Released:<span className="data">{movieInfo?.Released}</span>
                    </span>
                    <span>
                        Awards:<span className="data">{movieInfo?.Awards}</span>
                    </span>
                </div>
                <div className="cast">
                    <span>
                        Actors:<span className="data">{movieInfo?.Actors}</span>
                    </span>
                    <span>
                        Directors:<span className="data">{movieInfo?.Director}</span>
                    </span>
                    <span>
                        Writer:<span className="data">{movieInfo?.Writer}</span>
                    </span>   
                </div>
                <div className='description'>
                    Plot:<p className="data">{movieInfo?.Plot}</p>
                </div>
            </div>
            </>
            ): (
                "Loading..."
              )}
        </div>
    )
}
export default MovieInfoCard;