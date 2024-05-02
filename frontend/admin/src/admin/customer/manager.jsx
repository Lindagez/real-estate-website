import { useState, useEffect } from 'react';
import { getCustomers, updateCustomer } from '../../api/request';
import {
  showError,
  showLoading,
  showSuccess,
  showWarning,
} from '../../components/messages';

export default function Manager({ edit, id, setSwitchPanel }) {
  const [userData, setUserData] = useState('');
  const [values, setState] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);
  const [warning, setWarning] = useState(false);
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const init = () => {
    setSuccess(false);
    setError(false);
    setWarning(false);
    setLoading(true);
    getCustomers('id', id).then(data => {
      if (data !== undefined) {
        setLoading(false);
        if (data.error) {
          return setError('Something went wrong!');
        } else {
          const { success, error, message, result } = data;
          if (error) {
            return setError(message);
          }
          if (success) {
            setState(result[0]);
            setUserData(result[0]);
          }
        }
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const getChangedValues = () => {
    const changedValues = {};
    for (const key in values) {
      if (userData.hasOwnProperty(key) && userData[key] !== values[key]) {
        changedValues[key] = values[key];
      }
    }
    changedValues.createdAt && delete changedValues.createdAt;
    changedValues.updatedAt && delete changedValues.updatedAt;
    const { oldPassword, newPassword, confirmPassword } = password;
    if (oldPassword !== '') {
      if (newPassword !== '') {
        if (newPassword !== confirmPassword) {
          setError("Password don't match");
          return 'error';
        } else {
          changedValues.oldPassword = oldPassword;
          changedValues.newPassword = newPassword;
        }
      }
    }
    return { ...changedValues, id: values.id };
  };

  const onSave = () => {
    if (edit === 'false') {
      return;
    }

    setSuccess(false);
    setWarning(false);
    setLoading(true);
    const changedValues = getChangedValues();
    const isEmpty = Object.keys(changedValues).length === 1;

    if (changedValues !== 'error') {
      if (isEmpty) {
        setTimeout(() => {
          setLoading(false);
        }, 200);
        return setWarning('No Change');
      }

      !error &&
        updateCustomer(changedValues).then(data => {
          setLoading(false);
          if (data.error) {
            return setError(data.message);
          } else {
            const { error, success, message } = data;
            if (error) {
              return setError(message);
            }
            if (success) {
              return setSuccess(message);
            }
          }
        });
      setUserData(values);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  };

  const handleChange = event => {
    setSuccess(false);
    setError(false);
    setLoading(false);
    setWarning(false);
    event.preventDefault();
    const { name, value } = event.target;
    if (name.toLocaleLowerCase().includes('password')) {
      return setPassword({
        ...password,
        [name]: value,
      });
    }
    setState({
      ...values,
      [name]: value,
    });
  };

  const notEditable = () => {};

  const LabeledInput = props => (
    <>
      {edit === 'true' && (
        <div className='col-xxl-4 col-lg-6 col-sm-12  mb-4'>
          <div className='form-control pb-4'>
            <label htmlFor={props.label} className='form-label'>
              {props.label}
            </label>
            <input
              type={props.type}
              value={props.value}
              name={props.name}
              className='form-control'
              onChange={edit === 'true' ? handleChange : notEditable}
            />
          </div>
        </div>
      )}
      {edit === 'false' && (
        <div className='col-xxl-4 col-lg-6 col-sm-12  mb-4'>
          <div className='form-control pb-4'>
            <label htmlFor={props.label} className='form-label'>
              {props.label}
            </label>
            <div className='form-control'>{props.value}</div>
          </div>
        </div>
      )}
    </>
  );

  const CustomerSection = props => (
    <div className=''>
      <h3 className='note note-light mb-3'>{props.name}</h3>
      <div className='row'>{props.labels}</div>
    </div>
  );

  const Customer = () => (
    <div className=''>
      {CustomerSection({
        name: 'Customer Information',
        labels: (
          <>
            {LabeledInput({
              label: 'First Name',
              type: 'text',
              value: values.firstName,
              name: 'firstName',
            })}
            {LabeledInput({
              label: 'Last Name',
              type: 'text',
              value: values.lastName,
              name: 'lastName',
            })}
            {LabeledInput({
              label: 'Email',
              type: 'email',
              value: values.email,
              name: 'email',
            })}
            {LabeledInput({
              label: 'Phone',
              type: 'text',
              value: values.phone,
              name: 'phone',
            })}
            {LabeledInput({
              label: 'Second Phone',
              type: 'text',
              value: values.phone2,
              name: 'phone2',
            })}
          </>
        ),
      })}

      {CustomerSection({
        name: 'Address Information',
        labels: (
          <>
            {LabeledInput({
              label: 'Country',
              type: 'text',
              value: values.country,
              name: 'country',
            })}
            {LabeledInput({
              label: 'State/Province/Region',
              type: 'text',
              value: values.state,
              name: 'state',
            })}
            {LabeledInput({
              label: 'City',
              type: 'text',
              value: values.city,
              name: 'city',
            })}
            {LabeledInput({
              label: 'Zip Code',
              type: 'text',
              value: values.zipCode,
              name: 'zipCode',
            })}
            {LabeledInput({
              label: 'Street',
              type: 'text',
              value: values.street,
              name: 'street',
            })}
          </>
        ),
      })}

      {edit === 'true' &&
        CustomerSection({
          name: 'Security',
          labels: (
            <>
              {LabeledInput({
                label: 'Old Password',
                type: 'password',
                value: password.oldPassword,
                name: 'oldPassword',
              })}
              {LabeledInput({
                label: 'New Password',
                type: 'password',
                value: password.newPassword,
                name: 'newPassword',
              })}
              {LabeledInput({
                label: 'Confirm Password',
                type: 'password',
                value: password.confirmPassword,
                name: 'confirmPassword',
              })}
            </>
          ),
        })}

      {CustomerSection({
        name: 'Status',
        labels: (
          <>
            {LabeledInput({
              label: 'Status',
              type: 'text',
              value: values.status,
              name: 'status',
            })}
            {LabeledInput({
              label: 'Verification',
              type: 'text',
              value: values.isVerified,
              name: 'isVerified',
            })}
          </>
        ),
      })}
      <div className='d-flex justify-content-between mt-5 mb-5'>
        <div>
          <button
            onClick={() => setSwitchPanel('customers')}
            className='btn btn-warning'
          >
            Back
          </button>
        </div>
        <div>
          {edit === 'true' && (
            <button className='btn btn-primary' onClick={onSave}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className='w-100'>
        <div className='w-100'>
          {showError(error)}
          {showSuccess(success)}
          {showWarning(warning)}
        </div>
        <div className='position-absolute top-50 start-50 translate-middle'>
          {showLoading(loading)}
          {loading && (
            <button
              onClick={() => setSwitchPanel('customers')}
              className='btn btn-warning mt-5'
            >
              Back
            </button>
          )}
        </div>
        {loading === false && Customer()}
      </div>
    </>
  );
}
