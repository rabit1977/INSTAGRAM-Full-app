import React, { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import UserCard from '../shared/UserCard';
import { AiOutlineShareAlt } from 'react-icons/ai';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

export default function FeedPost({ post }) {
  const { id, likes, user, caption, comments } = post;
  const [showCaption, setCaption] = useState(false);

  return (
    <>
      <article className='my-6'>
        {/* Header */}
        <div className='mx-4 flex justify-between items-center font-normal tracking-wide text-xl py-4'>
          <UserCard />
          <FiMoreHorizontal style={{ cursor: 'pointer' }} />
        </div>
        {/* image */}
        <div className='mb-4'>
          <img src='instagram-logo-banner.png' alt='media post' />
        </div>
        {/* post buttons */}
        <div className=''>
          <div className='bg-white flex justify-between mx-4 items-center text-gray-700'>
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
            <h5> 5 DAYS AGO</h5>
          </div>
          <div className='mx-4'>
            <Comment />
          </div>
        </div>
      </article>
    </>
  );
}

function LikeButton() {
  return <>Like Button</>;
}
function SaveButton() {
  return <>Save Button</>;
}
function Comment() {
  return <>Comment</>;
}
