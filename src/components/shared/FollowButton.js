import React, { useState } from 'react';

export default function FollowButton({ side }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const followButton = (
    <button
      className={` ${
        side ? 'text-[#0095fb] font-bold text-sm ' : 'text-[#0095fb]'
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
