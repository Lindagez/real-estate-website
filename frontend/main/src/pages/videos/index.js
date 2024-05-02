import React, { useState, useEffect } from 'react';
import "./index.css"
import { getVideos } from '../../api/request';
import { showLoading } from '../../components/messages'

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expandedVideos, setExpandedVideos] = useState({});

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
            return setVideos(result);
          }
        }
      }
    });
  };
  useEffect(() => {
    init();
  }, []);

  const STRING_LIMIT = 200;

  const toggleExpand = (videoId) => {
    setExpandedVideos((prevState) => ({
      ...prevState,
      [videoId]: !prevState[videoId],
    }));
  };

  return (
    <>
      <div className=''>
        {showLoading(loading)}
        <section className='pt-2 w-100' style={{ backgroundColor: '#eee' }}>
          <div className='row justify-content-center'>
            <div className='video-title'>
              <h1 className='text-dark fw-medium flex mt-1 mb-1'>Videos</h1>
              <p className='text-info'>
                {videos.length}{' '}
                {videos.length < 2 ? 'Video' : 'Videos'}
              </p>
            </div>
            {videos.map((v, index) => (
              <div className={'card'} key={index}>
                <div className=''>
                  <h3 className='pb-2'>{v.title}</h3>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.videoUrl}`}
                    title='Video'
                    className='w-100 my-h-200'
                    style={{ height: '400px' }}
                    allowFullScreen
                  ></iframe>
                  <p className='mt-2 px-3 w-100'>
                    {expandedVideos[v.id] || v.content.length <= STRING_LIMIT
                      ? v.content
                      : v.content.slice(0, STRING_LIMIT) + '...'}
                  </p>
                  <div>
                    <button
                      className='btn btn-primary btn-sm mx-2'
                      type='button'
                      onClick={() => toggleExpand(v.id)}
                    >
                      {expandedVideos[v.id] ? 'Collapse' : 'Details'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Videos;

