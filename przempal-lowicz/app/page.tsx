import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Offer from '../components/Offer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="pt-16"> 
      <Navbar />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="offer">
          <Offer />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}