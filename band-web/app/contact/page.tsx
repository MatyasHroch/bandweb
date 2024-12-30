import React from 'react';
import ContactSection from '../../components/ContactSection';
import Socials from '../../components/Socials';

const Contact: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-accent">
        Kontakt
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
        <ContactSection />
        <Socials />
      </div>
    </div>
  );
};

export default Contact;
