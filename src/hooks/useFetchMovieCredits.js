import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../servises/moviesApi";

export const useFetchMovieCredits = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

console.log(movieId);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};

