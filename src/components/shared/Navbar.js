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
    <div className='flex items-center justify-around py-2 border-b bg-white border-[rgb(219,219,219)] fixed top-0 left-0 right-0'>
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
  const navigate = useNavigate();
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
      <div
        hasResults={
          hasResults && (
            <div className=' bg-red-500 absolute' container>
              {results.map((result) => (
                <div
                  key={result.id}
                  className='bg-green-500'
                  onClick={() => {
                    navigate(`/${result.username}`);
                    handleClearInput();
                  }}
                >
                  <div className=''>
                    <div className=''>
                      <img src={result.profile_image} alt='user avatar' />
                    </div>
                    <div className=''>
                      <p>{result.username}</p>
                      <p>{result.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      >
        <input
          className='border-0  bg-[rgba(239,239,239)] py-2 px-4 font-light rounded-lg w-[380px] placeholder:font-normal tracking-wider text-xl outline-none'
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
      </div>
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
      <div className='flex space-x-10'>
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
            className={
              path === `/${defaultCurrentUser.username}`
                ? 'ring-2 rounded-full border-red-blue '
                : 'ring-2 rounded-full border-red-500'
            }
          >
            <img
              src='myPicture.jpg'
              alt='user avatar'
              className='w-8 h-8 rounded-full border-2 border-black -mt-1'
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
