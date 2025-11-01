import type { Timestamp } from 'firebase/firestore';

export interface VehicleCardProps {
  id: string;
  vehicleName: string;
  imageUrl: string;
  perDayPrice: string;
  capacity?: string;
  range?: string;
  doors?: string;
  category?: string;
  features?: string[];
  timestamp: Timestamp;
}
