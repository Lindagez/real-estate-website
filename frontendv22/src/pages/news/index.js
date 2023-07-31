import React, { useEffect, useState } from 'react';
import { getNews } from '../../api/request';
import { api } from '../../config';
import './news.css';

const News = ({ setId, lines, text }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [search, setSearch] = useState('');
  const [searchFilter, setSearchFilter] = useState('none');
  const [filterResult, setFilterResult] = useState([]);
  const [showMore, setShowMore] = useState(false);
  
  const lineHeight = 20; // set your desired line height in pixels

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const truncatedText = (
    <div style={{ maxHeight: showMore ? 'none' : lineHeight * lines }}>
      {text}
    </div>
  );

  const showMoreButton = (
    <button onClick={toggleShowMore}>Show More</button>
  );

  const showLessButton = (
    <button onClick={toggleShowMore}>Show Less</button>
  );

  const init = () => {
    getNews().then((data) => {
      if (data !== undefined) {
        setLoading(false);
        if (data.error) {
          return setError('Something went wrong!');
        } else {
          const { success, error, message, result } = data;
          setNews(result);
          if (error) {
            return setError(message);
          }
        }
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleClick = (event) => {
    const { id } = event.target;

    setId(id);
  };

  const STRING_LIMIT = 200;

  const renderNewsContent = (content) => {
    if (content.length > STRING_LIMIT) {
      return (
        <>
          <div
            className="card-text truncated-text"
            style={{ maxHeight: showMore ? 'none' : lineHeight * lines }}
          >
            {content.slice(0, STRING_LIMIT)}
          </div>
          {showMore && (
            <div className="card-text">{content.slice(STRING_LIMIT)}</div>
          )}
          <div className="show-more-less">
            {showMore ? showLessButton : showMoreButton}
          </div>
        </>
      );
    } else {
      return <div className="card-text">{content}</div>;
    }
  };

  const renderNews = (news) => {
    return news.map((NewsItem, index) => {
      return (
        <section>
          <div>
            <div className="card  m1 mb-3">
              <img
                src={`${api}/${NewsItem.imageUrl}`}
                className=""
                alt="News"
              />
              <div className="card-body">
                <h5 className="card-title">{NewsItem.title}</h5>
                <div className="mt-1 mb-0 text-muted small"></div>
                <div className="mb-2 text-muted small"></div>
                <h6>content</h6>
                {renderNewsContent(NewsItem.content)}
              </div>
            </div>
          </div>
        </section>
      );
    });
  };

  return (
    <div className="li-45">
      <h1> News Page </h1>
      {renderNews(news)}
    </div>
  );
};

export default News;