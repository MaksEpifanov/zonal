import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import styles from './CurrentPage.module.scss';

const cx = classNamesBind.bind(styles);

const CurrentPage = ({ className }) => {
  const classNames = cx({
    [className]: !!className,
    CurrentPage: true,
  });
  const { pathname } = useLocation();
  const { t } = useTranslation('translation', { keyPrefix: 'navigation' });

  const currentPage = (path) => {
    switch (path) {
      case '/': return t('clock');
      case '/stopwatch': return t('stopwatch');
      case '/pomodoro': return t('pomodoro');
      case '/todo': return t('todo');
      default: return 0;
    }
  };

  return <p className={classNames}>{currentPage(pathname)}</p>;
};

export default CurrentPage;

CurrentPage.propTypes = {
  className: PropTypes.string,
};

CurrentPage.defaultProps = {
  className: '',
};
