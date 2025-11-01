import { Feature } from "@/types/feature";
import { Car, Calendar, KeyRound, Cpu, Settings, ShieldCheck, CreditCard, ScrollText, Timer } from "lucide-react";

const featuresData: Feature[] =
  [
    {
      id: 1,
      title: "Purpose-built for LLMs",
      paragraph: "Language models with reasoning capabilities for effective responses to complex queries.",
      icon: Cpu,
    },
    {
      id: 2,
      title: "Designed for simplicity",
      paragraph: "Create, manage, and deploy AI Agents easily, even without technical skills.",
      icon: Settings,
    },
    {
      id: 3,
      title: "Engineered for security",
      paragraph: "Enjoy peace of mind with robust encryption and strict compliance standards.",
      icon: ShieldCheck,
    }
  ];

export const rentalProcessData = [
  {
    id: 1,
    title: "Choose Your Vehicle",
    description: "Browse our fleet online or get recommendations via chat. Filter by size, capacity, and budget. Check real-time availability.",
    icon: Car,
    cta: "Explore Our Fleet",
    ctaLink: "/fleet",
    imageUrl: "/images/choose-vehicle.jpg"
  },
  {
    id: 2,
    title: "Book Online or Call Us",
    description: "Select pickup/drop-off dates & location. Add extras (insurance, GPS, child seats). Pay securely online or reserve with a call.",
    icon: Calendar,
    cta: "Get an Instant Quote",
    ctaLink: "/booking",
    imageUrl: "/images/book-online.jpg"
  },
  {
    id: 3,
    title: "Pick Up & Hit the Road",
    description: "Bring your driver's license, ID, and payment method. Quick inspection & paperwork (digital signing available). Get a brief vehicle orientation.",
    icon: KeyRound,
    cta: "What to Bring for Pickup",
    ctaLink: "/requirements",
    imageUrl: "/images/pickup-road.jpg"
  }
];

export const rentalRequirementsData = [
  {
    id: 1,
    title: "Driver's License & Age",
    description: "Valid driver's license (local or international). Minimum age: 21 years (or 18 with young driver fee).",
    icon: KeyRound,
  },
  {
    id: 2,
    title: "Payment Method",
    description: "Credit/debit card in the driver's name. Security deposit (refundable).",
    icon: CreditCard,
  },
  {
    id: 3,
    title: "Insurance Options",
    description: "Basic coverage included. Upgrade options (full coverage, roadside assistance).",
    icon: ScrollText,
  },
  {
    id: 4,
    title: "Rental Duration",
    description: "Minimum rental: 4 hours (for some vans). Long-term discounts (weekly/monthly).",
    icon: Timer,
  },
];

export const howItWorksStepsData = [
  {
    id: 1,
    stepNum: "01.",
    title: "Build & deploy your agent",
    description: "Train an agent on your business data, configure the actions it can take, then deploy it for your customers.",
  },
  {
    id: 2,
    stepNum: "02.",
    title: "Agent solves your customers' problems",
    description: "",
  },
  {
    id: 3,
    stepNum: "03.",
    title: "Refine & optimize",
    description: "",
  },
  {
    id: 4,
    stepNum: "04.",
    title: "Route complex issues to a human",
    description: "",
  },
  {
    id: 5,
    stepNum: "05.",
    title: "Review analytics & insights",
    description: "",
  },
];

export default featuresData;
