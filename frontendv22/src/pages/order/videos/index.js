import React, { useState,useEffect } from 'react';
// import { MDBContainer } from 'mdb-react-ui-kit';
// import axios from 'axios';
import "./index.css"
import { getVideos } from '../../../api/request';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [description, setDescription] = useState('');
  
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [search, setSearch] = useState('');
  const [searchFilter, setSearchFilter] = useState('none');
  const [filterResult, setFilterResult] = useState([]);
  // const handleVideoUrlChange = (event) => {
  //   setVideoUrl(event.target.value);
  // };
  // const handleDescriptionChange = (event) => {
  //   setDescription(event.target.value);
  // };

  const init = () => {
    getVideos().then(data => {
      if (data !== undefined) {
        setLoading(false);
        if (data.error) {
        } else {
          const { success, error, message, result } = data;
          setVideos(result)
          if (error) {
            return setError(message);
          }
       
        }
      }
    });
  };
  useEffect(() => {
   init();
   console.log(videos);
  }, []);

  const STRING_LIMIT = 200;
  const renderVideos = (videos) => {
    return videos.map((v, index) => {
  return (
    <>
    <section>
    <div className='f  '>
   
   
           </div>
<div></div>
    <div class="row">
        <div class="col-3 col-s-3 menu">
         
        </div>


        <div class="col-6 col-s-9">
          <h1>videos</h1>
          {/* <p>###</p> */}
          <div class="ratio ratio-16x9">
  <iframe    src={`https://www.youtube.com/embed/${v.videoUrl}`} allowfullscreen></iframe>
</div><br/>
<p>T {v.content.length > 100
                        ? v.content.slice(0, STRING_LIMIT) + '...'
                        : v.content}</p>
            </div>

            <div class="col-3 col-s-12">
              {/* <div class="aside"> */}
                {/* <h2>videos</h2>
                <p>videos description</p>
                <h2>description</h2>
                
                <p>####</p>
              </div> */}
            </div>
          </div>

         </section></>
        );
        
        
      });
    };
  
    return (
      <div>
          <div className='f  '>
         <div className='z'>
      <div className='j'>
        <h1>videos</h1>
      </div>
      </div></div>
        {renderVideos(videos)}
      </div>
    );
  }

export default Videos;
     
