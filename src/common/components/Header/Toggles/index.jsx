import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';

import styles from './Toggles.module.scss';

const cx = classNamesBind.bind(styles);

const Toggles = ({ className }) => {
  const classNames = cx({
    [className]: !!className,
    Toggles: true,
  });

  return (
    <div className={classNames}>
      <ThemeToggle className={styles.Toggles__theme} />
      <LangToggle className={styles.Toggles__lang} />
    </div>
  );
};

export default Toggles;

Toggles.propTypes = {
  className: PropTypes.string,
};

Toggles.defaultProps = {
  className: '',
};
