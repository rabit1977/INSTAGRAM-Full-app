import React from 'react';

export default function GridPost({ post }) {
  return (
    <div className='h-52 w-52 bg-green-500 m-auto'>
      <div className='absolute'>
        <div className='bg-red-500'>
          <div className=''>
            <span className='' />
            <p className=''>{post.likes}</p>
          </div>
          <div>
            <span className='' />
            <p>{post.comments.length}</p>
          </div>
        </div>
      </div>
      <img src={post.media} alt='Post cover' className='w-52 h-52' />
    </div>
  );
}
