// src/services/vehicles.client.ts
"use client";

import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "@/lib/firebase.client";
import type { VehicleCardProps } from "@/types/vehicleCard";

export async function fetchVehicles(opts?: {
  type?: string;
  city?: string;
  take?: number;
}): Promise<VehicleCardProps[]> {
  try {
    const col = collection(db, "vehicles");
    let q: any = col;

    // Optional filters
    if (opts?.type) q = query(col, where("type", "==", opts.type));
    if (opts?.city)
      q = query(col, where("locations", "array-contains", opts.city));

    // Limit documents
    q = query(q, limit(opts?.take ?? 50));

    const snap = await getDocs(q);

    const list = snap.docs.map((d) => {
      return { id: d.id, ...(d.data() as any) };
    });

    return list;
  } catch (err) {
    console.error("Error fetching vehicles:", err);
    return [];
  }
}
