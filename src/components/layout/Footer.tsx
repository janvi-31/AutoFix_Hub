import React from 'react';
import ContactInfo from './footer/ContactInfo';
import BusinessHours from './footer/BusinessHours';
import SocialLinks from './footer/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactInfo />
          <BusinessHours />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}