import { A } from './Navigation.styled';
import { Outlet } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="Navigation">
            <li className='NavigationList'>
              <A to="/" end>
                Home
              </A>
            </li>
            <li>
              <A to="movies">Movies</A>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
