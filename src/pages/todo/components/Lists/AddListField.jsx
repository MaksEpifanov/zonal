import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as AddSVG } from 'assets/icons/add.svg';
import TextInput from 'common/components/UI/TextInput';

import useLists from 'pages/todo/hooks/useLists';

import styles from './Lists.module.scss';

const AddListField = ({ className }) => {
  const [hiddenInput, setHiddeninput] = useState(true);
  const [lists, addList] = useLists();

  const onSubmit = (inputText) => {
    const maxId = lists.reduce((acc, curr) => (acc > curr.id ? acc : curr.id), 0);
    const newList = {
      id: maxId + 1, name: inputText,
    };

    addList(newList);
    setHiddeninput((prevState) => !prevState);
  };

  const labelInput = () => {
    if (hiddenInput) {
      return (
        <>
          <h3 className={styles.header__title}>Lists</h3>
          <AddSVG
            className={styles.header__addBtn}
            onClick={() => setHiddeninput((prevState) => !prevState)}
          />
        </>
      );
    }
    return (
      <TextInput
        className={styles.header}
        submitButton={<AddSVG />}
        onSubmit={onSubmit}
        placeholder="Click to input new list"
      />
    );
  };

  return (
    <div className={className}>
      {labelInput()}
    </div>
  );
};

export default AddListField;

AddListField.propTypes = {
  className: PropTypes.string,
};

AddListField.defaultProps = {
  className: '',
};
