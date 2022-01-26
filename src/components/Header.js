import PropTypes from 'prop-types';
import Button from '../components/Button';
const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAddTask ? 'red' : 'green'}
        text={showAddTask ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
