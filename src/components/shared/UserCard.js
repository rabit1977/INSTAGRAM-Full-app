import React from 'react';
import { Link } from 'react-router-dom';
import { defaultUser } from '../../data';

export default function UserCard({ user = defaultUser }) {
  const { username, name, profile_image } = user;
  return (
    <div className='flex items-center p-2'>
      <Link to={`/${username}`}>
        <img
          src={profile_image}
          alt='user avatar'
          className='rounded-full h-8 w-8 ring-1 ring-offset-1 ring-slate-600'
        />
      </Link>
      <div className='ml-3'>
        <Link to={`/${username}`}>
          <h5 className='text-xs capitalize font-bold text-slate-600'>
            {username}
          </h5>
        </Link>
        <p className='text-xs capitalize font-normal text-slate-600'>{name}</p>
      </div>
    </div>
  );
}
