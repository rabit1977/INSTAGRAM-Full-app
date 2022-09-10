import React, { useState } from 'react';
import FeedPost from '../components/feed/FeedPost';
import Layout from '../components/shared/Layout';
import { getDefaultPost, getDefaultUser } from '../data';
import UserCard from '../components/shared/UserCard';
import FeedSideSuggestions from '../components/feed/FeedSideSuggestions';
import LoadingScreen from '../components/shared/LoadingScreen';
import { Spinner } from '../utils/icons';
import { Link } from 'react-router-dom';

export default function FeedPage() {
  const [isEndOfFeed] = useState(false);

  let loading = false;
  if (loading) return <LoadingScreen />;

  return (
    <Layout>
      <div className='flex max-w-3xl justify-center m-auto  gap-4'>
        {/* Feed Posts */}
        <div className='md:max-w-md sm:max-w-md w-3/4 '>
          <div className='flex mb-4 border p-3 bg-white space-x-4 rounded-xl border-[rgb(219,219,219)]'>
            {Array.from({ length: 3 }, () => getDefaultUser()).map((user) => (
              <div
                className='flex flex-col items-center capitalize'
                key={user.id}
              >
                <Link to={`/${user}`}>
                  <img
                    src='myPicture.jpg'
                    alt='user avatar'
                    className='rounded-full h-14 w-14 ring-1 ring-offset-1 ring-slate-600'
                  />
                </Link>
                <p>{user.username}</p>
              </div>
            ))}
          </div>
          {Array.from({ length: 5 }, () => getDefaultPost()).map(
            (post, index) => (
              <FeedPost key={post.id} index={index} post={post} />
            )
          )}
        </div>
        {/* Sidebar */}
        <div className='hidden md:block flex-col'>
          <div className=''>
            <UserCard />
            <FeedSideSuggestions />
          </div>
        </div>
      </div>{' '}
      {!isEndOfFeed && <Spinner />}
    </Layout>
  );
}
