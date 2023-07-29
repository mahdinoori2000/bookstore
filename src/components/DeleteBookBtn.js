import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function RemoveBookBtn({ id }) {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
  );
}
RemoveBookBtn.propTypes = {
  id: PropTypes.string.isRequired,
};
