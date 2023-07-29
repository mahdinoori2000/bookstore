import PropTypes from 'prop-types';
import RemoveBookBtn from './DeleteBookBtn';
import './BookState.css';

export default function BookState({ book }) {
  return (
    <div key={book.item_id} className="book-card">
      <div className="book-details roboto-font">
        <p className="book-catagory">Catagory</p>
        <h3 className="secondary-header roboto-font">{book.title}</h3>
        <p className="book-author roboto-font">{book.author}</p>
        <ul>
          <li><button type="button" className="roboto-font">Comments</button></li>
          <li><RemoveBookBtn id={book.item_id} /></li>
          <li><button type="button" className="roboto-font">Edit</button></li>
        </ul>
      </div>
      <div className="book-stutas">
        <div className="circle-wrapper">
          <div className="circle-progress" />
        </div>
        <div className="percentage">
          <p>50%</p>
          <p>completed</p>
        </div>
      </div>
      <div className="book-chapter">
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
