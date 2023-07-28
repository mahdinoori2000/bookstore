import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function BookState({ book }) {
  const dispatch = useDispatch();

  return (
    <div key={book.item_id}>
      <p>{book.catagory}</p>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <ul>
        <li><button type="button">Comments</button></li>
        <li><button type="button" onClick={() => { dispatch(removeBook(book.item_id)); }}>Remove</button></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
  );
}

BookState.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    catagory: PropTypes.string.isRequired,
    item_id: PropTypes.number.isRequired,
  }).isRequired,
};
