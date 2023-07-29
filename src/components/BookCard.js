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
  }, []);
  if (loading) {
    data = <div>Loading...</div>;
  } else if (books) {
    data = (
      <div>
        {books.map((book) => (
          <BookState key={book.item_id} book={book} />
        ))}
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
  } else {
    data = <div />;
  }
  return (
    <section>
      {data}
    </section>
  );
}
export default RenderBook;
