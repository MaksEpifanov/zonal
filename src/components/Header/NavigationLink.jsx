import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

const NavigationLink = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const className = cx({
    nav__link: true,
    nav__link_active: match,
  });

  return (
    <li className={style.nav__item}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </li>
  );
};

export default NavigationLink;

NavigationLink.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  to: PropTypes.string.isRequired,
};
