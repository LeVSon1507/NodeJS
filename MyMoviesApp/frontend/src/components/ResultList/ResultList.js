import React, { useState } from "react";
import MovieDetail from "../MovieDetail/MovieDetail";
import "./ResultList.css";
import usePost from "../../customHooks/usePost";

function ResultList({ isSearch, searchValue }) {
  //   const url = `/search/movie?api_key=${API_KEY}&language=en&query=${searchValue}`;
  const [page, setPage] = useState(1);
  const { results, isLoading } = usePost(
    "search",
    `page=${page}`,
    "RYoOcWM4JW",
    {
      // searchValue: searchValue,
      keyword: searchValue,
      genre: "",
      mediaType: "",
      language: "",
      year: "",
    }
  );
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  const [movie, setMovie] = useState({});

  const handleShowDetails = (movie) => {
    setIsShowMovieDetail(!isShowMovieDetail);
    setMovie(movie);
  };
  const totalPage = results?.total_pages;
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };
  return (
    <div className="resultList">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="resultContainer">
          {isSearch &&
            results?.results?.map((movie) => {
              return (
                <>
                  <div className="resultItem" key={movie.name}>
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                      alt={movie.title || movie.name}
                      className="resultPoster"
                      onClick={() => handleShowDetails(movie)}
                    />
                  </div>
                </>
              );
            })}
          <div className="btn-next-prev">
            {page > 1 && (
              <button className="btn-page" onClick={handlePrevPage}>
                Prev
              </button>
            )}
            {page <= totalPage - 1 && (
              <button className="btn-page" onClick={handleNextPage}>
                Next
              </button>
            )}
          </div>

          {
            <MovieDetail
              isShowMovieDetail={isShowMovieDetail}
              movieData={movie}
              isBannerList={false}
            />
          }
        </div>
      )}
    </div>
  );
}

export default ResultList;
