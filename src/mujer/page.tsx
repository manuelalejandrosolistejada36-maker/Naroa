import WomanSection from './girl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mujeres | Legado Solis',
  description: 'Colección minimalista para mujeres de Legado Solis',
};

export default function WomanPage() {
  return (
    <>
      <Navbar />
      <main>
        <WomanSection />
      </main>
      <Footer />
    </>
  );
}