import React from 'react';
import { getDefaultPost } from '../../data';
import { Spinner } from '../../utils/icons';
import GridPost from '../shared/GridPost';

export default function ExploreGrid() {
  let loading = false;
  return (
    <>
      <h2>Explore</h2>
      {loading ? (
        <Spinner />
      ) : (
        <article className='max-w-2xl m-auto'>
          <div className='grid grid-cols-3 gap-4'>
            {Array.from({ length: 20 }, () => getDefaultPost()).map((post) => (
              <GridPost key={post.id} post={post} />
            ))}
          </div>
        </article>
      )}
    </>
  );
}
