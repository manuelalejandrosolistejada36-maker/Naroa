import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Whoweare from '../components/Whoweare'
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Whoweare />
      <Contact />
      <Footer />
    </main>
  );
}
