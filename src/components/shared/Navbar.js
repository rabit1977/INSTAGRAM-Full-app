import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  InstagramLogo,
  Spinner,
  AddIcon,
  NavLikeIcon,
  LikeActiveIcon,
  ExploreIcon,
  ExploreActiveIcon,
  HomeIcon,
  HomeActiveIcon,
  MyMessages,
  LikeIcon,
} from '../../utils/icons';
import { defaultCurrentUser, getDefaultUser } from '../../data';
import NotificationTooltip from '../notification/NotificationTooltip';
import NotificationList from '../notification/NotificationList';

export default function Navbar({ minimalNavbar }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className='border-b p-1.5 bg-white border-[rgb(219,219,219)] fixed top-0 left-0 right-0'>
      <div className='flex items-center sm:justify-between justify-around m-auto max-w-5xl '>
        <Logo />
        {/* {!minimalNavbar && <Search />}
        {!minimalNavbar && <Links />} */}
        {!minimalNavbar && (
          <>
            <Search location={location} />
            <Links path={path} />
          </>
        )}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className=''>
      <Link to='/'>
        <div className=''>
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
    setResults(Array.from({ length: 5 }, () => getDefaultUser()));
  }, [query]);

  function handleClearInput() {
    setQuery('');
  }

  return (
    <div className='hidden sm:block'>
      <div>
        {hasResults && (
          <div className='absolute bg-white border border-[rgb(219,219,219)] rounded-xl bg flex flex-col'>
            {results.map((result) => (
              <div
                key={result.id}
                className='m-auto'
                onClick={() => {
                  navigate(`/${result.username}`);
                  handleClearInput();
                }}
              >
                <div className='flex hover:bg-slate-100 py-2 border-[rgb(219,219,219)] lg:w-[260px] sm:w-[200px]'>
                  <div className='flex flex-col justify-between items-center capitalize mr-4'>
                    <img
                      src={result.profile_image}
                      alt='user avatar'
                      className='rounded-full md:h-8 md:w-8 h-12 w-12 ring-1 ring-offset-1 ring-slate-600'
                    />
                  </div>
                  <div className='text-sm capitalize'>
                    <p>{result.username}</p>
                    <p>{result.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <input
          className='border-0 bg-[rgba(239,239,239)] py-1.5 pl-2 -ml-12 mr-1 font-light rounded-xl lg:w-[280px] sm:w-[200px]  placeholder:font-light tracking-wide text-md outline-none'
          type='text'
          onChange={(event) => setQuery(event.target.value)}
          // start={<span className='' />}
          open={
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
  const [showTooltip, setTooltip] = useState(false);
  const [showList, setList] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(handleHideTooltip, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function handleToggleList() {
    setList((prev) => !prev);
  }
  function handleHideTooltip() {
    setTooltip(false);
  }

  function handleHideList() {
    setList(false);
  }

  return (
    <div>
      {showList && <NotificationList handleHideList={handleHideList} />}
      <div className='flex space-x-1 md:space-x-2 xl:space-x-6 pr-4'>
        <Link to='/'>{path === '/' ? <HomeActiveIcon /> : <HomeIcon />}</Link>
        <MyMessages />
        <div>
          <AddIcon />
        </div>
        <Link to='/explore'>
          {path === '/explore' ? <ExploreActiveIcon /> : <ExploreIcon />}
        </Link>
        <div
          onClick={handleToggleList}
          showTooltip={showTooltip}
          handleHideTooltip={handleHideTooltip}
          title={<NotificationTooltip />}
        >
          {showList ? <LikeActiveIcon /> : <NavLikeIcon />}
        </div>
        <Link to={`/${defaultCurrentUser.username}`}>
          <div
            className={
              path === `/${defaultCurrentUser.username}`
                ? 'ring-1 rounded-full border-red-blue '
                : 'ring-1 rounded-full border-red-500'
            }
          >
            <img
              src='myPicture.jpg'
              alt='user avatar'
              className='w-8 h-8 rounded-full border border-black -mt-1'
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
