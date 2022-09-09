import React from 'react';
import { getDefaultUser } from '../../data';
import { Spinner } from '../../utils/icons';
import FollowButton from '../shared/FollowButton';
import UserCard from '../shared/UserCard';

export default function FeedSideSuggestions() {
  let loading = false;

  return (
    <article className='flex flex-col'>
      <div className='mt-2'>
        <div className='flex justify-between py-2 '>
          <h4 className='text-md font-bold tracking-wide text-slate-500'>
            {' '}
            Suggestions For You
          </h4>
          <div>
            <button className='px-2 text-md text-slate-900 font-bold'>
              See All
            </button>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          Array.from({ length: 5 }, () => getDefaultUser()).map((user) => (
            <div className='flex justify-between items-center' key={user.id}>
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
