import { getVideos, deleteVideo } from '../../api/request';
import { useEffect, useState } from 'react';
import { showLoading, showError, showSuccess } from '../../components/messages';
import UpBar from '../../components/upbar';

export default function ListVideos({ setSwitchPanel, setEdit, setId }) {
  const [videos, setVideos] = useState([]);
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
      videos.filter(c =>
        c[searchFilter].toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  };

  const init = () => {
    getVideos().then(data => {
      if (data !== undefined) {
        setLoading(false);
        if (data.error) {
        } else {
          const { success, error, message, result } = data;
          if (error) {
            return setError(message);
          }
          if (success) {
            const filterResult = result.filter(r => r.status !== 'deleted');
            setVideos(filterResult);
            setFilterResult(filterResult);
          }
        }
      }
    });
  };

  useEffect(() => {
    init();
  }, [success]);

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
    setLoading(true);
    setError(false);
    setSuccess(false);
    const { id } = event.target;
    deleteVideo(id).then(data => {
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

  const STRING_LIMIT = 200;
  const filterType = [{ name: 'Title', value: 'title' }];

  return (
    <>
      <div className='mt-5'>
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
          <section className='pt-2 w-100' style={{ backgroundColor: '#eee' }}>
            <div className='row justify-content-center'>
              {filterResult.map((v, index) => (
                <div
                  className='card my-w-100 w-75 mt-5 pt-4 mb-5 pb-4 px-5'
                  key={index}
                >
                  <div className=''>
                    <h3 className='pb-2'>{v.title}</h3>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoUrl}`}
                      title='Video'
                      className='w-100 my-h-200'
                      style={{ height: '400px' }}
                    ></iframe>
                    <p className='pt-4 w-100'>
                      {v.content.length > 100
                        ? v.content.slice(0, STRING_LIMIT) + '...'
                        : v.content}
                    </p>
                    <div>
                      <button
                        onClick={handleClick}
                        className='btn btn-primary btn-sm mx-2'
                        type='button'
                        id={v.id}
                      >
                        Details
                      </button>
                      <button
                        onClick={handleEditClick}
                        className='btn btn-outline-primary btn-sm mt-2 mx-2'
                        type='button'
                        id={v.id}
                      >
                        Update
                      </button>
                      <button
                        onClick={handleDeleteClick}
                        className='btn btn-danger btn-sm mt-2 mx-2'
                        type='button'
                        id={v.id}
                      >
                        Delete
                      </button>
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
