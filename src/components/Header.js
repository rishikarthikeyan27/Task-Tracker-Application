import PropTypes from 'prop-types';
import Button from '../components/Button';
const Header = ({ title }) => {
  const onClick = () => {
    console.log('Clicked in Header');
  };

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  );
};

export default Header;
