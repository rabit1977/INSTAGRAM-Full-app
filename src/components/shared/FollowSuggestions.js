import React from 'react';
import { NextArrowIcon, PrevArrowIcon, Spinner } from '../../utils/icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { getDefaultUser } from '../../data';
import FollowButton from './FollowButton';

export default function FollowSuggestions({ hideHeader }) {
  let loading = false;

  return (
    <div className='mb-8'>
      {!hideHeader && (
        <h3 className='text-slate-600 mb-2'>Suggestions For You</h3>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <Slider
          dots={false}
          infinite={true}
          lazyLoad='ondemand'
          sledesToShow={3}
          speed={500}
          touchThreshold={500}
          variableWidth
          centerMode
          swipeToSlide
          slidesToScroll={1}
          easing='ease-in-out'
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {Array.from({ length: 10 }, () => getDefaultUser()).map((user) => (
            <FollowSuggestionsItem key={user.id} user={user} />
          ))}
        </Slider>
      )}
    </div>
  );
}

function FollowSuggestionsItem({ user }) {
  const { profile_image, username, name } = user;
  return (
    <div className='mx-2 bg-white'>
      <div className='border flex flex-col items-center p-6'>
        <Link to={`/${username}`}>
          <img
            src={profile_image}
            className='rounded-full h-14 w-14 ring-1 ring-offset-1 ring-slate-600'
            alt={`${username}'s profile`}
          />
        </Link>
        <Link to={`/${username}`}>
          <h3 className='text-sm mt-1 capitalize'>{username}</h3>
        </Link>
        <h3 className='text-xs mb-2 capitalize'>{name}</h3>
        <FollowButton side='false' />
      </div>
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='absolute right-0 bottom-16 -mx-6'>
      <NextArrowIcon />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='absolute left-0 bottom-16 -mx-6'>
      <PrevArrowIcon />
    </div>
  );
}
