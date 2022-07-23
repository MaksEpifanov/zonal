import { useState } from 'react';

import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import { ReactComponent as AddSVG } from 'assets/icons/add.svg';

import styles from './TextInput.module.scss';

const cx = classNamesBind.bind(styles);

const TextInput = ({
  className, placeholder, submitButton, onSubmit, onEmptySubmit,
}) => {
  const classNames = cx({
    TextInput,
    [className]: !!className,
  });

  const [inputText, setInputText] = useState('');

  const handleSumbit = () => {
    if (inputText) {
      onSubmit(inputText);
      setInputText('');
    } else {
      onEmptySubmit();
    }
  };

  return (
    <div className={classNames}>
      <input
        className={styles.TextInput__input}
        type="text"
        placeholder={placeholder}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.code === 'Enter' && handleSumbit()}
      />
      <button type="button" className={styles.TextInput__submit} onClick={handleSumbit}>
        {submitButton}
      </button>
    </div>
  );
};

export default TextInput;

TextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  onEmptySubmit: PropTypes.func,
  submitButton: PropTypes.element,
};

TextInput.defaultProps = {
  className: '',
  placeholder: '',
  onSubmit: () => {},
  onEmptySubmit: () => {},
  submitButton: <AddSVG />,
};
