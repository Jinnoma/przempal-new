'use client';
import { useState } from 'react';

const offerData = [
  {
    id: 1,
    title: 'Europalety',
    description: 'Skup i sprzedaż europalet nowych i używanych',
    images: [
      '/images/europaleta-1.jpeg',
      '/images/europaleta-2.jpeg',
      '/images/europaleta-3.jpeg'
    ],
    details: [
      'Zgodne z normami UIC 435-2',
      'Wymiary: 1200 x 800 x 144 mm',
      'Nośność: do 1500 kg'
    ]
  },
  {
    id: 2,
    title: 'Palety przemysłowe',
    description: 'Skup i sprzedaż palet przemysłowych',
    images: [
      '/images/paleta-przemyslowa-1.jpeg',
      '/images/paleta-przemyslowa-2.jpeg'
    ],
    details: [
      'Dostępne różne wymiary',
      'Wytrzymała konstrukcja',
      'Do zastosowań przemysłowych'
    ]
  },
  {
    id: 3,
    title: 'Zbiorniki Mauzer',
    description: 'Skup i sprzedaż zbiorników 1000l i 600l',
    images: [
      '/images/zbiornik-1.jpg',
      '/images/zbiornik-2.jpg'
    ],
    details: [
      'Pojemności: 600l i 1000l',
      'Na metalowej lub plastikowej podstawie',
      'Idealne do magazynowania cieczy'
    ]
  }
];

export default function Offer() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (!isModalOpen) return;
    
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    } else if (e.key === 'ArrowRight' && selectedItem) {
      setSelectedImageIndex((prev) => 
        prev < selectedItem.images.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowLeft' && selectedItem) {
      setSelectedImageIndex((prev) => prev > 0 ? prev - 1 : prev);
    }
  };

  return (
    <section id="offer" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-light mb-6 text-center">Nasza oferta</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Oferujemy szeroki wybór palet i zbiorników najwyższej jakości
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerData.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div 
                className="relative aspect-video overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedItem(item);
                  setSelectedImageIndex(0);
                  setIsModalOpen(true);
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className={`w-full h-full ${
                    item.id === 1 ? 'object-cover bg-gray-200 object-center' : 
                    item.id === 3 ? 'object-contain p-2' : 
                    'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 px-4 py-2 rounded-full flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">{item.images.length} zdjęć</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-light mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <button 
                  onClick={() => {
                    setSelectedItem(item);
                    setSelectedImageIndex(0);
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-gray-100 hover:bg-blue-50 text-gray-800 hover:text-blue-600 font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Zobacz galerię
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <div>
                <h3 className="text-2xl font-light">{selectedItem.title}</h3>
                <p className="text-sm text-gray-500">Zdjęcie {selectedImageIndex + 1} z {selectedItem.images.length}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video">
                <img
                  src={selectedItem.images[selectedImageIndex]}
                  alt={`${selectedItem.title} - zdjęcie ${selectedImageIndex + 1}`}
                  className={`w-full h-full object-contain bg-gray-100 ${
                    selectedItem.id === 1 && selectedImageIndex === 0 ? 'max-w-[80%] mx-auto' : ''
                  }`}
                />
              </div>
              {selectedImageIndex > 0 && (
                <button
                  onClick={() => setSelectedImageIndex(prev => prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {selectedImageIndex < selectedItem.images.length - 1 && (
                <button
                  onClick={() => setSelectedImageIndex(prev => prev + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
            <div className="p-4 border-t bg-gray-50 overflow-x-auto">
              <div className="flex gap-2">
                {selectedItem.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === selectedImageIndex ? 'border-blue-500 shadow-lg scale-105' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}