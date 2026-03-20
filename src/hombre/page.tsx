import ManSection from './man';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Hombres | Legado Solis',
  description: 'Colección minimalista para hombres de Legado Solis',
};

export default function ManPage() {
  return (
    <>
      <Navbar />
      <main>
        <ManSection />
      </main>
      <Footer />
    </>
  );
}