import React,{ useState,useEffect } from 'react';
import Post from './Post';

import { db } from './firebase'
import './App.css';


function App() {

  
    const [posts, setPosts] = useState([])

    // runs a piece of code based on a specific condition

    useEffect(() => {
      db.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map( doc => doc.data() ))
      })
    }, [posts])

  return (
    <div className="App">
      
      <div className='app__header'>
        <img className='app_headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='logo' />
        
      </div>
      <h1>Hello sss</h1>

      {posts.map( (post, id) => (
        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))}

      {/* Header */}
      {/* Posts */}
    </div>
  );
}

export default App;
