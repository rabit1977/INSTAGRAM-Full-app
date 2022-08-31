import React from 'react';
import SEO from './Seo';
import Navbar from '../shared/Navbar';

export default function Layout({ children, title, marginTop = 60 }) {
  return (
    <section className=''>
      <SEO title={title} />
      <Navbar />
      <main className='' style={{ marginTop }}>
        <section className=''>
          <div className=''>{children}</div>
        </section>
      </main>
    </section>
  );
}
