import { useState } from 'react';
import AddBookBtn from './AddBookBtn';

function AddNewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = Date.now();
  return (
    <div className="container">
      <h2>Add New Book</h2>
      <form>
        <input
          type="text"
          className="book-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="book-author"
          value={author}
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
    </div>
  );
}
export default AddNewBook;
