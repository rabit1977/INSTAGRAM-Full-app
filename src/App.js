import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import FeedPage from './pages/feed';
import ExplorePage from './pages/explore';
import ProfilePage from './pages/profile';
import PostPage from './pages/post';
import EditProfilePage from './pages/editProfile';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import NotFoundPage from './pages/notFound';
import { useEffect, useRef } from 'react';
import PostModal from './components/post/PostModal';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, navigate);
  const prevLocation = useRef(location);
  const modal = location.state?.modal;

  useEffect(() => {
    if (navigate.action !== 'POP' && !modal) {
      prevLocation.current = location;
    }
  }, [location, modal, navigate.action]);

  const isModalOpen = modal && prevLocation.current !== location;

  return (
    <>
      <Routes location={isModalOpen ? prevLocation.current : location}>
        <Route path='/' element={<FeedPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/:username' element={<ProfilePage />} />
        <Route path='/p/:postId' element={<PostPage />} />
        <Route path='/accounts/edit' element={<EditProfilePage />} />
        <Route path='/accounts/login' element={<LoginPage />} />
        <Route path='/accounts/emailsignup' element={<SignUpPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {isModalOpen && (
        <Routes>
          {' '}
          <Route path='/p/:postId' element={<PostModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
