import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { contactSectionData } from '../data/contactSectionData';

const ContactSection: React.FC = () => {
    const contacts = contactSectionData;

    return (
        <div className="bg-background">
            <h2 className="text-2xl font-bold text-accent mb-6">Kontaktní osoby</h2>
            <ul className="space-y-4">
                {contacts.map((contact) => (
                    <li key={contact.id} className="flex items-center space-x-4">
                        {/* Ikona podle typu kontaktu */}
                        {contact.type === 'email' ? (
                            <EnvelopeIcon className="h-10 w-10 text-accent" aria-hidden="true" />
                        ) : (
                            <PhoneIcon className="h-10 w-10 text-accent" aria-hidden="true" />
                        )}

                        {/* Semantické zobrazení kontaktu */}
                        <div>
                            <p className="font-bold text-lg text-foreground">{contact.name}</p>
                            {contact.type === 'email' ? (
                                <a
                                    href={`mailto:${contact.value}`}
                                    className="text-lg text-secondary hover:text-accent"
                                >
                                    {contact.value}
                                </a>
                            ) : (
                                <a
                                    href={`tel:${contact.value}`}
                                    className="text-lg text-secondary hover:text-accent"
                                >
                                    {contact.value}
                                </a>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactSection;
