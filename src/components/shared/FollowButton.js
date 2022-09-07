import React, { useState } from 'react';

export default function FollowButton({ side }) {
  const [isFollowing, setisFollowing] = useState(false);

  const followButton = (
    <button
      className={` ${
        side
          ? 'text-[#0095fb] px-4 font-bold '
          : 'text-[#0095fb]'
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
          ? ' border border-[rgb(219,219,219)] py-1 px-3 font-bold bg-slate-50 text-slate-800 rounded-md'
          : ''
      }`}
      onClick={() => setisFollowing(false)}
    >
      Following
    </button>
  );
  return isFollowing ? followingButton : followButton;
}
