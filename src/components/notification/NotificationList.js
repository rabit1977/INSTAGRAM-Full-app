import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { defaultNotifications } from '../../data';
import FollowButton from '../shared/FollowButton';
import useOutsideClick from '@rooks/use-outside-click';

export default function NotificationList({ handleHideList }) {
  const listRef = useRef();
  useOutsideClick(listRef, handleHideList);
  return (
    <div ref={listRef}>
      {defaultNotifications.map((notification) => {
        const isLike = notification.type === 'like';
        const isFollow = notification.type === 'follow';

        return (
          <div key={notification.id}>
            <div>
              <div>
                <img src={notification.user.profile_image} alt='User avatar' />
              </div>
              <div>
                <Link to={`/${notification.user.username}`}>
                  {notification.user.username}
                </Link>
                <p>
                  {isLike && `likes your photo. 4d`}
                  {isFollow && `started following you. 7d`}
                </p>
              </div>
            </div>
            <div>
              {isLike && (
                <Link to={`/p/${notification.post.id}`}>
                  <img src={notification.post.media} alt='post cover' />
                </Link>
              )}
              {isFollow && <FollowButton />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
