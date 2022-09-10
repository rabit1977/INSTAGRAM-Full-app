import React from 'react';
import { Link } from 'react-router-dom';
import { defaultPost } from '../../data';

export default function OptionsDialog({ onClose }) {
  return (
    <div
      open
      onClose={onClose}
      className='bg-red-500 left-28   top-72 shadow-lg w-96 text-center [&>*]:p-3 flex flex-col rounded-xl divide-y absolute'
    >
      <button className='hover:bg-slate-100'>Unfollow</button>
      <button className='hover:bg-slate-100'>
        <Link to={`/p/${defaultPost.id}`}>Go to post</Link>
      </button>
      <button className='hover:bg-slate-100'>Share</button>
      <button className='hover:bg-slate-100'>Copy Link</button>
      <button className='hover:bg-slate-100' onClick={onClose}>
        Cancel
      </button>
    </div>
  );
}
