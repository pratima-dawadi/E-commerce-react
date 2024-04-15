import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal-content">
                    <button type="button" className="modal-close" onClick={onClose}>&times;</button>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('modal-root')
    );
}

export default Modal;
