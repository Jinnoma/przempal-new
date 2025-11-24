'use client';

import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-white/90 backdrop-blur-sm shadow">
      <span
        className="font-bold text-lg cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Przempal
      </span>
      <ul className="flex gap-8">
        <li><a href="#about" className="hover:text-blue-600 transition-colors">O nas</a></li>
        <li><a href="#offer" className="hover:text-blue-600 transition-colors">Oferta</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition-colors">Kontakt</a></li>
      </ul>
    </nav>
  );
}