import React from 'react';
import Avatar from '@material-ui/core/Avatar';


import './Post.css'

const Post = () => {
    return ( 
        <div className='post'>
            <div className='post__header'>
                <Avatar className='post__avatar'
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                />
                <h3> Username </h3>
                {/* Header --> avatar + username */}
            </div>
            
            
            <img className='post__image' src='https://images.unsplash.com/photo-1525673812761-4e0d45adc0cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' />
            {/* image */}

            <h4 className='post__text'> <strong>mom0oooZ</strong> : WOWOWOW</h4>
            {/* username + caption */}
        </div>
     );
}
 
export default Post;