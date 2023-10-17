import PropTypes from 'prop-types';

function Modal({ children, onClose }) {
  return (
    <div
      className="fixed top-0 left-0 bg-neutral-950/25 h-full w-full overflow-y-auto overflow-x-hidden outline-none "
      onClick={onClose}
    >
      <div
        className=" relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out mx-auto mt-20 max-w-sm"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
