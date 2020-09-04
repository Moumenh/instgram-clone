import React from 'react';
import Avatar from '@material-ui/core/Avatar';


import './Post.css'
    
    const Post = ({ username, caption, imageUrl }) => {

    return ( 
        <div className='post'>
            <div className='post__header'>
                <Avatar className='post__avatar'
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                />
                <h3> {username} </h3>
                {/* Header --> avatar + username */}
            </div>
            
            
            <img className='post__image' src={imageUrl} />
            {/* image */}

            <h4 className='post__text'> <strong>{username}</strong> : {caption}</h4>
            {/* username + caption */}
        </div>
     );
}
 
export default Post;