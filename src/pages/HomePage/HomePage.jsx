import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovies } from "../../servises/moviesApi";

function HomePage() {
    const [movies, setMovies] = useState([]);
  const location = useLocation()
  // console.log(movies)

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    movies && (
      <>
      <h1>Trending today</h1>
        <ul>
          {movies.map(({ title, id, name }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{from:location}}>{title}{name}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </>
    )
  );
};

export default HomePage;
