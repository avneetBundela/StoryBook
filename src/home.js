import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('https://child.onrender.com/api/sciencefiction')
      .then(response => {
        setStories(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
      });
  }, []);

  return (
    <div className="home">
      <h1>Science Fiction Stories</h1>
      <div className="stories">
        {stories.map(story => (
          <Link to={`/story/${story.id}`} key={story.id} className="story-card">
            <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.title} />
            <h2>{story.title}</h2>
            <p>{story.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
