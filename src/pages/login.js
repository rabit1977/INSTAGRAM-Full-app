import React from 'react';
import { AiFillFacebook, AiOutlineFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/Seo';

export default function LoginPage() {
  return (
    <>
      <SEO title='Login' />
      <section className='flex flex-col w-screen h-screen'>
        <article className='bg-white w-80 h-auto space-y-4 flex justify-center flex-col border-2 border-gray-300 rounded-md p-8 shadow-lg m-auto'>
          <div className='space-y-4 flex justify-center flex-col'>
            <form className='flex flex-col'>
              <label className='font-light mb-2 tracking-wider'>Username</label>
              <input
                className='border  p-2 rounded-md font-normal shadow-sm hover:shadow-md outline-none focus:border-blue-400 tracking-wider mb-1'
                type='text'
                placeholder='Username'
                autocomplete='username'
              />
              <label className='font-light mb-2 tracking-wider'>Password</label>
              <input
                className='border  p-2 rounded-md font-normal shadow-sm hover:shadow-md outline-none focus:border-blue-400 tracking-wider mb-1'
                type='password'
                placeholder='Password'
                autocomplete='current-password'
              />
              <button
                className='w-full mt-6 bg-blue-600/80 text-white font-medium tracking-wider p-2 px-3'
                type='submit'
              >
                Login
              </button>
            </form>
            <div>
              <div></div>
              <div>
                <h4>OR</h4>
              </div>
              <div></div>
            </div>
            <LoginWithFacebook />
            <button type='submit'>
              <h4> Forgot password!</h4>
            </button>
          </div>
          <div>
            <p> Don't have an account</p>
            <Link to='/accounts/emailsignup'>
              <button>Sign up</button>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}

function LoginWithFacebook({ color, iconColor }) {
  const facebookIcon = (iconColor = 'blue' ? (
    <AiFillFacebook />
  ) : (
    <AiOutlineFacebook />
  ));
  return (
    <button>
      {facebookIcon}
      Log In with Facebook
    </button>
  );
}
