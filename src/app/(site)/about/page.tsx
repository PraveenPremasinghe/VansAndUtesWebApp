import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vans & Utes - Your Trusted Rental Partner",
  description: "Learn about Vans & Utes, your premier destination for reliable and affordable vehicle rentals. We provide top-quality vans, utes, and utility vehicles with exceptional customer service.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />

    </main>
  );
};

export default AboutPage;
