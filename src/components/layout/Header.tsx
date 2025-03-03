import React from 'react';
import { WrenchIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center">
          <WrenchIcon className="w-8 h-8 text-blue-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">AutoCare Service Center</h1>
        </div>
      </div>
    </header>
  );
}