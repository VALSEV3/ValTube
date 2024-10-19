import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';

function App() {
 

  return (
  <>
<Router>
  <Routes>
    <Route path="/ValTube" element={<Home />}/>
    <Route path="/" element={<Home />}/>
  </Routes>
</Router>
  </>
  )
}

export default App
