import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as AddSVG } from 'assets/icons/add.svg';
import TextInput from 'common/components/UI/TextInput';

import useLists from 'pages/todo/hooks/useLists';

import styles from './Lists.module.scss';

const AddListField = ({ className }) => {
  const [hiddenInput, setHiddenInput] = useState(true);
  const [lists, addList] = useLists();

  const onSubmit = (inputText) => {
    const maxId = lists.reduce((acc, curr) => (acc > curr.id ? acc : curr.id), 0);
    const newList = {
      id: maxId + 1, name: inputText,
    };

    addList(newList);
    setHiddenInput((prevState) => !prevState);
  };

  const labelInput = () => {
    if (hiddenInput) {
      return (
        <>
          <h3 className={styles['input-field__title']}>Lists</h3>
          <AddSVG
            className={styles['input-field__addBtn']}
            onClick={() => setHiddenInput((prevState) => !prevState)}
          />
        </>
      );
    }
    return (
      <TextInput
        placeholder="Input new list"
        onSubmit={onSubmit}
        submitButton={<AddSVG />}
        onEmptySubmit={() => setHiddenInput((prevState) => !prevState)}
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
