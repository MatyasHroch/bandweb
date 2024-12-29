import React from 'react';
import ContactSection from '../../components/ContactSection';

const Contact: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center mb-8 text-accent">
        Kontakt
      </h1>
      <ContactSection />
    </div>
  );
};

export default Contact;
