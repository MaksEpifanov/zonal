import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import styles from './NavigationLink.module.scss';

const cx = classNamesBind.bind(styles);

const NavigationLink = ({ className, children, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const classNames = cx({
    [className]: !!className,
    NavigationLink: true,
    NavigationLink_active: match,
  });

  return (
    <Link to={to} className={classNames}>
      {children}
    </Link>
  );
};

export default NavigationLink;

NavigationLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  to: PropTypes.string.isRequired,
};

NavigationLink.defaultProps = {
  className: '',
};
