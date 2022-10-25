import { useFetchMovie } from 'hooks/useFetchMovie';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();

  const DateYearString = () => {
    const date = new Date(movie['release_date']);
    const year = date.getFullYear();
    return `${year}`;
  };

  // console.log(location);
  return (
    <>
      {movie && (
        <>
          <button
            className="backbtn"
            onClick={() => {
              navigate(location?.state?.from ?? '/');
            }}
          >
            Go back
          </button>
          <div className="mainInfo">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie['poster_path']}`}
              alt={movie.name}
              width="400"
            />
            <div className='detailInf'>
              <h2>
                {movie['title']} {DateYearString()}
              </h2>
              <h3>User Score:</h3>
              <span>{movie['vote_average']}</span>
              <h3>Overview</h3>
              <span>{movie['overview']}</span>
              <h3>Genres</h3>
              <span>{movie['genres'].map(item => ' ' + item.name)}</span>
            </div>
          </div>
          <span className='additionallInf'>
            Additional information
            <ul>
              <li>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </ul>
          </span>
          <Outlet />
        </>
      )}
    </>
  );
}

export default MovieDetails;
