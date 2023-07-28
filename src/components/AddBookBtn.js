import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function AddBookBtn({
  title,
  author,
  id,
  setTitle,
  setAuthor,
}) {
  const dispatch = useDispatch();
  function handleAddBook() {
    dispatch(addBook(id, title, author));
    setAuthor('');
    setTitle('');
  }
  return (
    <button onClick={handleAddBook} type="button">
      Add Book
    </button>
  );
}

export default AddBookBtn;
AddBookBtn.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setTitle: PropTypes.func.isRequired,
  setAuthor: PropTypes.func.isRequired,
};
