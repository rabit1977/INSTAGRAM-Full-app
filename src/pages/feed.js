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
      <div className='flex max-w-6xl  justify-center m-auto overflow-hidden gap-4'>
        {/* Feed Posts */}
        <div className=' xl:max-w-3xl md:max-w-2xl sm:max-w-lg mx-4'>
          {Array.from({ length: 5 }, () => getDefaultPost()).map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
        {/* Sidebar */}
        <div className='hidden xl:block flex-col w-full'>
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
