import React,{ useState,useEffect } from 'react';
import Post from './Post';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { db, auth } from './firebase'
import './App.css';
import { Button, Input } from '@material-ui/core';



function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle);
  
    const [posts, setPosts] = useState([])
    const [open,setOpen] = useState(false)
    const [openSignIn,setOpenSignIn] = useState(false)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged( (authUser) => { // to stay login after refreshing
        if( authUser) {
          console.log(authUser)
          setUser(authUser)
          
        } else {
          setUser(null)
        }
      })

      return () => {
        // perform some cleanup actions before u fire it again
        unsubscribe()
      }

    }, [user, username])

    useEffect(() => {     // runs a piece of code based on a specific condition
      db.collection('posts').onSnapshot( snapshot => {
        setPosts( snapshot.docs.map( doc => ({
          id: doc.id,
          post: doc.data()}) ) )
      } )
      
      
    }, [posts])

    
    const signUp = (e) =>{
      e.preventDefault()

      auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          return authUser.user.updateProfile({
            displayName: username
          })
      })
      .catch((err) => alert(err.message))
    }

    const signIn = (e) => {
      e.preventDefault()
      
      auth.signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message))

      setOpenSignIn(false)
    }

  return (
    <div className="App">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img className='app_headerImage'
              src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
              alt='logo' />
          </center>
          <form className='app__signup'>
          <Input 
              className='signup__input'
              placeholder='username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
            <Input 
              className='signup__input'
              placeholder='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
              className='signup__input'
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              
              <Button type='submit' onClick={signUp}> Sign Up</Button>
          </form>
          
        </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img className='app_headerImage'
              src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
              alt='logo' />
          </center>
          <form className='app__signup'>
            <Input 
              className='signup__input'
              placeholder='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
              className='signup__input'
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              
              <Button type='submit' onClick={signIn}> Sign In</Button>
          </form>
          
        </div>
      </Modal>
      
      <div className='app__header'>
        <img className='app_headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='logo' />
        
      </div>
      {user ? (
        <Button onClick={() => auth.signOut()}> LogOut</Button>
      ) : 
      <div>

        <Button onClick={() => setOpen(true)}>
          Sign Up
        </Button>
        <Button onClick={() => setOpenSignIn(true)}>
          Sign In
        </Button>
      </div>
      }



      <h1>Hello sss</h1>

      {posts.map( ({post, id}) => (
        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))}

      {/* Header */}
      {/* Posts */}
    </div>
  );
}

export default App;
