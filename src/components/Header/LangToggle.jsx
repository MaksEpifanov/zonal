import { ReactComponent as LangSvgEN } from 'assets/icons/langEN.svg';
import PropTypes from 'prop-types';

const LangToggle = ({ className }) => (
  <button type="button" className={className}>
    <LangSvgEN />
  </button>
);

export default LangToggle;

LangToggle.propTypes = {
  className: PropTypes.string,
};

LangToggle.defaultProps = {
  className: '',
};
