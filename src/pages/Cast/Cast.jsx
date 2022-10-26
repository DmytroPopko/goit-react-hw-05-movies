import { useFetchMovieCredits } from 'hooks/useFetchMovieCredits';

export const Cast = () => {
  const credits = useFetchMovieCredits();
  // console.log(credits);

  return (
    credits && (
      <>
        <ul>
          {credits['cast'].map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item['profile_path']}`}
                alt={item.name}
                width="100"
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};
