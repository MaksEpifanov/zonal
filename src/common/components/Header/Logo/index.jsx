import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';
import { ReactComponent as LogoSvgMobile } from 'assets/icons/logo-mobile.svg';

import styles from './Logo.module.scss';

const cx = classNamesBind.bind(styles);

const Logo = ({ className }) => {
  const classNames = cx({
    [className]: !!className,
    Logo: true,
  });

  return (
    <Link to="/" className={classNames}>
      <LogoSvg className={styles.Logo__desktop} />
      <LogoSvgMobile className={styles.Logo__mobile} />
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};
