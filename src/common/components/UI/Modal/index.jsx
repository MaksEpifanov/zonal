import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import { ReactComponent as CloseSVG } from 'assets/icons/close.svg';
import ReactPortal from 'common/components/ReactPortal';

import styles from './Modal.module.scss';

const cx = classNamesBind.bind(styles);

const Modal = ({
  className, children, isOpen, handleClose,
}) => {
  const classNames = cx({
    [className]: !!className,
    content: true,
  });

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
        <div className={classNames}>
          <CloseSVG className={styles.content__close} onClick={handleClose} />
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;

Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
Modal.defaultProps = {
  className: '',
};
