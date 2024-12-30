import React from 'react';
import ContactSection from '../../components/ContactSection';
import Socials from '../../components/Socials';

const Contact: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center mb-8 text-accent">
        Kontakt
      </h1>
      <div className="flex justify-between flex-col md:flex-row">
        <ContactSection />
        <Socials />
      </div>
    </div>
  );
};

export default Contact;
