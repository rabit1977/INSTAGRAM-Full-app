import React from 'react';
import SEO from './Seo';
import Navbar from '../shared/Navbar';

export default function Layout({
  children,
  title,
  minimalNavbar = false,
  marginTop = 100,
}) {
  return (
    <section className='w-screen'>
      <SEO title={title} />
      <Navbar minimalNavbar={minimalNavbar} />
      <main className='' style={{ marginTop }}>
        <section className=''>
          <div className=''>{children}</div>
        </section>
      </main>
    </section>
  );
}
