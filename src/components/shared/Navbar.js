import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';

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
        <div className='ml-12 py-2'>
          <AiOutlineInstagram size='60' />
        </div>
      </Link>
    </div>
  );
}
