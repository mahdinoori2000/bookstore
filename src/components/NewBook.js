function NewBook() {
  return (
    <div className="container">
      <h2>Add New Book</h2>
      <form>
        <input type="text" id="book-title" />
        <input type="text" id="book-author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
export default NewBook;
