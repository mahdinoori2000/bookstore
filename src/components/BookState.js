import PropTypes from 'prop-types';
import RemoveBookBtn from './DeleteBookBtn';

export default function BookState({ book }) {
  return (
    <div key={book.item_id}>
      <p>Catagory</p>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <ul>
        <li><button type="button">Comments</button></li>
        <li><RemoveBookBtn id={book.item_id} /></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
  );
}

BookState.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};
