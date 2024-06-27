// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StoryDetail from './StoryDetail'
// Home component
function Home() {
  return <h2>Home</h2>;
}

// About component
function About() {
  return <h2>About</h2>;
}

// Users component
function Users() {
  return <h2>Users</h2>;
}

// App component
function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav> */}
{/* <StoryDetail/> */}
<Home/>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
