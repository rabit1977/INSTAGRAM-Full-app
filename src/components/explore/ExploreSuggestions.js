import React from 'react';
import FollowSuggestions from '../shared/FollowSuggestions';

export default function ExploreSuggestions() {
  return (
    <div className='hidden sm:block max-w-2xl'>
      <div>
        <h2>Discover People</h2>
        <FollowSuggestions hideHeader/>
      </div>
    </div>
  );
}
