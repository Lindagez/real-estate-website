import { useState, useEffect } from 'react';
import {
  getPropertyById,
  updateProperty,
  addPropertyImage,
  deletePropertyImage,
} from '../../api/request';
import {
  showError,
  showLoading,
  showSuccess,
  showWarning,
} from '../../components/messages';
import { api } from '../../config';

export default function ManageProperty({ edit, id, setSwitchPanel }) {
  const [propertyData, setPropertyData] = useState('');
  const [values, setState] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);
  const [warning, setWarning] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageDescription, setImageDescription] = useState(null);

  const init = () => {
    setWarning(false);
    setLoading(true);
    getPropertyById(id).then(data => {
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
            setState(result);
            setPropertyData(result);
          }
        }
      }
    });
  };

  useEffect(() => {
    init();
  }, [success, error]);

  const getChangedValues = () => {
    const changedValues = {};
    for (const key in values) {
      if (
        propertyData.hasOwnProperty(key) &&
        propertyData[key] !== values[key]
      ) {
        changedValues[key] = values[key];
      }
    }
    changedValues.createdAt && delete changedValues.createdAt;
    changedValues.updatedAt && delete changedValues.updatedAt;
    return { ...changedValues, id: values.id };
  };

  const handleImageRemove = event => {
    setSuccess(false);
    setError(false);
    setLoading(true);
    const imageId = event.target.id;
    deletePropertyImage(imageId).then(data => {
      setLoading(false);
      const { error, success, errors, message } = data;
      if (errors) {
        setError(errors[0]);
        return;
      }
      if (error) {
        setError(message);
        return;
      }
      if (success) {
        setSuccess(message);
        return;
      }
    });
  };

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDescription = event => {
    setImageDescription(event.target.value);
  };

  const handleFormSubmit = event => {
    setLoading(true);
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('propertyId', id);
      formData.append('description', imageDescription);
      setSuccess(false);
      setError(false);
      setWarning(false);
      addPropertyImage(formData).then(data => {
        setLoading(false);
        const { error, success, message } = data;
        if (error) {
          setError(message);
        }
        if (success) {
          setSuccess(message);
          setSelectedFile(null);
        }
      });
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 200);
      return setWarning('Please select image first');
    }
  };

  const onSave = () => {
    if (edit === 'false') {
      return;
    }
    setSuccess(false);
    setError(false);
    setWarning(false);
    setLoading(true);
    const changedValues = getChangedValues();
    const isEmpty = Object.keys(changedValues).length === 1;

    if (isEmpty) {
      setTimeout(() => {
        setLoading(false);
      }, 200);
      return setWarning('No Change');
    }

    updateProperty(changedValues).then(data => {
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
    setPropertyData(values);
  };

  const handleChange = event => {
    setSuccess(false);
    setError(false);
    setLoading(false);
    setWarning(false);
    event.preventDefault();
    const { name, value } = event.target;
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

  const LabeledTextArea = props => (
    <>
      {edit === 'true' && (
        <div className='w-100 mb-4'>
          <div className='form-control pb-4'>
            <label htmlFor={props.label} className='form-label'>
              {props.label}
            </label>
            <textarea
              type={props.type}
              value={props.value}
              name={props.name}
              className='form-control'
              onChange={edit === 'true' ? handleChange : notEditable}
              style={{ height: '200px' }}
            />
          </div>
        </div>
      )}
      {edit === 'false' && (
        <div className='w-100 mb-4'>
          <div className='form-control pb-4'>
            <label htmlFor={props.label} className='form-label'>
              {props.label}
            </label>
            <div className='form-control' style={{ height: '200px' }}>
              {props.value}
            </div>
          </div>
        </div>
      )}
    </>
  );

  const Section = props => (
    <div className='mb-2'>
      <div>{props.name}</div>
      <div className='i-b'>
        <div className='row'>{props.labels}</div>
      </div>
    </div>
  );

  const Property = () => (
    <div className=''>
      {Section({
        name: 'Property Information',
        labels: (
          <>
            {LabeledInput({
              label: 'Name',
              type: 'text',
              value: values.name,
              name: 'name',
            })}
            {LabeledInput({
              label: 'Price',
              type: 'text',
              value: values.price,
              name: 'price',
            })}
            {LabeledInput({
              label: 'Quantity',
              type: 'text',
              value: values.quantity,
              name: 'quantity',
            })}
            {LabeledInput({
              label: 'Type',
              type: 'text',
              value: values.type,
              name: 'type',
            })}
          </>
        ),
      })}

      {Section({
        name: 'About Property',
        labels: (
          <>
            {LabeledTextArea({
              label: 'Description',
              type: 'text',
              value: values.description,
              name: 'description',
            })}
          </>
        ),
      })}

      {Section({
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
            {LabeledInput({
              label: 'Map Location',
              type: 'text',
              value: values.location,
              name: 'location',
            })}
          </>
        ),
      })}

      {Section({
        name: 'Add News Image',
        labels: (
          <>
            <form onSubmit={handleFormSubmit} className='form-control mx-2'>
              <label htmlFor='image' className='form-label'>
                Select Image
              </label>
              <input
                className='form-control mb-3'
                type='file'
                name='image'
                onChange={handleFileChange}
              />
              <label htmlFor='description' className='form-label'>
                Image Description
              </label>
              <input
                className='form-control mb-3'
                type='text'
                name='description'
                onChange={handleDescription}
              />
              <button type='submit' className='btn btn-primary mb-3'>
                Add Image
              </button>
            </form>
          </>
        ),
      })}

      {Section({
        name: 'Property Images',
        labels: (
          <>
            {propertyData !== '' && (
              <div className='row'>
                {propertyData.images.map((img, index) => (
                  <div key={index} className='col-xxl-4 col-lg-6 col-sm-12'>
                    <p>{img.description}</p>
                    <img
                      className='mb-2'
                      src={`${api}/${img.imageUrl}`}
                      width={'100%'}
                    />
                    <button
                      id={img.id}
                      className='btn btn-danger'
                      onClick={handleImageRemove}
                    >
                      Remove Image
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        ),
      })}

      {Section({
        name: 'Status',
        labels: (
          <>
            {LabeledInput({
              label: 'Status',
              type: 'text',
              value: values.status,
              name: 'status',
            })}
          </>
        ),
      })}
      <div className='d-flex justify-content-between mt-5 mb-5'>
        <div>
          <button
            onClick={() => setSwitchPanel('main')}
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
              onClick={() => setSwitchPanel('main')}
              className='btn btn-warning mt-5'
            >
              Back
            </button>
          )}
        </div>
        {loading === false && Property()}
      </div>
    </>
  );
}
