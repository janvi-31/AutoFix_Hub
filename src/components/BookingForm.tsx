import React, { useState } from 'react';
import { Car, Calendar, Clock } from 'lucide-react';
import { Vehicle } from '../types';

interface BookingFormProps {
  onSubmit: (vehicle: Vehicle, date: string, time: string) => void;
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const [vehicle, setVehicle] = useState<Vehicle>({
    make: '',
    model: '',
    year: '',
    registrationNumber: ''
  });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(vehicle, date, time);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Car className="w-5 h-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold">Vehicle Details</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Make"
            className="p-2 border rounded-md"
            value={vehicle.make}
            onChange={(e) => setVehicle({ ...vehicle, make: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Model"
            className="p-2 border rounded-md"
            value={vehicle.model}
            onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Year"
            className="p-2 border rounded-md"
            value={vehicle.year}
            onChange={(e) => setVehicle({ ...vehicle, year: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Registration Number"
            className="p-2 border rounded-md"
            value={vehicle.registrationNumber}
            onChange={(e) => setVehicle({ ...vehicle, registrationNumber: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Calendar className="w-5 h-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold">Appointment Details</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="date"
              className="p-2 border rounded-md w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-blue-500 mr-2" />
            <select
              className="p-2 border rounded-md w-full"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select Time</option>
              {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        Book Appointment
      </button>
    </form>
  );
}