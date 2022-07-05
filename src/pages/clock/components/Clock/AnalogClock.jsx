import PropTypes from 'prop-types';
import styles from './AnalogClock.module.scss';

const AnalogClock = ({ clock }) => {
  const { hours, minutes, seconds } = clock;
  return (
    <div className={styles.AnalogClock}>
      <div className={styles['circle-md']} />
      <div className={styles['circle-sm']} />
      <div className={styles['hour-lines']}>
        {Array(12)
          .fill()
          .map((el, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className={styles['hour-line']} key={i} />
          ))}
      </div>
      <ClockHand name="hours" rotate={hours * 30 + 180} />
      <ClockHand name="minutes" rotate={minutes * 6 + 180} />
      <ClockHand name="seconds" rotate={seconds * 6 + 180} />
    </div>
  );
};

export default AnalogClock;

AnalogClock.propTypes = {
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

const ClockHand = ({ name, rotate }) => {
  const style = {
    transform: `translateX(-50%) rotate(${rotate}deg)`,
    transition: `${
      (rotate > 534 || rotate <= 182)
        && name === 'seconds'
        ? 'none'
        : `${0.2}s cubic-bezier(0.4, 2.08, 0.55, 0.44)`
    }`,
  };
  return <div className={`${styles.hand} ${styles[name]}`} style={style} />;
};

ClockHand.propTypes = {
  name: PropTypes.string.isRequired,
  rotate: PropTypes.number.isRequired,
};
