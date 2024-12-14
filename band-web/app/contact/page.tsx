'use client'; // This marks the component as a client component

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-white mb-6">Kontaktujte nás</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white">Jméno</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 bg-gray-700 text-white rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 bg-gray-700 text-white rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white">Zpráva</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-2 bg-gray-700 text-white rounded-md"
            rows={4}
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-yellow-500 text-black p-2 rounded-md">
            Odeslat
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
