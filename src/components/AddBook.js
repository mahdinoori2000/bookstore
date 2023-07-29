import { useState } from 'react';
import AddBookBtn from './AddBookBtn';
import './AddBook.css';

function AddNewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = Date.now();
  return (
    <section className="form">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          className="input-book-title"
          value={title}
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="input-book-author"
          value={author}
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <AddBookBtn
          title={title}
          author={author}
          id={id}
          setTitle={setTitle}
          setAuthor={setAuthor}
        />
      </form>
    </section>
  );
}
export default AddNewBook;
