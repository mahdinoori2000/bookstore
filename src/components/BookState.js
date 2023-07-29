import PropTypes from 'prop-types';
import RemoveBookBtn from './DeleteBookBtn';
import './BookState.css';

export default function BookState({ book }) {
  return (
    <div key={book.item_id} className="book-card">
      <div className="book-details">
        <p className="book-catagory">Catagory</p>
        <h3 className="secondary-header">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <ul>
          <li><button type="button">Comments</button></li>
          <li><RemoveBookBtn id={book.item_id} /></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div>
        <p>logo</p>
        <div>
          <p>64%</p>
          <p>completed</p>
        </div>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button">Update Progress</button>
      </div>
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
