import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
