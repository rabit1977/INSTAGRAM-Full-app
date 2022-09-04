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
      <div className='flex w-3/4 justify-center m-auto gap-8'>
        {/* Feed Posts */}
        <div className=''>
          {Array.from({ length: 5 }, () => getDefaultPost()).map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
        {/* Sidebar */}
        <div className='hidden xl:block  flex-col sm:min-w-[350px] border-2 border-black/30 shadow-lg bg-gray-100'>
          <div className='m-4'>
            <UserCard />
            <FeedSideSuggestions />
          </div>
        </div>
      </div>{' '}
      {!isEndOfFeed && <Spinner />}
    </Layout>
  );
}
