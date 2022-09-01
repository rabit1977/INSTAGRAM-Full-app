import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/Seo';
import { LoginWithFacebook } from './login';

export default function SignupPage() {
  return (
    <>
      <SEO title='Sign Up' />
      <section className='flex flex-col justify-center h-screen'>
        <div>
          <article className='bg-white w-[360px] h-auto space-y-4 flex justify-center flex-col rounded-md p-8 border-2 border-black/20 shadow-xl m-auto mb-4'>
            <div className='flex justify-center flex-col'>
              <img src='/Instagram.logo.png' alt='instagram logo' />
              <h2 className='text-center text-lg mb-6'>
                Sign up to see photos and videos from your friends.
              </h2>
              <LoginWithFacebook />
              <div className='flex justify-center items-center my-4'>
                <hr className='h-0.5 w-full' />
                <h4 className='flex justify-center mx-2'>OR</h4>
                <hr className='h-0.5 w-full' />
              </div>
              <form className='flex flex-col'>
                <input
                  className='border border-b-2 border-b-slate-400  p-2 font-normal shadow-sm hover:bg-gray-100 outline-none focus:border-blue-400 bg-gray-50  tracking-wider mb-3'
                  type='email'
                  placeholder='Username'
                  label='email'
                />
                <input
                  className='border border-b-2 border-b-slate-400  p-2 font-normal shadow-sm hover:bg-gray-100 outline-none focus:border-blue-400 bg-gray-50  tracking-wider mb-3'
                  label='Full Name'
                  placeholder='Full name'
                />
                <input
                  className='border border-b-2 border-b-slate-400  p-2 font-normal shadow-sm hover:bg-gray-100 outline-none focus:border-blue-400 bg-gray-50  tracking-wider mb-3'
                  label='Full Name'
                  placeholder='Username'
                  autocomplete='username'
                />
                <input
                  className='border border-b-2 border-b-slate-400  p-2 font-normal shadow-sm hover:bg-gray-100 outline-none focus:border-blue-400 bg-gray-50  tracking-wider mb-3'
                  label='Password'
                  type='password'
                  placeholder='password'
                  autocomplete='new password'
                />
                <button
                  className='mt-4 text-white font-semibold bg-blue-500 py-2 px-3 flex justify-around hover:opacity-90 transition duration-150 items-center rounded-md'
                  type='submit'
                >
                  Sign Up
                </button>
              </form>
            </div>
          </article>
          <div className='bg-white w-[360px] flex justify-center rounded-md p-8 shadow-xl mx-auto border-2 border-black/20'>
            <p className='font-light'>Have an account?</p>
            <Link to='/accounts/login'>
              <button type='button' className='ml-2 underline text-blue-500'>
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
