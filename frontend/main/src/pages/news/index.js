import React from 'react'
import { getNews } from '../../api/request';
import { useEffect, useState } from 'react';
import { api } from '../../config';
import { showLoading } from '../../components/messages'

const News = ({ setId }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [search, setSearch] = useState('');
  const [searchFilter, setSearchFilter] = useState('none');
  const [filterResult, setFilterResult] = useState([]);
  const [expandedVideos, setExpandedVideos] = useState({});


  const init = () => {
    getNews().then(data => {
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
            setNews(result)
          }
        }
      }
    });
  };

  useEffect(() => {
    init();
  }, []);
  const handleClick = event => {
    const { id } = event.target;

    setId(id);
  };

  const toggleExpand = (videoId) => {
    setExpandedVideos((prevState) => ({
      ...prevState,
      [videoId]: !prevState[videoId],
    }));
  };

  const STRING_LIMIT = 200;
  const renderNews = (news) => {
    return news.map((NewsItem, index) =>
      <div className="card" key={index}>
        <img src={`${api}/${NewsItem.imageUrl}`}
          alt='News' />
        <div className="card-body">
          <h1 className="card-title text-dark flex">{NewsItem.title}</h1>
          <p className='mt-2 w-100'>
            {expandedVideos[NewsItem.id] || NewsItem.content.length <= STRING_LIMIT
              ? NewsItem.content
              : NewsItem.content.slice(0, STRING_LIMIT) + '...'}
          </p>
          <div>
            <button
              className='btn btn-primary btn-sm'
              type='button'
              onClick={() => toggleExpand(NewsItem.id)}
            >
              {expandedVideos[NewsItem.id] ? 'Collapse' : 'Details'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-column align-items-center w-100'>
      {showLoading(loading)}
      <div className='video-title'>
        <h1 className='text-dark fw-medium flex mt-1 mb-1'>News</h1>
        <p className='text-info'>
          {news.length}{' '}
          {'News'}
        </p>
      </div>
      {!loading && renderNews(news)}
    </div>
  );
}

export default News