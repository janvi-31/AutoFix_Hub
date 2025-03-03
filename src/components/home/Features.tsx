import React from 'react';
import { Shield, Clock, Tool, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified Mechanics',
    description: 'Our team consists of certified professionals with years of experience'
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Most services completed same-day with minimal wait times'
  },
  {
    icon: Tool,
    title: 'Modern Equipment',
    description: 'State-of-the-art diagnostic and repair equipment'
  },
  {
    icon: Award,
    title: 'Warranty Assured',
    description: 'All our repairs come with a comprehensive warranty'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}