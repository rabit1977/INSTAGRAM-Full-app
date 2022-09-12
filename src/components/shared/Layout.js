import React from 'react';
import SEO from './Seo';
import Navbar from '../shared/Navbar';

export default function Layout({
  children,
  title,
  minimalNavbar = false,
  marginTop = 60,
}) {
  return (
    <section className='w-screen'>
      <SEO title={title} />
      <Navbar minimalNavbar={minimalNavbar} className='z-50' />
      <main className='max-w-2xl m-auto' style={{ marginTop }}>
        <section className=''>
          <div className=''>{children}</div>
        </section>
      </main>
    </section>
  );
}
