'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '' // 'success' | 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          message: 'Dziękujemy! Wiadomość została wysłana.',
          type: 'success'
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Wystąpił błąd');
      }
    } catch (error) {
      setStatus({
        loading: false,
        message: error.message || 'Nie udało się wysłać wiadomości. Spróbuj ponownie.',
        type: 'error'
      });
    }
  };
  return (
    <section id="contact" className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Contact Info */}
          <div>
            <h2 className="text-4xl font-light mb-8">Kontakt</h2>
            <p className="text-gray-600 mb-12">
              Jestem tutaj, aby wysłuchać, odpowiedzieć na Twoje pytania i zrealizować wspólnie to, co pomoże osiągnąć oczekiwane rezultaty.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">📍</div>
                <div>
                  <h3 className="font-semibold mb-1">Lokalizacja</h3>
                  <p className="text-gray-600">
                    ul. Poznańska 162/164<br />
                    99-400 Łowicz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">✉️</div>
                <div>
                  <h3 className="font-semibold mb-1">Adres e-mail</h3>
                  <p className="text-gray-600"><a href="mailto:przempal@op.pl">przempal@op.pl</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">📞</div>
                <div>
                  <h3 className="font-semibold mb-1">Numery telefonu</h3>
                  <p className="text-gray-600">
                    <a href="tel:+48502919192">502 919 192</a><br />
                    <a href="tel:+48604411266">604 411 266</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-light mb-6">Formularz kontaktowy</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Imię i nazwisko"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Numer telefonu"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Adres e-mail"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Wiadomość"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full bg-[#b5a397] text-white py-3 px-6 rounded hover:bg-[#a39387] transition-colors ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status.loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.57539916884!2d19.918683077151663!3d52.12385397196009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471be941ee1042f9%3A0x12d272ecbaeed9b9!2sPrzempal!5e0!3m2!1spl!2spl!4v1745449689569!5m2!1spl!2spl"
          className="w-full h-full"
          style={{ border: 'none' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}