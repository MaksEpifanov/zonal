import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const createWrapperAndAppendToBody = (wrapperId) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const ReactPortal = ({ children, wrappeId }) => {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrappeId);
    let portalCreated = false;

    if (!element) {
      portalCreated = true;
      element = createWrapperAndAppendToBody(wrappeId);
    }

    setWrapperElement(element);

    return (() => {
      if (portalCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
  }, [wrappeId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;

ReactPortal.propTypes = {
  children: PropTypes.element.isRequired,
  wrappeId: PropTypes.string.isRequired,
};
