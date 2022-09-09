import React, { useState } from 'react';
import FeedPost from '../components/feed/FeedPost';
import Layout from '../components/shared/Layout';
import { getDefaultPost } from '../data';
import UserCard from '../components/shared/UserCard';
import FeedSideSuggestions from '../components/feed/FeedSideSuggestions';
import LoadingScreen from '../components/shared/LoadingScreen';
import { Spinner } from '../utils/icons';

export default function FeedPage() {
  const [isEndOfFeed] = useState(false);

  let loading = false;
  if (loading) return <LoadingScreen />;

  return (
    <Layout>
      <div className='flex max-w-3xl justify-center m-auto  gap-4'>
        {/* Feed Posts */}
        <div className='md:max-w-md sm:max-w-md w-3/4 '>
          {Array.from({ length: 5 }, () => getDefaultPost()).map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
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
