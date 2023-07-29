import RenderBook from './BookCard';
import AddNewBook from './AddBook';
import './Books.css';

function Books() {
  return (
    <div className="container">
      <RenderBook />
      <AddNewBook />
    </div>
  );
}

export default Books;
