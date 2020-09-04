import React from 'react';
import Post from './Post';

import './App.css';


function App() {
  return (
    <div className="App">
      
      <div className='app__header'>
        <img className='app_headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='logo' />
        
      </div>
      <h1>Hello sss</h1>
      <Post/>
      <Post/>
      <Post/>
      {/* Header */}
      {/* Posts */}
    </div>
  );
}

export default App;
