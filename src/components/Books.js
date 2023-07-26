import RenderBook from './BookState';
import AddNewBook from './AddBook';

function Books() {
  return (
    <>
      <RenderBook title="grammer book" author="mahdi noori" />
      <AddNewBook />
    </>
  );
}

export default Books;
