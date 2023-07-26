import { useSelector } from 'react-redux';
import BookState from './BookState';

function RenderBook() {
  const books = useSelector((store) => store.books.books);
  console.log(books);
  return (
    <section className="container">
      {books.map((book) => (
        <BookState
          key={book.item_id}
          title={book.title}
          author={book.author}
          atagory={book.catagory}
        />
      ))}
      ;
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
