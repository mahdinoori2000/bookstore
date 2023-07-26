import BookState from './BookState';

function RenderBook() {
  return (
    <section className="container">
      <BookState title="Grammer" author="Mahdi Noori" />
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
