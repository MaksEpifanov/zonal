import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import styles from './CurrentPage.module.scss';

const cx = classNamesBind.bind(styles);

const CurrentPage = ({ className }) => {
  const { pathname } = useLocation();
  const classNames = cx({
    [className]: !!className,
    CurrentPage: true,
  });

  const text = pathname === '/' ? 'CLOCK' : pathname.slice(1).toUpperCase();

  return <p className={classNames}>{text}</p>;
};

export default CurrentPage;

CurrentPage.propTypes = {
  className: PropTypes.string,
};

CurrentPage.defaultProps = {
  className: '',
};
