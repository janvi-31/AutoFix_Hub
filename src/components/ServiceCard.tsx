import React from 'react';
import { Clock, WrenchIcon } from 'lucide-react';
import { ServiceType } from '../types';

interface ServiceCardProps {
  service: ServiceType;
  onSelect: (service: ServiceType) => void;
  isSelected: boolean;
}

export default function ServiceCard({ service, onSelect, isSelected }: ServiceCardProps) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-all cursor-pointer ${
        isSelected
          ? 'bg-blue-50 border-2 border-blue-500'
          : 'bg-white hover:shadow-lg border-2 border-transparent'
      }`}
      onClick={() => onSelect(service)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
        <WrenchIcon className="w-6 h-6 text-blue-500" />
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500">
          <Clock className="w-4 h-4 mr-2" />
          <span>{service.duration}</span>
        </div>
        <span className="text-lg font-bold text-blue-600">${service.price}</span>
      </div>
    </div>
  );
}