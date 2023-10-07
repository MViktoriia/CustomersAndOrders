import { IoBagHandle } from 'react-icons/io5';
import PropTypes from 'prop-types';

function DashboardStatsGrid() {
  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <p className="text-sm text-gray-500 font-light">Total sale</p>
          <div className="flex items-center">
            <p className="text-xl text-gray-700 font-semibold ">12345$</p>
            <p className="text-sm text-green-500 pl-2">+546</p>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <p className="text-sm text-gray-500 font-light">Total sale</p>
          <div className="flex items-center">
            <p className="text-xl text-gray-700 font-semibold ">12345$</p>
            <p className="text-sm text-green-500 pl-2">+546</p>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <p className="text-sm text-gray-500 font-light">Total sale</p>
          <div className="flex items-center">
            <p className="text-xl text-gray-700 font-semibold ">12345$</p>
            <p className="text-sm text-green-500 pl-2">+546</p>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <p className="text-sm text-gray-500 font-light">Total sale</p>
          <div className="flex items-center">
            <p className="text-xl text-gray-700 font-semibold ">12345$</p>
            <p className="text-sm text-green-500 pl-2">+546</p>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default DashboardStatsGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}

BoxWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
