"use client";

import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import { ToasterProvider } from "@/components/providers/toaster-provider";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/aceternity-ui/resizable-navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Services",
      link: "#services",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];
  

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">

      <head />

      <body >
      <div className="relative w-full">
        {loading ? (
          <PreLoader />
        ) : (

            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <ToasterProvider />
             <Navbar>
        {/* Desktop Navigation */}
               <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            
            <NavbarButton variant="primary" href="/contact" >Book a call</NavbarButton>
          </div>
        </NavBody>

               {/* Mobile Navigation */}
               <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white transition-colors hover:text-[#FFD700]"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
           
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>

        )}
        </div>
      </body>
    </html>
  );
}
