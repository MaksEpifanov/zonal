import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import Modal from 'common/components/UI/Modal';
import Button from 'common/components/UI/Button';
import { ReactComponent as OptionsSVG } from 'assets/icons/options.svg';
import OptionsInModal from './OptionsInModal';

import styles from './PomodoroOptions.module.scss';

const cx = classNamesBind.bind(styles);

const PomodoroOptions = ({ className, disabled }) => {
  const classNames = cx({
    PomodoroOptions,
    [className]: !!className,
  });

  const [isOpenModal, setOpenModal] = useState(false);
  const { t } = useTranslation('translation', { keyPrefix: 'buttons' });

  const onViewModal = () => setOpenModal((prevOpenModal) => !prevOpenModal);

  return (
    <div className={classNames}>
      <Button value={t('options')} icon={<OptionsSVG />} onClick={onViewModal} disabled={disabled} />
      <Modal
        className={styles.PomodoroOptions__zi}
        isOpen={isOpenModal}
        handleClose={onViewModal}
      >
        <OptionsInModal />

      </Modal>
    </div>
  );
};

export default PomodoroOptions;

PomodoroOptions.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

PomodoroOptions.defaultProps = {
  className: '',
  disabled: false,
};
