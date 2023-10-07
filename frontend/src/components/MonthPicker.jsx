import PropTypes from 'prop-types';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import classNames from 'classnames';

function MonthPicker({ className, month, year, onNextClick, onPrevClick }) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div
      className={classNames(
        'flex justify-items-center items-center bg-white px-3 py-2 rounded-sm border border-gray-200 w-fit',
        className
      )}
    >
      <div
        onClick={onPrevClick}
        className="w-fit p-1.5 mr-2 border rounded-full border-transparent hover:border hover:rounded-full hover:bg-gray-100"
      >
        <AiOutlineLeft fontSize={20} />
      </div>
      <p className="mr-2">{`${months[month]} ${year}`}</p>

      <div
        onClick={onNextClick}
        className="w-fit p-1.5 mr-2 border rounded-full border-transparent hover:border hover:rounded-full hover:bg-gray-100"
      >
        <AiOutlineRight fontSize={20} />
      </div>
    </div>
  );
}

export default MonthPicker;

MonthPicker.propTypes = {
  className: PropTypes.string,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
};
