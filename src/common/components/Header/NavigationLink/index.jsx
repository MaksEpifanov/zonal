import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavigationLink.module.scss';

const cx = classNames.bind(styles);

const NavigationLink = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const className = cx({
    NavigationLink: true,
    NavigationLink_active: match,
  });

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default NavigationLink;

NavigationLink.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  to: PropTypes.string.isRequired,
};
