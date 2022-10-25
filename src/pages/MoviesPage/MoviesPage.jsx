import { useState, useEffect } from "react";
import { fetchMoviesByName } from "servises/moviesApi";
import { useSearchParams, Link, useLocation, Outlet } from "react-router-dom";

function MoviesPage()  {
  const [movies, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const location = useLocation();

  useEffect(() => {
    if (query === null || query === "") return;

    async function fetchMovies() {
      const data = await fetchMoviesByName(query);
      setMovie(data);
    }
    fetchMovies();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  console.log(movies);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>
      {movies && (
        <>
        <h2>Search</h2>
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MoviesPage;
