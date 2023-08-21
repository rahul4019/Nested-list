import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import UserPage from './pages/UserPage';
 

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-page" element={<UserPage />} />
       
    </Routes>
  );
}

export default App;
