import React, { useState } from 'react';
import FeedPost from '../components/feed/FeedPost';
import Layout from '../components/shared/Layout';
import { getDefaultPost } from '../data';
import UserCard from '../components/shared/UserCard';
import FeedSideSuggestions from '../components/feed/FeedSideSuggestions';
import LoadingScreen from '../components/shared/LoadingScreen';

export default function FeedPage() {
  const [isEndOfFeed] = useState(false);

  let loading = false;
  if (loading) return <LoadingScreen />;

  return (
    <Layout>
      <div className='flex w-3/4 justify-center m-auto gap-8'>
        {/* Feed Posts */}
        <div className=''>
          {Array.from({ length: 2 }, () => getDefaultPost()).map((post) => (
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
      {!isEndOfFeed && (
        <svg
          width={50}
          height={50}
          viewBox='0 0 50 50'
          fill='#c7c7c7'
          className='animate-spin m-auto relative'
        >
          <path d='M25 1c-6.52 0-7.34.03-9.9.14-2.55.12-4.3.53-5.82 1.12a11.76 11.76 0 00-4.25 2.77 11.76 11.76 0 00-2.77 4.25c-.6 1.52-1 3.27-1.12 5.82C1.03 17.66 1 18.48 1 25c0 6.5.03 7.33.14 9.88.12 2.56.53 4.3 1.12 5.83a11.76 11.76 0 002.77 4.25 11.76 11.76 0 004.25 2.77c1.52.59 3.27 1 5.82 1.11 2.56.12 3.38.14 9.9.14 6.5 0 7.33-.02 9.88-.14 2.56-.12 4.3-.52 5.83-1.11a11.76 11.76 0 004.25-2.77 11.76 11.76 0 002.77-4.25c.59-1.53 1-3.27 1.11-5.83.12-2.55.14-3.37.14-9.89 0-6.51-.02-7.33-.14-9.89-.12-2.55-.52-4.3-1.11-5.82a11.76 11.76 0 00-2.77-4.25 11.76 11.76 0 00-4.25-2.77c-1.53-.6-3.27-1-5.83-1.12A170.2 170.2 0 0025 1zm0 4.32c6.4 0 7.16.03 9.69.14 2.34.11 3.6.5 4.45.83 1.12.43 1.92.95 2.76 1.8a7.43 7.43 0 011.8 2.75c.32.85.72 2.12.82 4.46.12 2.53.14 3.29.14 9.7 0 6.4-.02 7.16-.14 9.69-.1 2.34-.5 3.6-.82 4.45a7.43 7.43 0 01-1.8 2.76 7.43 7.43 0 01-2.76 1.8c-.84.32-2.11.72-4.45.82-2.53.12-3.3.14-9.7.14-6.4 0-7.16-.02-9.7-.14-2.33-.1-3.6-.5-4.45-.82a7.43 7.43 0 01-2.76-1.8 7.43 7.43 0 01-1.8-2.76c-.32-.84-.71-2.11-.82-4.45a166.5 166.5 0 01-.14-9.7c0-6.4.03-7.16.14-9.7.11-2.33.5-3.6.83-4.45a7.43 7.43 0 011.8-2.76 7.43 7.43 0 012.75-1.8c.85-.32 2.12-.71 4.46-.82 2.53-.11 3.29-.14 9.7-.14zm0 7.35a12.32 12.32 0 100 24.64 12.32 12.32 0 000-24.64zM25 33a8 8 0 110-16 8 8 0 010 16zm15.68-20.8a2.88 2.88 0 10-5.76 0 2.88 2.88 0 005.76 0z' />
        </svg>
      )}
    </Layout>
  );
}
