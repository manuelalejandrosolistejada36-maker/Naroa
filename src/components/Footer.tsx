import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-200 text-black py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Legado Solis. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
