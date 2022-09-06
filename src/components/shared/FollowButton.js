import React, { useState } from 'react';

export default function FollowButton({ side }) {
  const [isFollowing, setisFollowing] = useState(false);

  const followButton = (
    <button
      className={` ${
        side
          ? 'text-blue-500 px-4 hover:font-semibold transition duration-200'
          : ''
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
          ? 'border-2 border-black/80 py-1 px-3 font-semibold hover:bg-gray-200 hover:scale-[101%] bg-[#dfdfdf] rounded-md'
          : 'text-blue-500 '
      }`}
      onClick={() => setisFollowing(false)}
    >
      Following
    </button>
  );
  return isFollowing ? followingButton : followButton;
}
