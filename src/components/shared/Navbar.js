import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InstagramLogo, Spinner } from '../../utils/icons';

export default function Navbar({ minimalNavbar }) {
  return (
    <div className='flex justify-between items-center py-2 border-b z-50 bg-gray-50 border-black/30 shadow-md fixed top-0 left-0 right-0'>
      <Logo />
      {/* {!minimalNavbar && <Search />}
        {!minimalNavbar && <Links />} */}
      <div className='flex mr-8 space-x-2'>
        {!minimalNavbar && (
          <>
            <Search />
            <Links />
          </>
        )}
      </div>
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
  const [query, setQuery] = useState('');
  let loading = true;

  function handleClearInput() {
    setQuery('');
  }

  return (
    <div className=''>
      <input
        className='border-2 border-black'
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
  );
}

function Links() {
  return <div>Links</div>;
}
