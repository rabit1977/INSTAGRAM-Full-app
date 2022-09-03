import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function LoadingScreen() {
  return (
    <section className='flex justify-center items-center'>
      <span>
        <FaInstagram size='100' className='opacity-50' />
      </span>
    </section>
  );
}
