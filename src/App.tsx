import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import SignUp from './components/signUp/login';
import Profile from './components/profile/profile';
import Video from './components/video/video';
function App() {
  return (
    <Router basename="/ValTube"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Watch" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
