import React from 'react';
import { rentalProcessData } from './featuresData';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";

const RentalProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

      <div className="mb-[60px]">
        <SectionTitle
          subtitle="Our Rental Process"
          title="Rental Process"
          paragraph="Renting a vehicle with us is simple and straightforward. Follow these easy steps to get on the road."
          center
        />

        </div>


        
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-zinc-200">
          {rentalProcessData.map((step, index) => (
            <div 
              key={step.id} 
              className={
                `relative flex flex-col items-start rounded-3xl p-8 border border-zinc-200  transition-all duration-300 transform hover:-translate-y-2 \
                ${index === 0 ? 'bg-white' : ''} \
                ${index === 1 ? 'bg-white' : ''} \
                ${index === 2 ? 'bg-white' : ''}`
              }
            >
              {/* Image at the top */}
              {step.imageUrl && (
                <div className="w-full h-40 rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src={step.imageUrl} 
                    alt={step.title} 
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              {/* Step number */}
              <div className="w-10 h-10 rounded-full bg-white text-blue-600 font-bold flex items-center justify-center mb-6 text-lg border border-gray-200 shadow-md">
                {index + 1}
              </div>

              {/* Icon and Title */}
              <div className="flex items-center mb-4">
        
                <h3 className="font-semibold text-xl text-zinc-950">{step.title}</h3>
              </div>

              {/* Description */}
              <p className="text-base text-zinc-500">{step.description}</p>

           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalProcess; 