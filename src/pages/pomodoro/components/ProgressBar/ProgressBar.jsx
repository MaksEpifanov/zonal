import PropTypes from 'prop-types';

const ProgressBar = ({ max, value, className }) => (
  <progress max={max} value={value} className={className} />
);

export default ProgressBar;

ProgressBar.propTypes = {
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

ProgressBar.defaultProps = {
  className: '',
};
