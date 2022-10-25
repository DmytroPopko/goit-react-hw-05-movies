import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../servises/moviesApi";

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

// console.log(movieId);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};

