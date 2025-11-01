import React, { useState } from 'react';
import Image from 'next/image';
import BookingModal from './BookingModal';
import { Users, Gauge, Battery, Zap } from 'lucide-react';
import type { VehicleCardProps } from '@/types/vehicleCard';

const VehicleCard = ({
                       id,
                       vehicleName,
                       imageUrl,
                       perDayPrice,
                       capacity,
                       range,
                       doors,
                       category,
                       features = [],
                     }: VehicleCardProps) => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 px-6 py-6 cursor-pointer group">
        {/* Vehicle Image */}
        <div className="vehicle-image-container mb-4 p-6 flex items-center justify-center animate-float">
          <div className="w-full h-36">
            <Image
              src={imageUrl}
              alt={vehicleName}
              className="w-full transition group-hover:rotate-6 group-hover:scale-125"
              width={408}
              height={272}
            />
          </div>
        </div>

        {/* Name & Price */}
        <div className="mb-6">
          <div className="flex flex-row justify-between gap-2">
            <div>
              <h3 className="font-semibold text-xl text-zinc-950 group-hover:text-blue-700 transition-colors">
                {vehicleName}
              </h3>
              <p className="text-base text-zinc-500 group-hover:text-blue-600 transition-colors">
                Starting from
              </p>
            </div>
            <div>
              <p className="text-xl font-light tracking-tight group-hover:text-blue-700 transition-colors">
                ${perDayPrice}
                <span className="text-xs font-normal text-muted-foreground group-hover:text-blue-600 transition-colors">
                  /day
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center justify-center p-3 bg-gray-100 rounded-xl group-hover:bg-blue-100 transition-colors">
            <Users className="h-5 w-5 mb-1 text-primary/70 group-hover:text-blue-600 transition-colors" />
            <p className="text-xs text-muted-foreground group-hover:text-blue-600 transition-colors">
              Capacity
            </p>
            <p className="font-medium group-hover:text-blue-700 transition-colors">
              {capacity || 'N/A'}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-3 bg-gray-100 rounded-xl group-hover:bg-blue-100 transition-colors">
            <Gauge className="h-5 w-5 mb-1 text-primary/70 group-hover:text-blue-600 transition-colors" />
            <p className="text-xs text-muted-foreground group-hover:text-blue-600 transition-colors">
              Range
            </p>
            <p className="font-medium group-hover:text-blue-700 transition-colors">
              {range || 'N/A'}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-3 bg-gray-100 rounded-xl group-hover:bg-blue-100 transition-colors">
            {doors ? (
              <>
                <Battery className="h-5 w-5 mb-1 text-primary/70 group-hover:text-blue-600 transition-colors" />
                <p className="text-xs text-muted-foreground group-hover:text-blue-600 transition-colors">
                  Doors
                </p>
                <p className="font-medium group-hover:text-blue-700 transition-colors">
                  {doors}
                </p>
              </>
            ) : (
              <>
                <Zap className="h-5 w-5 mb-1 text-primary/70 group-hover:text-blue-600 transition-colors" />
                <p className="text-xs text-muted-foreground group-hover:text-blue-600 transition-colors">
                  Power
                </p>
                <p className="font-medium group-hover:text-blue-700 transition-colors">
                  Gas/Electric
                </p>
              </>
            )}
          </div>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-medium mb-2 group-hover:text-blue-700 transition-colors">
              Features
            </p>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-50 px-2 py-1 rounded-md group-hover:bg-blue-200 group-hover:text-blue-700 transition-colors"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Booking Button */}
        <div className="mt-auto">
          <button
            className="w-full booking-button bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 transition-colors"
            onClick={() => setBookingModalOpen(true)}
          >
            REQUEST A QUOTE
          </button>
        </div>
      </div>

      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        vehicleName={vehicleName}
      />
    </>
  );
};

export default VehicleCard;
