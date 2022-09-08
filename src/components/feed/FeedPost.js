import React, { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import UserCard from '../shared/UserCard';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import {
  CommentButton,
  LikeIcon,
  SendButton,
  UnLikeIcon,
  RemoveIcon,
  SaveIcon,
} from '../../utils/icons';

export default function FeedPost({ post }) {
  const { id, likes, user, caption, comments, username } = post;
  const [showCaption, setCaption] = useState(false);

  return (
    <>
      <article className='mb-4 flex flex-col rounded-xl  border border-[rgb(219,219,219)]'>
        {/* Header */}
        <div className=' pr-4 flex justify-between items-center font-normal border-b  tracking-wide text-xl'>
          <UserCard user={user} username={username} />
          <FiMoreHorizontal className='cursor-pointer text-3xl' />
        </div>
        {/* image */}
        <div className='mb-4'>
          <img
            src='instagram-logo-banner.png'
            alt='media post'
            className='w-full h-full'
          />
        </div>
        {/* post buttons */}
        <div className='mx-4'>
          <div className='flex justify-between items-center text-gray-700'>
            <div className='flex flex-1 space-x-6 '>
              <LikeButton />
              <Link to={`/p/${id}`}>
                <CommentButton />
              </Link>
              <SendButton />
            </div>
            <div>
              <SaveButton />
            </div>
          </div>
          <h4 className=' text-gray-600'>
            <span>{likes === 1 ? ' 1 like' : `${likes} likes`} </span>
          </h4>
          <div className=''>
            <Link to={`/${user?.username}`}>
              <h4> {user?.username} </h4>
            </Link>
            {showCaption ? (
              <div
                className=''
                dangerouslySetInnerHTML={{ __html: caption }}
              ></div>
            ) : (
              <div>
                <HTMLEllipsis
                  unsafeHTML={caption}
                  maxLine='0'
                  ellipsis='...'
                  basedOn='letters'
                />
                <button className='' onClick={() => setCaption(true)}>
                  more
                </button>
              </div>
            )}
            <Link to={`/p/${id}`}>
              <h4>View all {comments.length} comments</h4>
            </Link>
            {comments.map((comment) => (
              <div className='' key={comment.id}>
                <Link to={`/${comment.user.username}`}>
                  <span>{comment.user.username}</span>
                  <span>{comment.content}</span>
                </Link>
              </div>
            ))}
            <span className='text-xs'>5 DAYS AGO</span>
          </div>
        </div>{' '}
        <div className=' px-4 pb-4 mt-2 border-t border-[rgb(219,219,219)] '>
          <Comment />
        </div>
      </article>
    </>
  );
}

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const Icon = liked ? UnLikeIcon : LikeIcon;
  const onClick = liked ? handleUnLike : handleLike;

  function handleLike() {
    console.log('save');
    setLiked(true);
  }
  function handleUnLike() {
    console.log('remove');
    setLiked(false);
  }
  return <Icon onClick={onClick} />;
}

function SaveButton() {
  const [saved, setSaved] = useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;
  const onClick = saved ? handleRemove : handleSave;

  function handleSave() {
    console.log('save');
    setSaved(true);
  }
  function handleRemove() {
    console.log('remove');
    setSaved(false);
  }

  return <Icon onClick={onClick} />;
}

function Comment() {
  const [content, setContent] = useState('');
  return (
    <div className='flex justify-between items-center  disabled:opacity-40 pt-3'>
      <input
        type='text'
        value={content}
        placeholder='Add a comment ...'
        className='flex-1 bg-transparent outline-none rounded-md placeholder:text-slate-500 '
        rows={1}
        cols='40'
        onChange={(event) => setContent(event.target.value)}
      />
      <button
        className=' rounded-full disabled:opacity-40 font-semibold disabled:text-[#0095f6] disabled:font-bold text-[#0095fb] bg-slate-50 tracking-wide text-lg'
        disabled={!content.trim()}
      >
        Post
      </button>
    </div>
  );
}
