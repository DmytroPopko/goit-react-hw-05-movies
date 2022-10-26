import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';
import Notitfication from '../../components/Notification/Notitfication';

export const Reviews = () => {
  const reviews = useFetchMovieReviews();
  // console.log(reviews);

  return (
    reviews && (
      <>
        <ul>
          {reviews['results'].map(item => (
            <li key={item.id}>
              <p>{item.author}</p>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
        {reviews.total_results === 0 && (
          <Notitfication text="We don't have any reviews for this movie" />
        )}
      </>
    )
  );
};
