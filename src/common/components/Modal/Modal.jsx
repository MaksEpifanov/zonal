import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CloseSVG } from 'assets/icons/close.svg';

import ReactPortal from 'common/components/ReactPortal';

import styles from './Modal.module.scss';

const Modal = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);
  if (!isOpen) return null;

  return (
    <ReactPortal wrappeId="modal">
      <div className={styles.Modal}>
        <div className={styles.modal__content}>
          <CloseSVG className={styles.modal__close} onClick={handleClose} />
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
