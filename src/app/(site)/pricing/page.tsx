import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "../../../components/Vehicle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is pricing page description",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Our Vehicles" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
