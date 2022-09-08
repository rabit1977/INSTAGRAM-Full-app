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
        <div className='flex justify-between py-4 '>
          <h4 className='text-lg font-bold tracking-wide'>
            {' '}
            Suggestions For You
          </h4>
          <div>
            <button className='px-4 text-lg text-slate-900 font-bold'>
              See All
            </button>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          Array.from({ length: 5 }, () => getdefaultUser()).map((user) => (
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
