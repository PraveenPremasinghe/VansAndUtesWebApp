import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import ScrollUp from "@/components/Common/ScrollUp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "../components/Vehicle";
import Testimonials from "@/components/Testimonials";
import { getAllBlogs } from "@/data/mockBlogs";
import { Metadata } from "next";
import { TextReveal } from "../components/aceternity-ui/TextReveal";

export const metadata: Metadata = {
  title: "Vans & Utes for Hire - Vehicle Rental Service",
  description:
    "Rent reliable and affordable vans, utes, and utility vehicles for all your transportation needs. Professional vehicle rental service with competitive pricing and exceptional customer support.",
};

export default function Home() {
  // Safely get blogs with error handling
  let posts: ReturnType<typeof getAllBlogs> = [];
  try {
    posts = getAllBlogs() || [];
  } catch (error) {
    console.error("Error loading blogs:", error);
    posts = [];
  }

  // Ensure posts is an array
  const validPosts = Array.isArray(posts) ? posts : [];

  return (
    <main className="bg-zinc-50">
      <ScrollUp />
      <Hero />
      <Pricing />
      <TextReveal>Your journey begins with a tap.</TextReveal>
      <Features />
      <About />
      <Testimonials />
      <Faq />
      {validPosts.length > 0 && <HomeBlogSection posts={validPosts} />}
    </main>
  );
}
