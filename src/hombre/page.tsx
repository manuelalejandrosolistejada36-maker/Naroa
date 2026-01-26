import ManSection from './man';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Hombres | Naroa',
  description: 'Colección minimalista para hombres de Naroa',
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