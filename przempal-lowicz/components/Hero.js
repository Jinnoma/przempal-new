'use client';

import React from 'react';

export default function Hero() {
  return (
    <div 
      className="relative flex items-center justify-center bg-black"
      style={{ 
        height: '100vh', /* Dokładnie wysokość ekranu */
        maxHeight: '95vh', /* Maksymalnie wysokość ekranu */
        width: '100%',
        overflow: 'hidden', /* Ukryj wszystko co wystaje */
        backgroundImage: "url('/images/palety-magazyn.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Ciemna nakładka */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Treść - zmniejszona, aby zmieścić się na ekranie */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Przempal Łowicz</h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Profesjonalny skup i sprzedaż palet
        </p>
        <a
          href="#offer"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block bg-white hover:bg-gray-100 px-6 py-2 rounded-lg shadow-lg text-base font-semibold transition-colors duration-300"
        >
          Zobacz ofertę
        </a>
      </div>

      {/* Wskaźnik przewijania - przesunięty wyżej */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <p className="text-white text-xs mb-1 font-light">Przewiń w dół</p>
        <svg 
          className="w-5 h-5 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
