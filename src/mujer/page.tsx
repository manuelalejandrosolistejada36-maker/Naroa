import WomanSection from './girl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mujeres | Naroa',
  description: 'Colección minimalista para mujeres de Naroa',
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