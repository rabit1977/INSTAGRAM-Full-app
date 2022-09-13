import React from 'react';
import Modal from 'react-modal';
import { useNavigate, useParams } from 'react-router-dom';
import Post from './Post';
import { CloseIcon } from '../../utils/icons';

export default function PostModal() {
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log({ postId });

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
    <>
      <Modal
        isOpen
        onRequestClose={() => navigate(-1)}
        style={customStyles}
        className='text-center bg-white  shadow-lg w-96 [&>*]:p-3 flex flex-col rounded-xl divide-y absolute overflow-hidden'
      >
        <Post id={postId} />
      </Modal>
      <div onClick={() => navigate(-1)}>
        <CloseIcon />
      </div>
    </>
  );
}
