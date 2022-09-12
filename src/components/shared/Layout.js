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
    <section className=''>
      <SEO title={title} />
      <Navbar minimalNavbar={minimalNavbar} />
      <main className='max-w-2xl m-auto' style={{ marginTop }}>
        <section className=''>
          <div className=''>{children}</div>
        </section>
      </main>
    </section>
  );
}
