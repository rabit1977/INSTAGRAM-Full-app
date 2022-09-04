import React from 'react';
import { Spinner } from '../../utils/icons';

export default function LoadingScreen() {
  return (
    <section className='flex justify-center items-center'>
      <span>
        <Spinner />
      </span>
    </section>
  );
}
