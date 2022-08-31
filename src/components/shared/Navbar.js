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
    <div className='border-b shadow-md'>
      <Link to='/'>
        <div className=''>
          <AiOutlineInstagram size='50' />
        </div>
      </Link>
    </div>
  );
}
