import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { contactSectionData } from '../data/contactSectionData';

const ContactSection: React.FC = () => {
    const contacts = contactSectionData;

    return (
        <div className="bg-background p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-accent mb-6">Kontakty</h2>
            <ul className="space-y-4">
                {contacts.map((contact) => (
                    <li key={contact.id} className="flex items-center space-x-4">
                        {/* Ikona podle typu kontaktu */}
                        {contact.type === 'email' ? (
                            <EnvelopeIcon className="h-6 w-6 text-accent" aria-hidden="true" />
                        ) : (
                            <PhoneIcon className="h-6 w-6 text-accent" aria-hidden="true" />
                        )}
                        {/* Jméno a hodnota kontaktu */}
                        <div>
                            <p className="text-sm font-medium text-foreground">{contact.name}</p>
                            <p className="text-base text-secondary">{contact.value}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactSection;
