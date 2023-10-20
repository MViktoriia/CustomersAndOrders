import PropTypes from 'prop-types';
import { IoBagHandle } from 'react-icons/io5';

function DashboardStatsGrid({
  totalSales,
  changeInSales,
  totalExpenses,
  changeInExpenses,
  totalCustomers,
  changeInCustomers,
  totalOrders,
  changeInOrders,
}) {
  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <p className="text-sm text-gray-500 font-light">Total sales</p>
          <div className="flex items-center">
            <p className="text-xl text-gray-700 font-semibold ">{totalSales}</p>
            {changeInSales >= 0 ? (
              <p className="text-sm text-green-500 pl-2">+{changeInSales}</p>
            ) : (
              <p className="text-sm text-red-500 pl-2">{changeInSales}</p>
            )}
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <p className="text-sm text-gray-500 font-light">Total expenses</p>
          <div className="flex items-center">
            <p className="text-xl text-gray-700 font-semibold ">
              {totalExpenses ?? 0}
            </p>
            {changeInExpenses >= 0 ? (
              <p className="text-sm text-green-500 pl-2">+{changeInExpenses}</p>
            ) : (
              <p className="text-sm text-red-500 pl-2">{changeInExpenses}</p>
            )}
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <p className="text-sm text-gray-500 font-light">Total customers</p>
          <div className="flex items-center">
            <p className="text-xl text-gray-700 font-semibold ">
              {totalCustomers ?? 0}
            </p>
            {changeInCustomers >= 0 ? (
              <p className="text-sm text-green-500 pl-2">
                +{changeInCustomers}
              </p>
            ) : (
              <p className="text-sm text-red-500 pl-2">{changeInCustomers}</p>
            )}
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <p className="text-sm text-gray-500 font-light">Total orders</p>
          <div className="flex items-center">
            <p className="text-xl text-gray-700 font-semibold ">
              {totalOrders ?? 0}
            </p>
            {changeInOrders >= 0 ? (
              <p className="text-sm text-green-500 pl-2">+{changeInOrders}</p>
            ) : (
              <p className="text-sm text-red-500 pl-2">{changeInOrders}</p>
            )}
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default DashboardStatsGrid;

DashboardStatsGrid.propTypes = {
  totalSales: PropTypes.number.isRequired,
  changeInSales: PropTypes.number.isRequired,
  totalExpenses: PropTypes.number,
  changeInExpenses: PropTypes.number,
  totalCustomers: PropTypes.number,
  changeInCustomers: PropTypes.number,
  totalOrders: PropTypes.number,
  changeInOrders: PropTypes.number,
};

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
