import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookState from './BookState';
import { fetchBooks } from '../redux/books/booksSlice';

function RenderBook() {
  const { books, loading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  let data;
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, loading]);
  if (loading) {
    data = <div>Loading...</div>;
  } else if (books) {
    data = (
      <div>
        {books.map((book) => (
          <BookState key={book.item_id} book={book} />
        ))}
        ;
      </div>
    );
  } else if (error) {
    data = (
      <div>
        error:
        {' '}
        {error}
      </div>
    );
  }
  return (
    <section className="container">
      {data}
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
    </section>
  );
}
export default RenderBook;
