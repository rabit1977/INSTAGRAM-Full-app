import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramLogo } from '../../utils/icons';

export default function Navbar() {
  return (
    <div className=''>
      <section className=''>
        <Logo />
      </section>
    </div>
  );
}

function Logo() {
  return (
    <div className='flex border-b z-50 bg-gray-50 border-black/30 shadow-md fixed top-0 left-0 right-0 '>
      <Link to='/'>
        <div className='ml-12 pt-3'>
          <InstagramLogo />
        </div>
      </Link>
    </div>
  );
}
