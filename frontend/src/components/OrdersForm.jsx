import PropTypes from 'prop-types';
import { useState } from 'react';
import AddButton from './AddButton';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../lib/consts/productCategories';
import SecondaryButton from './SecondaryButton';
import { addOrder, editOrder } from '../redux/orders/ordersOperations';
import { getCustomers } from '../redux/customers/customersSelectors';

function OrderForm({
  id,
  date,
  productName,
  customer,
  hours,
  sum,
  comment,
  workStatus,
  paymentStatus,
  setIsModalOpen,
  isEdit,
}) {
  const customersData = useSelector(getCustomers);
  const disputch = useDispatch();
  const [formData, setFormData] = useState({
    date,
    productName,
    customer,
    hours,
    sum,
    comment,
    workStatus,
    paymentStatus,
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleCancelClick = event => {
    event.preventDefault();

    setIsModalOpen(false);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (isEdit) {
      const editedOrder = {
        _id: id,
        ...formData,
      };
      disputch(editOrder(editedOrder));
      setIsModalOpen(false);
      return;
    }
    const newOrder = { ...formData };
    console.log(newOrder);
    disputch(addOrder(newOrder));

    setIsModalOpen(false);
  };

  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <p className="mb-6 text-center text-gray-700 font-medium">New order</p>
      <form id="orderForm">
        <div className="relative mb-6">
          <input
            type="date"
            id="orderDate"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="orderDate"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Date of order
          </label>
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="productName"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Category
          </label>
          <select
            id="productName"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          >
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="customer"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Customer
          </label>
          <select
            id="customer"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
          >
            {customersData.map(customerItem => (
              <option key={customerItem._id} value={customerItem._id}>
                {customerItem.name}
              </option>
            ))}
          </select>
        </div>
        <div className="relative mb-6">
          <input
            type="number"
            id="hours"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            min={0}
            step={0.5}
          />
          <label
            htmlFor="hours"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Hours
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="number"
            id="sum"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="sum"
            value={formData.sum}
            onChange={handleChange}
            min={0}
          />
          <label
            htmlFor="sum"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Sum
          </label>
        </div>
        <div className="relative mb-6">
          <label
            htmlFor="comment"
            className="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          <textarea
            id="comment"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Additional information about order..."
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="workStatus"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Work status
          </label>
          <select
            id="workStatus"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            name="workStatus"
            value={formData.workStatus}
            onChange={handleChange}
          >
            <option value="booked">Booked</option>
            <option value="done">Done</option>
            <option value="inProgress">In Progress</option>
          </select>
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="paymentStatus"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Payment status
          </label>
          <select
            id="paymentStatus"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            name="paymentStatus"
            value={formData.paymentStatus}
            onChange={handleChange}
          >
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>
        </div>

        <div className="flex ">
          <AddButton
            className="mr-4 flex-1"
            type="submit"
            onClick={onFormSubmit}
          >
            Save
          </AddButton>
          <SecondaryButton
            className="flex-1"
            type="submit"
            onClick={handleCancelClick}
          >
            Cancel
          </SecondaryButton>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;

OrderForm.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  sum: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  workStatus: PropTypes.string.isRequired,
  paymentStatus: PropTypes.string.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
};
