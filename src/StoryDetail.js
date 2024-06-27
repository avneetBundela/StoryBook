import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './StoryDetail.css';

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [activeTab, setActiveTab] = useState('summary');

  useEffect(() => {
    axios.get(`https://child.onrender.com/api/sciencefiction/${id}`)
      .then(response => {
        setStory(response.data);
      })
      .catch(error => {
        console.error('Error fetching story:', error);
      });
  }, [id]);

  if (!story) return <div>Loading...</div>;

  return (
    <div className="story-detail">
      <h1>{story.title}</h1>
      <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.title} />
      <div className="tabs">
        <button onClick={() => setActiveTab('summary')} className={activeTab === 'summary' ? 'active' : ''}>Summary</button>
        <button onClick={() => setActiveTab('author')} className={activeTab === 'author' ? 'active' : ''}>Author</button>
        <button onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? 'active' : ''}>Reviews</button>
      </div>
      <div className="tab-content">
        {activeTab === 'summary' && <p>{story.summary}</p>}
        {activeTab === 'author' && <p>{story.author}</p>}
        {activeTab === 'reviews' && <p>{story.reviews}</p>}
      </div>
    </div>
  );
};

export default StoryDetail;
