"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@headlessui/react";
import {
  ChevronRight,
  Play,
  Car,
  MapPin,
  Award,
  ArrowUp,
  ArrowDown,
  Eye,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";
import { fetchVehicles } from "@/services/vehicles.client";
import type { VehicleCardProps } from "@/types/vehicleCard";

const Hero = () => {
  const [featuredVehicle, setFeaturedVehicle] = useState<VehicleCardProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedVehicle = async () => {
      try {
        // Fetch all vehicles from the fleet
        const vehicles = await fetchVehicles();
        if (vehicles.length > 0) {
          // Select a random vehicle from the fleet to feature
          const randomIndex = Math.floor(Math.random() * vehicles.length);
          setFeaturedVehicle(vehicles[randomIndex]);
        }
      } catch (error) {
        console.error("Error loading featured vehicle:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedVehicle();
  }, []);

  const stats = [
    {
      number: "7+",
      label: "Years",
      description: "In the rental market, premium vehicles redefine luxury travel experiences"
    },
    {
      number: "72+",
      label: "Cars",
      description: "Premium cars redefine luxury travel with unmatched style and sophistication"
    },
    {
      number: "1+",
      label: "bln.",
      description: "Our fleet is valued highly, representing premium quality and European sophistication"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Hero Background with Car Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-zinc-900/90" />
         

          {/* Background Car Image */}
          <div className="absolute inset-0 opacity-1 dark:opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury sports car"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

   

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md dark:bg-white/5"
            >
              <span className="text-yellow-400">★</span>
              <span>Just fast and elegant Style</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
            >
              Rent Car In{" "}
              <span className="block bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFCC00] bg-clip-text text-transparent">
                Worldwide
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-lg text-lg leading-relaxed text-white/90"
            >
              Experience the ultimate driving pleasure with our premium vehicle collection.
              Luxury, comfort, and style all in one package. Book your dream car today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-gray-900 transition-all hover:bg-gray-100 hover:shadow-xl hover:shadow-white/20"
              >
                Explore Now
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50">
                <Play className="h-5 w-5" />
                Watch Video
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-3 text-white">
                <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Premium Vehicles</p>
                  <p className="text-sm text-white/70">72+ Cars</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Global Coverage</p>
                  <p className="text-sm text-white/70">Worldwide</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Featured Vehicle Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {isLoading ? (
              <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
              </div>
            ) : featuredVehicle ? (
              <div className="group relative aspect-square w-full overflow-hidden      ">
                {/* Car Image - Fixed square container */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={featuredVehicle.imageUrl || "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"}
                    alt={featuredVehicle.vehicleName}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                
                  
                   
                </div>

                {/* Card Content - Overlaid on bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  {/* Vehicle Info + Price Section */}
                  <div className="mb-4 flex items-center justify-between">
                    {/* Left: Vehicle Info */}
                    <div className="flex-1">
                      <h3 className="mb-1 text-2xl font-bold text-white  ">
                        {featuredVehicle.vehicleName}
                      </h3>
                      {featuredVehicle.category && (
                        <p className="text-sm text-white">
                          {featuredVehicle.category}
                        </p>
                      )}
                    </div>

                    {/* Right: Price */}
                    <div className="text-right">
                      <span className="text-3xl font-bold text-white">
                        ${parseFloat(featuredVehicle.perDayPrice || "0").toLocaleString()}
                      </span>
                      <span className="ml-1 text-sm text-white ">/day</span>
                    </div>
                  </div>

                 

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white  "
                      onClick={() => {
                        // Scroll to pricing section
                        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Rent Now
                    </Button>
                    
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-square w-full rounded-2xl bg-white/10 p-12 text-center backdrop-blur-md">
                <Car className="mx-auto mb-4 h-16 w-16 text-white/50" />
                <p className="text-white/70">No vehicles available</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-20 border-t border-white/10 bg-white/5 backdrop-blur-xl dark:bg-black/20"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="mb-3 flex items-center justify-center gap-2">
                  <span className="text-5xl font-bold text-white lg:text-6xl">
                    {stat.number}
                  </span>
                  <span className="text-xl font-semibold text-white/80 lg:text-2xl">
                    {stat.label}
                  </span>
                </div>
                <p className="mx-auto max-w-sm text-sm leading-relaxed text-white/70 lg:text-base">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
