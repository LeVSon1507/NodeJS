import React from "react";
import { API_KEY } from "../../config";
import useFetchTrailerMovie from "../../customHooks/useFetch";
import moment from 'moment';
import YouTube from 'react-youtube';
import './MovieDetail.css';

function MovieDetail({ movieData, isShowMovieDetail, isBannerList }) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [results, setResults] = React.useState([]);
    console.log("🚀 ~ file: MovieDetail.js:11 ~ MovieDetail ~ results:", results)
    const { id, title, release_date, vote_average, backdrop_path, overview, poster_path, name } = movieData;
    React.useEffect(() => {
    const useFetchTrailerMovieData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:3001/api/movies/video`, {
                method: 'POST',
                body: JSON.stringify({ film_id: id }),
                headers: {
                    Authorization: 'Bearer RYoOcWM4JW',
                    }
            });
            if (response.status === 200) {
                const data = await response.json();
                console.log("🚀 ~ file: MovieDetail.js:26 ~ useFetchTrailerMovieData ~ data:", data)
                setResults(data);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };
    useFetchTrailerMovieData()
   },[id])

    const trailerMovie = results
    console.log("🚀 ~ file: MovieDetail.js:38 ~ MovieDetail ~ trailerMovie:", trailerMovie)

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        isShowMovieDetail && <div className="movieDetails">
            <div className="movieDetailContainer">
                <h1 className='title'>{isBannerList ? name : title}</h1>
                <div className="line"></div>
                <h4>Release Date: {moment(release_date).format("YYYY-MM-DD")}</h4>
                <h4 className='vote'>Vote: {vote_average}/10</h4>
                <p >{overview}</p>
            </div>
            {isLoading && <h1>Loading...</h1>}
            {
                !isLoading && trailerMovie && (
                    <div className="trailer">
                        <YouTube videoId={trailerMovie.key} opts={opts} />
                    </div>
                )
            }
            {
                !isLoading && !trailerMovie && (
                    <img src={
                        isBannerList ?
                            `https://image.tmdb.org/t/p/original${poster_path}`
                            : `https://image.tmdb.org/t/p/original${backdrop_path}`
                    } alt="Backdrop" style={{ width: "100%" }} />
                )
            }
        </div>
    );
}

export default MovieDetail;