import React, { useState } from 'react';

export default function FollowButton({ side }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const followButton = (
    <button
      className={` ${
        side
          ? 'bg-[#0095fb] text-white px-5 rounded-sm font-normal py-1 text-sm'
          : 'text-[#0095fb] font-bold text-sm'
      }`}
      onClick={() => setIsFollowing(true)}
    >
      Follow
    </button>
  );

  const followingButton = (
    <button
      className={`${
        side
          ? ' border border-[rgb(219,219,219)]  font-bold bg-slate-50 text-slate-800 rounded-md'
          : ''
      }`}
      onClick={() => setIsFollowing(false)}
    >
      Following
    </button>
  );
  return isFollowing ? followingButton : followButton;
}
