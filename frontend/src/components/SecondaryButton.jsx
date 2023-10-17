import classNames from 'classnames';
import PropTypes from 'prop-types';

function SecondaryButton({ children, onClick, className, type }) {
  return (
    <button
      type={type}
      className={classNames(
        'inline-block rounded bg-sky-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-sky-700 transition duration-150 ease-in-out hover:bg-sky-500 hover:text-white focus:bg-sky-200 focus:outline-none focus:ring-0 active:bg-sky-300',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;

SecondaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};
