import React from 'react';
import { CalendarCheck, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book Appointment',
    description: 'Choose your preferred service and schedule a convenient time'
  },
  {
    icon: Wrench,
    title: 'Service Execution',
    description: 'Our experts perform the required maintenance or repairs'
  },
  {
    icon: CheckCircle,
    title: 'Quality Check',
    description: 'Thorough inspection ensures everything meets our standards'
  }
];

export default function ServiceProcess() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <step.icon className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-blue-200 transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}