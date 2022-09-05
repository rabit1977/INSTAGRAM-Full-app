import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  InstagramLogo,
  Spinner,
  AddIcon,
  NLikeIcon,
  LikeActiveIcon,
  ExploreIcon,
  ExploreActiveIcon,
  HomeIcon,
  HomeActiveIcon,
} from '../../utils/icons';
import { defaultCurrentUser, getdefaultUser } from '../../data';

export default function Navbar({ minimalNavbar }) {
  // navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className='flex items-center justify-around py-2 border-b z-50 bg-gray-50 border-black/30 shadow-md fixed top-0 left-0 right-0'>
      <Logo />
      {/* {!minimalNavbar && <Search />}
        {!minimalNavbar && <Links />} */}
      {!minimalNavbar && (
        <>
          <Search />
          <Links path={path} />
        </>
      )}
    </div>
  );
}

function Logo() {
  return (
    <div>
      <Link to='/'>
        <div className='ml-8'>
          <InstagramLogo />
        </div>
      </Link>
    </div>
  );
}

function Search() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const hasResults = Boolean(query) && results.length > 0;

  useEffect(() => {
    if (!query.trim()) return;
    setResults(Array.from({ length: 5 }, () => getdefaultUser()));
  }, [query]);

  function handleClearInput() {
    setQuery('');
  }

  return (
    <div className=''>
      <input
        className='border-2 border-black/40 pl-2 rounded-sm shadow-md'
        type='text'
        onChange={(e) => setQuery(e.target.value)}
        start={<span className='' />}
        end={
          loading ? (
            <Spinner />
          ) : (
            <span onClick={handleClearInput} className='' />
          )
        }
        placeholder='Search'
        value={query}
      />
      <div className='whitetooltip'></div>
    </div>
  );
}

function Links({ path }) {
  const [showList, setList] = useState(false);

  function handleToggleList() {
    setList((prev) => !prev);
  }

  return (
    <div>
      <div className='flex space-x-4'>
        <div>
          <AddIcon />
        </div>
        <Link to='/'>{path === '/' ? <HomeActiveIcon /> : <HomeIcon />}</Link>
        <Link to='/explore'>
          {path === '/explore' ? <ExploreIcon /> : <ExploreActiveIcon />}
        </Link>
        <div className='space-y-1' onClick={handleToggleList}>
          {showList ? <LikeActiveIcon /> : <NLikeIcon />}
        </div>
        <Link to={`/${defaultCurrentUser.username}`}>
          <div
            className={path === `/${defaultCurrentUser.username}` ? '' : ''}
          ></div>
        </Link>
      </div>
    </div>
  );
}
