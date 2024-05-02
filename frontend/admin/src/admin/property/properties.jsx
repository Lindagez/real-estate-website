import { getProperties, deleteProperty } from '../../api/request';
import { useEffect, useState } from 'react';
import { showLoading, showError, showSuccess } from '../../components/messages';
import { api } from '../../config';
import UpBar from '../../components/upbar';

export default function Properties({ setSwitchPanel, setEdit, setId }) {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [search, setSearch] = useState('');
  const [searchFilter, setSearchFilter] = useState('none');
  const [filterResult, setFilterResult] = useState([]);

  const searchControl = () => {
    if (searchFilter === 'none') {
      return;
    }
    setFilterResult(
      properties.filter(c =>
        c[searchFilter].toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  };

  const init = () => {
    getProperties().then(data => {
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
            const filterResult = result.filter(r => r.status !== 'deleted');
            setProperties(filterResult);
            setFilterResult(filterResult);
          }
        }
      }
    });
  };

  useEffect(() => {
    init();
  }, [success, error]);

  useEffect(() => {
    searchControl();
  }, [search]);

  const handleClick = event => {
    const { id } = event.target;
    setSwitchPanel('manager');
    setEdit('false');
    setId(id);
  };

  const handleEditClick = event => {
    const { id } = event.target;
    setSwitchPanel('manager');
    setEdit('true');
    setId(id);
  };

  const handleDeleteClick = event => {
    setLoading(true);
    setError(false);
    setSuccess(false);
    const { id } = event.target;
    deleteProperty(id).then(data => {
      setLoading(false);
      if (data !== undefined) {
        if (data.error) {
          return setError('Something went wrong!');
        } else {
          const { success, error, message } = data;
          if (error) {
            return setError(message);
          }
          if (success) {
            setSuccess(message);
          }
        }
      }
    });
  };

  const STRING_LIMIT = 150;
  const filterType = [
    { name: 'Name', value: 'name' },
    { name: 'Type', value: 'type' },
    { name: 'Price', value: 'price' },
  ];

  return (
    <>
      <div className='mt-3'>
        <UpBar
          setSwitchPanel={setSwitchPanel}
          search={search}
          setSearch={setSearch}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          filterType={filterType}
        />
        {showError(error)}
        <div className='position-absolute top-50 start-50 translate-middle'>
          {showLoading(loading)}
        </div>
        {showSuccess(success)}
        {loading === false && (
          <section style={{ backgroundColor: '#eee' }}>
            <div className='py-5'>
              {filterResult.map((p, index) => (
                <div className='row justify-content-center mb-3' key={index}>
                  <div className='col-md-12 col-xl-10'>
                    <div className='card shadow-0 border rounded-3'>
                      <div className='card-body'>
                        <div className='row' key={index}>
                          <div className='col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0'>
                            <div className='bg-image hover-zoom ripple rounded ripple-surface'>
                              <img
                                src={
                                  p.images[0] &&
                                  `${api}/${p.images[0].imageUrl}`
                                }
                                className='w-100'
                                alt='Property'
                              />
                              <a href='#!'>
                                <div className='hover-overlay'>
                                  <div
                                    className='mask'
                                    style={{
                                      backgroundColor:
                                        'rgba(253, 253, 253, 0.15)',
                                    }}
                                  ></div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className='col-md-6 col-lg-6 col-xl-6'>
                            <h5>{p.name}</h5>
                            <div className='mt-1 mb-0 text-muted small'>
                              <span>{'Type: ' + p.type}</span>
                            </div>
                            <div className='mb-2 text-muted small'>
                              <span>{'Status: ' + p.status}</span>
                            </div>
                            <h6>Description</h6>
                            <p className='mb-4 mb-md-0 w100'>
                              {p.description.length > STRING_LIMIT
                                ? p.description.slice(0, STRING_LIMIT) + '...'
                                : p.description}
                            </p>
                          </div>
                          <div className='col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start'>
                            <div className='d-flex flex-row align-items-center mb-1'>
                              <h4 className='mb-1 me-1'>ETB {p.price}</h4>
                            </div>
                            <h6 className='text-info'>
                              Remaining {p.quantity}
                            </h6>
                            <div className='d-flex flex-column mt-4'>
                              <button
                                onClick={handleClick}
                                className='btn btn-primary btn-sm'
                                type='button'
                                id={p.id}
                              >
                                Details
                              </button>
                              <button
                                onClick={handleEditClick}
                                className='btn btn-outline-primary btn-sm mt-2'
                                type='button'
                                id={p.id}
                              >
                                Update
                              </button>
                              <button
                                onClick={handleDeleteClick}
                                className='btn btn-danger btn-sm mt-2'
                                type='button'
                                id={p.id}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
