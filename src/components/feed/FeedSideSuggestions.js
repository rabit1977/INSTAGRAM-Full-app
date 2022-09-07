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
        <h4 className='px-4 text-lg tracking-wide'>Your Suggestions...</h4>
        {loading ? (
          <Spinner />
        ) : (
          Array.from({ length: 5 }, () => getdefaultUser()).map((user) => (
            <div
              className='flex justify-between items-center pr-4'
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
