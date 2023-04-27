import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import ReadPosts from './pages/ReadPosts';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import { Link } from 'react-router-dom';
import { supabase } from './client';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await supabase.from('Posts').select();
    setPosts(data);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  };

  // Sets up routes
  let element = useRoutes([    {      path: '/',      element: <ReadPosts data={posts} />,    },    {      path: '/edit/:id',      element: <EditPost data={posts} />,    },    {      path: '/new',      element: <CreatePost />,    },  ]);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className="header">
        <h1>🍔 Local Burger Reviews! 📍</h1>
        <button className="headerBtn" onClick={handleToggleDarkMode}>
          {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>
        <Link to="/">
          <button className="headerBtn"> View Other Burger Reviews 🍟</button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Submit a Review 💭 </button>
        </Link>
      </div>
      <div className="elley">
        {element}
      </div>
    </div>
  );
};

export default App;