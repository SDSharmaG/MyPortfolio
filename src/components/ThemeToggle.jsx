// components/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <i className="bi bi-sun-fill"></i>
      ) : (
        <i className="bi bi-moon-fill"></i>
      )}
      
      <style jsx>{`
        .theme-toggle-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--accent);
          border: none;
          color: #0A0A0F;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1000;
          box-shadow: 0 4px 20px var(--accent-glow);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .theme-toggle-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px var(--accent-glow);
        }
        
        @media (max-width: 768px) {
          .theme-toggle-btn {
            width: 45px;
            height: 45px;
            bottom: 20px;
            right: 20px;
            font-size: 1.25rem;
          }
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;