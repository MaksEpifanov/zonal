// import { useState } from 'react';

import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import styles from './NumberInput.module.scss';

const cx = classNamesBind.bind(styles);

const NumberInput = ({
  className, max, min, type, value, onChange,
}) => {
  const classNames = cx({
    NumberInput,
    [className]: !!className,
  });

  return (
    <div className={classNames}>
      <label htmlFor={type}>
        <div className={styles.NumberInput__label}>{type}</div>
        <input type="number" name={type} id={type} value={value} max={max} min={min} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
};

export default NumberInput;

NumberInput.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

NumberInput.defaultProps = {
  className: '',
  type: '',
};
