import PropTypes from 'prop-types';
import { useState } from 'react';
import AddButton from './AddButton';
import { useDispatch } from 'react-redux';
import {
  editCustomer,
  removeCustomer,
} from '../redux/customers/customersSlice';
import SecondaryButton from './SecondaryButton';

function CustomerForm({ customerData, setIsModalOpen, isEdit }) {
  const disputch = useDispatch();
  const [formData, setFormData] = useState({
    name: customerData.name,
    birthday: customerData.birthday,
    source: customerData.source,
    email: customerData.email,
    phone: customerData.phone,
    website: customerData.website,
    country: customerData.country,
    info: customerData.info,
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleCancelClick = event => {
    event.preventDefault();
    if (!isEdit) {
      disputch(removeCustomer(customerData.id));
    }
    setIsModalOpen(false);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const editedCustomer = {
      id: customerData.id,
      ...formData,
    };
    console.log(editedCustomer);
    disputch(editCustomer(editedCustomer));
    setIsModalOpen(false);
  };

  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <p className="mb-6 text-center text-gray-700 font-medium">New customer</p>
      <form id="customerForm">
        <div className="relative mb-6">
          <input
            type="text"
            id="floatingFilledName"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label
            htmlFor="floatingFilledName"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Name
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="date"
            id="floatingFilledBirthday"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
          <label
            htmlFor="floatingFilledBirthday"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Date of birth
          </label>
        </div>
        <div className="relative mb-6">
          <label htmlFor="sources" className="sr-only">
            Source
          </label>
          <select
            id="sources"
            className="block rounded-t-lg py-2.5 px-2.5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            name="source"
            value={formData.source}
            onChange={handleChange}
          >
            <option value="instagram">Instagram</option>
            <option value="friends">Friends</option>
            <option value="website">Website</option>
          </select>
        </div>

        <div className="relative mb-6">
          <input
            type="email"
            id="floatingFilledEmail"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label
            htmlFor="floatingFilledEmail"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Email
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="phone"
            id="customerPhone"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label
            htmlFor="customerPhone"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Phone
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="url"
            id="customerWebsite"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          <label
            htmlFor="customerWebsite"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Website
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="text"
            id="customerCountry"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          <label
            htmlFor="customerCountry"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Country
          </label>
        </div>
        <div className="relative mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Additional information about customer..."
            name="info"
            value={formData.info}
            onChange={handleChange}
          ></textarea>
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

export default CustomerForm;

CustomerForm.propTypes = {
  customerData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }),
  setIsModalOpen: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
};
