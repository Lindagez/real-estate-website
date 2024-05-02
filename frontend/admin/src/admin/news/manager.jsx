import { useState, useEffect } from "react";
import { addNewsImage, getNewsById, updateNews } from '../../api/request';
import {
  showError,
  showLoading,
  showSuccess,
  showWarning,
} from '../../components/messages';

export default function ManageProperty({ edit, id, setSwitchPanel }) {
  const [newsData, setNewsData] = useState('');
  const [values, setState] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);
  const [warning, setWarning] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const init = () => {
    setSuccess(false);
    setError(false);
    setWarning(false);
    setLoading(true)
    getNewsById(id)
      .then(data => {
        if (data !== undefined) {
          setLoading(false);
          if (data.error) {
            return setError('Something went wrong!')
          } else {
            const { success, error, message, result } = data;
            if (error) {
              return setError(message);
            }
            if (success) {
              setState(result);
              setNewsData(result);
            }
          }
        }
      });
  }

  useEffect(() => {
    init();
  }, []);

  const getChangedValues = () => {
    const changedValues = {};
    for (const key in values) {
      if (newsData.hasOwnProperty(key) && newsData[key] !== values[key]) {
        changedValues[key] = values[key];
      }
    }
    changedValues.createdAt && delete changedValues.createdAt
    changedValues.updatedAt && delete changedValues.updatedAt
    return { ...changedValues, id: values.id };
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      setSuccess(false);
      setError(false);
      setWarning(false);
      addNewsImage(id, formData)
      .then(data => {
        setLoading(false);
        const {error, success, message} = data;
        if (error) {
          setError(message);
        }
        if (success) {
          setSuccess(message);
          setSelectedFile(null);
        }
      })
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
    setLoading(true)
    const changedValues = getChangedValues();
    const isEmpty = Object.keys(changedValues).length === 1;

    if (isEmpty) {
      setTimeout(() => {
        setLoading(false);
      }, 200);
      return setWarning('No Change');
    }

    updateNews(changedValues)
      .then(data => {
        setLoading(false);
        if (data.error) {
          return setError(data.message)
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
    setNewsData(values);
  }

  const handleChange = (event) => {
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
  }

  const notEditable = () => { }

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
    <div className=''>
      <div>{props.name}</div>
      <div className=''>
        <div className='row'>{props.labels}</div>
      </div>
    </div>
  );

  const News = () => (
    <div className=''>
      {Section({
        name: 'News Information',
        labels: (
          <>
            {LabeledInput({
              label: 'Title',
              type: 'text',
              value: values.title,
              name: 'title',
            })}
            {LabeledTextArea({
              label: 'Content',
              type: 'text',
              value: values.content,
              name: 'content',
            })}
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
 
      {Section({
        name: 'Add News Image',
        labels: (
          <>
            <form onSubmit={handleFormSubmit}>
              <input type='file' name='image' onChange={handleFileChange} />
              <button type='submit' className='btn btn-primary'>
                Add Image
              </button>
            </form>
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
      <div className='w100'>
        <div className='c-a f-c w100'>
          <div className='w100'>
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
        </div>
        {values !== '' && loading === false && News()}
      </div>
    </>
  );
}
