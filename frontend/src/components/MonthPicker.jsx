import PropTypes from 'prop-types';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import classNames from 'classnames';
import { months } from '../lib/consts/months';

function MonthPicker({ className, month, year, onNextClick, onPrevClick }) {
  return (
    <div
      className={classNames(
        'flex justify-items-center items-center bg-white px-3 py-2 rounded-sm border border-gray-200 w-fit h-full',
        className
      )}
    >
      <div
        onClick={onPrevClick}
        className="w-fit p-1.5 mr-2 border rounded-full border-transparent hover:border hover:rounded-full hover:bg-gray-100"
      >
        <AiOutlineLeft fontSize={20} />
      </div>
      <p className="mr-2 w-36 flex justify-center">{`${months[month]} ${year}`}</p>

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
