import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Vans & Utes - Get in Touch",
  description: "Contact Vans & Utes for vehicle rental inquiries, bookings, or support. Reach out via email, phone, or visit our office in Sydney.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </>
  );
};

export default ContactPage;
