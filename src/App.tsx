// import { useState } from 'react';

import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NestedList from './pages/NestedList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nested-list" element={<NestedList />} />
    </Routes>
  );
}

export default App;
