import React from 'react';
import { getdefaultUser } from '../../data';
import { Spinner } from '../../utils/icons';
import FollowButton from '../shared/FollowButton';
import UserCard from '../shared/UserCard';

export default function FeedSideSuggestions() {
  let loading = false;

  return (
    <article className='flex flex-col'>
      <div className='mt-6'>
        <h4 className='mb-4 text-lg tracking-wide'>Your Suggestions...</h4>
        {loading ? (
          <Spinner />
        ) : (
          Array.from({ length: 5 }, () => getdefaultUser()).map((user) => (
            <div
              className='flex justify-between items-center border-b  py-2 border-black/30'
              key={user.id}
            >
              <div>
                <UserCard user={user} />
              </div>
              <div>
                <FollowButton side />
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
}
