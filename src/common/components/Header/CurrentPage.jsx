import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const CurrentPage = ({ className }) => {
  const { pathname } = useLocation();
  const text = pathname === '/' ? 'CLOCK' : pathname.slice(1).toUpperCase();
  return <p className={className}>{text}</p>;
};

export default CurrentPage;

CurrentPage.propTypes = {
  className: PropTypes.string.isRequired,
};
