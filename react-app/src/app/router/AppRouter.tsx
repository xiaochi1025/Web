import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from '@/pages/home';
import { About } from '@/pages/about';
import './Router.css';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-router">
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <main className="router-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
