import PropTypes from 'prop-types';
import styles from './DigitClock.module.scss';

const DigitClock = ({ clock }) => {
  const { hours, minutes } = clock;
  return (
    <div className={styles.DigitClock}>
      {`${hours}:${minutes}`}
    </div>
  );
};

export default DigitClock;

DigitClock.propTypes = {
  clock: PropTypes.shape({
    hours: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    minutes: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    seconds: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }).isRequired,
};
