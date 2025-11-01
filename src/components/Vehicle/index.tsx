"use client";
import SectionTitle from "../Common/SectionTitle";
import VehicleCard from "@/components/Vehicle/VehicleCard";
import { useEffect, useState } from "react";
import { fetchVehicles } from "@/services/vehicles.client";
import type { VehicleCardProps } from "@/types/vehicleCard";
import FullPageLoader from "@/components/Common/FullPageLoader";


const Vehicle = () => {
  const [vehicles, setVehicles] = useState<VehicleCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVehicles = async () => {
      setLoading(true);
      const data = await fetchVehicles(); // Remove filters for testing
      console.log('Fetched vehicles in component:', data);
      setVehicles(data);
      setLoading(false);
    };
    getVehicles();
  }, []);

  if (loading) return <FullPageLoader message="Loading our amazing fleet..." />;
  if (!vehicles.length) return <p className="py-10 text-center">No vehicles found.</p>;



  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden   pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Popular Cars"
            title="Our Vehicle Fleet"
            paragraph="Explore our diverse selection of vans and utes, perfect for any journey. Whether you need a vehicle for work, travel, or moving, we have the right option for you."
            center
          />
        </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {vehicles.map((v) => (
    <VehicleCard key={v.id} {...v} />
  ))}
</div>


        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
         {/*{items.map((v) => (*/}
          {/*  <VehicleCard*/}
          {/*    key={vehicle.id}*/}
          {/*    name={vehicle.name}*/}
          {/*    imageUrl={vehicle.imageUrl}*/}
          {/*    price={vehicle.price}*/}
          {/*    capacity={vehicle.capacity}*/}
          {/*    range={vehicle.range}*/}
          {/*    electric={vehicle.electric}*/}
          {/*    features={vehicle.features}*/}
          {/*    className="animate-fade-in opacity-0"*/}
          {/*    style={{*/}
          {/*      animationDelay: `${index * 0.1}s`,*/}
          {/*      animationFillMode: "forwards",*/}
          {/*    }}*/}
          {/*  />*/}
          {/*))}*/}
        </div>
      </div>
    </section>
  );
};

export default Vehicle;
