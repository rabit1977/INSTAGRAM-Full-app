import React from 'react';
import { CommentButton, LikeIcon, UnLikeIcon } from '../../utils/icons';

export default function GridPost({ post }) {
  return (
    <div className='relative'>
      <div className='grid-flow-row content-evenly'>
        <div className='absolute w-full h-full hover:bg-[rgba(0,0,0,0.6)] cursor-pointer'>
          <div className='grid place-items-center grid-flow-col w-full h-full opacity-0 hover:opacity-100 justify-evenly'>
            <div className='text-white flex items-center space-x-1'>
              <UnLikeIcon className='w-4 h-4' />
              <p className=''>{post.likes}</p>
            </div>
            <div className='text-white flex items-center space-x-1'>
              <CommentButton className='w-4 h-4' />
              <p>{post.comments.length}</p>
            </div>
          </div>
        </div>
      </div>
      <img src='InstagramImage.jpg' alt='Post cover' className='' />
    </div>
  );
}
