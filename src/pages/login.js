import React from 'react';
import { AiFillFacebook, AiOutlineFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/Seo';

export default function LoginPage() {
  return (
    <>
      <SEO title='Login' />
      <section className='flex flex-col justify-center h-screen'>
        <div className=''>
          <article className='bg-white w-[360px] h-auto space-y-4 flex justify-center flex-col rounded-md p-8 shadow-xl m-auto mb-4 border-2 border-black/20'>
            <div className='space-y-4 flex justify-center flex-col'>
              <img src='/Instagram.logo.png' alt='instagram logo' />
              <h2 className='text-center text-lg mb-6'> </h2>
              <form className='flex flex-col'>
                <input
                  className='border border-b-2 border-b-slate-400 p-2  font-normal shadow-sm bg-slate-50 hover:bg-gray-100 outline-none focus:border-blue-400 tracking-wider mb-3'
                  type='text'
                  placeholder='Username'
                  autocomplete='username'
                />
                <input
                  className='border border-b-2 border-b-slate-400  p-2 font-normal shadow-sm bg-slate-50 hover:bg-gray-100 outline-none focus:border-blue-400 tracking-wider mb-3'
                  type='password'
                  placeholder='Password'
                  autocomplete='current-password'
                />
                <button
                  className='mt-4 w-full text-white font-semibold bg-blue-500 py-2 text-xl tracking-wider px-3 flex justify-around hover:opacity-90 transition duration-150 items-center rounded-md'
                  type='submit'
                >
                  Login
                </button>
              </form>
              <div className='flex justify-center items-center'>
                <hr className='h-0.5 w-full' />
                <h4 className='flex justify-center mx-2'>OR</h4>
                <hr className='h-0.5 w-full' />
              </div>
              <LoginWithFacebook />
              <button type='submit'>
                <h4> Forgot password!</h4>
              </button>
            </div>
          </article>
          <div className='bg-white w-[360px] flex justify-center rounded-md p-8 shadow-xl mx-auto border-2 border-black/20'>
            <p className='font-light'>Don't have an account?</p>
            <Link to='/accounts/emailsignup'>
              <button type='button' className='ml-2 underline text-blue-500'>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function LoginWithFacebook({ color, iconColor }) {
  const facebookIcon = (iconColor = 'blue' ? (
    <AiFillFacebook size={35} className='rounded-full' fill='white' />
  ) : (
    <AiOutlineFacebook />
  ));
  return (
    <button
      type='submit'
      className='w-full text-white font-semibold bg-blue-500 py-1 px-3 flex justify-around hover:opacity-90 transition duration-150 items-center rounded-md'
    >
      {facebookIcon}
      Log In with Facebook
    </button>
  );
}
