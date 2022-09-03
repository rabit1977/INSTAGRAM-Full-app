import React from 'react';
import { getdefaultUser } from '../../data';
import FollowButton from '../shared/FollowButton';
import UserCard from '../shared/UserCard';

export default function FeedSideSuggestions() {
  return (
    <article className='flex flex-col'>
      <div className='mt-6'>
        <h4 className='mb-4 text-lg tracking-wide'>Your Suggestions...</h4>
        {Array.from({ length: 5 }, () => getdefaultUser()).map((user) => (
          <div
            className='flex border-b justify-between py-2 border-black/30'
            key={user.id}
          >
            <UserCard user={user} />
            <FollowButton side />
          </div>
        ))}
      </div>
    </article>
  );
}
