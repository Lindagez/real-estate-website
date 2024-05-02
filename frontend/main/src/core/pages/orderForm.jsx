import { useState } from 'react';
import {
  showError,
  showLoading,
  showSuccess,
  showWarning,
} from '../../components/messages';

import { registerUser } from '../../api/request';
import { getCart } from '../../utils/cartManager';

export default function OrderForm() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    passportNo: '',
    kebeleIdNo: '',
    houseNo: '',
    profilePhoto: '',
  });

  const InputField = params => (
    <div className='mb-3'>
      <label className='form-label' htmlFor={params.for || params.id}>
        {params.label}
      </label>
      <input
        type={params.type || 'text'}
        id={params.id}
        value={values[params.id]}
        className='form-control'
        onChange={handleChange}
      />
    </div>
  );

  const handleChange = event => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
  };

  const handleClick = event => {
    event.preventDefault();
    setLoading(true);
    values.propertyId = getCart();
    registerUser(values).then(data => {
      console.log(data);
    });
    // console.log(values);
  };

  return (
    <>
      {showError(error)}
      {showWarning(warning)}
      <div className='min-vh-100 mx-3 flex justify-center item-center'>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 w-100'>
          <form>
            {InputField({ id: 'passportNo', label: 'Passport No' })}
            {InputField({ id: 'kebeleIdNo', label: 'Kebele ID Number' })}
            {InputField({ id: 'houseNo', label: 'House Number' })}
            {InputField({
              id: 'profilePhoto',
              label: 'Your Photo',
              type: 'file',
            })}
            <button
              className='btn btn-primary w-100'
              style={{ marginLeft: '0px' }}
              onClick={handleClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
