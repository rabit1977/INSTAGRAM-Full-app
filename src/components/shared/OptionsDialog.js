import React from 'react';
import { Link } from 'react-router-dom';
import { defaultPost } from '../../data';
import Modal from 'react-modal';

export default function OptionsDialog({ openModal, closeModal }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      position: 'fixed',
      zIndex: 1020,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      className='text-center bg-white  shadow-lg w-96 [&>*]:p-3 flex flex-col rounded-xl divide-y absolute overflow-hidden'
    >
      <button className='hover:bg-slate-100 text-red-600 font-bold'>
        Unfollow
      </button>
      <button className='hover:bg-slate-100'>
        <Link to={`/p/${defaultPost.id}`}>Go to post</Link>
      </button>
      <button className='hover:bg-slate-100'>Share</button>
      <button className='hover:bg-slate-100'>Copy Link</button>
      <button className='hover:bg-slate-100' onClick={closeModal}>
        Cancel
      </button>
    </Modal>
  );
}
