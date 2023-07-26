import PropTypes from 'prop-types';

export default function BookState({ title, author }) {
  return (
    <div>
      <p>type</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <ul>
        <li><button type="button">Comments</button></li>
        <li><button type="button">Remove</button></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
  );
}

BookState.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
