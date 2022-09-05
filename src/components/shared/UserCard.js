import React from 'react';
import { Link } from 'react-router-dom';
import { defaultUser } from '../../data';

export default function UserCard({ user = defaultUser }) {
  const { username, name, profile_image } = user;
  return (
    <div className='w-full flex items-center'>
      <Link to={`/${username}`}>
        <img
          src={profile_image}
          alt='user avatar'
          className='rounded-full h-12 w-12 border-2 border-gray-500'
        />
      </Link>
      <div className='ml-2'>
        <Link to={`/${username}`}>
          <h5 className='text-sm'>{username}</h5>
        </Link>
        <p className='text-sm lowercase'>{name}</p>
      </div>
    </div>
  );
}
