import React, { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import UserCard from '../shared/UserCard';
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

export default function FeedPost({ post }) {
  const { id, likes, user, caption, comments, username } = post;
  const [showCaption, setCaption] = useState(false);

  return (
    <>
      <article className='mb-8 flex flex-col max-w-[900px] min-w[700px] bg-gray-100 shadow-lg border-2 border-black/30'>
        {/* Header */}
        <div className='mx-4 flex justify-between items-center font-normal tracking-wide text-xl py-4'>
          <UserCard user={user} username={username} />
          <FiMoreHorizontal style={{ cursor: 'pointer' }} />
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
        <div className=''>
          <div className='flex justify-between mx-4 items-center text-gray-700'>
            <div className='flex flex-1 space-x-6 '>
              <span>
                <LikeButton />
              </span>
              <Link to={`/p/${id}`}>
                <BiCommentDetail size='25' />
              </Link>
              <span>
                <AiOutlineShareAlt size='25' />
              </span>
            </div>
            <div className='flex'>
              <SaveButton />
            </div>
          </div>
          <h4 className='mx-4 text-gray-600'>
            <span>{likes === 1 ? ' 1 like' : `${likes} likes`} </span>
          </h4>
          <div className='mx-4'>
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
              <div className='mx-4' key={comment.id}>
                <Link to={`/${comment.user.username}`}>
                  <span>{comment.user.username}</span>
                  <span>{comment.content}</span>
                </Link>
              </div>
            ))}
            <span className='text-xs'>5 DAYS AGO</span>
          </div>
          <div className=' p-4 mt-2 border-t border-black/30 '>
            <Comment />
          </div>
        </div>{' '}
      </article>
    </>
  );
}

function LikeButton() {
  const [liked, setLiked] = useState('');
  /* i have to create this functionality */

  return <AiOutlineLike size={25} />;
}
function SaveButton() {
  return <>Save Button</>;
}
function Comment() {
  return <>Comment</>;
}
