import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/shared/Layout';

export default function NotFoundPage() {
  return (
    <Layout minimalNavbar title='Page Not Found' marginTop={100}>
      <div className='flex flex-col items-center space-y-2'>
        <h1 className='text-2xl font-semibold'>
          Sorry this page isn't available.
        </h1>
        <p className='font-normal'>
          The link you are trying to access may have been removed.{' '}
          <span className='text-blue-500 text-lg font-medium'>
            <Link to='/'>Go back to Instagram</Link>
          </span>
        </p>
      </div>
    </Layout>
  );
}
