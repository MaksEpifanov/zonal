import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import Button from 'common/components/UI/Button';
import { ReactComponent as NextSVG } from 'assets/icons/next.svg';

import styles from './PomodoroControls.module.scss';

const cx = classNamesBind.bind(styles);

const PomodoroControls = ({ className }) => {
  const classNames = cx({
    PomodoroControls,
    [className]: !!className,
  });
  return (
    <div className={classNames}>
      <div className={styles.PomodoroControls__mainBtn}>
        <Button primary />
      </div>
      <Button icon={<NextSVG />} value="next" />
    </div>
  );
};

export default PomodoroControls;

PomodoroControls.propTypes = {
  className: PropTypes.string,
};

PomodoroControls.defaultProps = {
  className: '',
};
