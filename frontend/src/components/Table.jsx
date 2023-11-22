import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Table({ tableHeadData, title, children }) {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <h2 className="text-gray-700 font-medium">{title}</h2>
      <div className="mt-3 max-h-[65vh] overflow-scroll">
        <table className="w-full text-gray-700">
          <thead className="sticky top-0">
            <tr>
              {tableHeadData.map(item => (
                <th key={nanoid()}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

Table.propTypes = {
  tableHeadData: PropTypes.array.isRequired,
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
