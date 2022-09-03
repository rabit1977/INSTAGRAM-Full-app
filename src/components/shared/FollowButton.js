import React, { useState } from 'react';

export default function FollowButton({ side }) {
  const [isFollowing, setisFollowing] = useState(false);

  const followButton = (
    <button
      className={` ${
        side
          ? 'text-blue-500'
          : 'border-2 border-black/80 rounded-md bg-gray-200'
      }`}
      onClick={() => setisFollowing(true)}
    >
      Follow
    </button>
  );

  const followingButton = (
    <button
      className={`${
        side
          ? 'border-2 border-black/80 px-4 bg-gray-200 rounded-md'
          : 'text-blue-500 '
      }`}
      onClick={() => setisFollowing(false)}
    >
      Following
    </button>
  );
  return isFollowing ? followingButton : followButton;
}
