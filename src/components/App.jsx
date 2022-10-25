import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Loader } from './Loader/Loader';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
 
const LazyHomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyMoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const LazyMovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<LazyHomePage  />} />

            <Route path="movies" element={<LazyMoviesPage />}></Route>
            <Route path="movies/:movieId/*" element={<LazyMovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
