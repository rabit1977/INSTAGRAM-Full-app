import React from 'react';
import FeedPost from '../components/feed/FeedPost';
import Layout from '../components/shared/Layout';
import { getDefaultPost } from '../data';
import UserCard from '../components/shared/UserCard';
import FeedSideSuggestions from '../components/feed/FeedSideSuggestions';

export default function FeedPage() {
  return (
    <Layout>
      <div className='flex max-w-5/6 justify-center gap-8'>
        {/* Feed Posts */}
        <div className='flex flex-col min-w-[700px] bg-red-300'>
          {Array.from({ length: 1 }, () => getDefaultPost()).map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
        {/* Sidebar */}
        <div className='hidden xl:block  flex-col sm:min-w-[350px] bg-green-300'>
          <div>
            <UserCard />
            <FeedSideSuggestions />
          </div>
        </div>
      </div>
    </Layout>
  );
}
