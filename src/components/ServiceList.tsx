import React from 'react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function ServiceList() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => {}}
              isSelected={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}