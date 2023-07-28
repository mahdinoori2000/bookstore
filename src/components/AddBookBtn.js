import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

/* eslint-disable react/prop-types */
function AddBookBtn({
  title,
  author,
  id,
  setTitle,
  setAuthor,
}) {
  const dispatch = useDispatch();
  function handleAddBook() {
    console.log(title, author, id);
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
