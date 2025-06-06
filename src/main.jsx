import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ReadMore from './pages/ReadMore';
import Navbar from './pages/Navbar';
import Management from './pages/Management';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/read_more" element={<ReadMore />} />
        <Route path="/chairman" element={<Management />} />
        <Route path="/managing_director" element={<Management />} />
        <Route path="/joint_managing_director" element={<Management />} />
        <Route path="/director_technical" element={<Management />} />
        <Route path="/director_finance" element={<Management />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
