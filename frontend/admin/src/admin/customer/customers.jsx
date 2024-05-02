import { getCustomers, deleteCustomer } from '../../api/request';
import { useEffect, useState } from 'react';
import { showLoading, showError, showSuccess } from '../../components/messages';
import UpBar from '../../components/upbar';

export default function Customers({ setSwitchPanel, setEdit, setId }) {
  const [customers, setCustomers] = useState([]);
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
      customers.filter(c =>
        c[searchFilter].toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  };

  const init = () => {
    getCustomers('role', '1').then(data => {
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
            const resultFiltered = result.filter(r => r.status !== 'deleted');
            setCustomers(resultFiltered);
            setFilterResult(resultFiltered);
          }
        }
      }
    });
  };

  useEffect(() => {
    init();
    searchControl();
  }, [success, error]);

  useEffect(() => {
    setTimeout(() => {
      searchControl();
    }, 300);
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
    if (window.confirm('Are you sure you want to delete this user?')) {
      setLoading(true);
      setError(false);
      setSuccess(false);
      const { id } = event.target;
      deleteCustomer({ id }).then(data => {
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
    }
  };

  const ActionButton = ({ id, icon, clickFunc, color }) => (
    <button onClick={clickFunc} id={id} className='mx-1 px-3 btn'>
      <i id={id} className={`fa-solid fa-${icon}`} style={{ color }}></i>
    </button>
  );

  const filterType = [
    { name: 'Email', value: 'email' },
    { name: 'First Name', value: 'firstName' },
    { name: 'Country', value: 'country' },
    { name: 'City', value: 'city' },
    { name: 'Status', value: 'status' },
  ];
  return (
    <>
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
        <div className='card'>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-hover text-nowrap'>
                <thead className='bg-light'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterResult.map((c, index) => (
                    <tr key={index}>
                      <td>
                        <div>
                          {c.profileImageUrl !== 'n/a' && (
                            <img
                              src={c.profileImageUrl}
                              alt=''
                              style={{ width: '45px', height: '45px' }}
                              className='rounded-circle'
                            />
                          )}
                          <p>{`${c.firstName + ' ' + c.lastName}`}</p>
                        </div>
                      </td>
                      <td>{c.email}</td>
                      <td>{c.status}</td>
                      <td className=''>
                        <div>
                          <ActionButton
                            id={c.id}
                            icon='circle-info'
                            clickFunc={handleClick}
                            color={'#d69129'}
                          />
                          <ActionButton
                            id={c.id}
                            icon='wrench'
                            clickFunc={handleEditClick}
                          />
                          <ActionButton
                            id={c.id}
                            icon='trash'
                            clickFunc={handleDeleteClick}
                            color={'#b30000'}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
