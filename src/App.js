import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedPage from './pages/feed';
import ExplorePage from './pages/explore';
import ProfilePage from './pages/profile';
import PostPage from './pages/post';
import EditProfilePage from './pages/editProfile';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import NotFoundPage from './pages/notFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FeedPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/:username' element={<ProfilePage />} />
        <Route path='/p/:postId' element={<PostPage />} />
        <Route path='/accounts/edit' element={<EditProfilePage />} />
        <Route path='/accounts/login' element={<LoginPage />} />
        <Route path='/accounts/emailsignup' element={<SignUpPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
