"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
      easing: "ease-out-back",
    });
  }, []);

  return (
    <footer className="relative mt-24 overflow-hidden z-20">
      <div className="h-px w-full bg-linear-to-r from-transparent via-slate-700 to-transparent dark:via-cyan-500/20" />

      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#020617]" />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-cyan-500/5 via-transparent to-blue-500/5 
        dark:from-cyan-500/10 dark:to-blue-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          
          <div className="space-y-4" data-aos="fade-right">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white italic">
                Tiles<span className="text-cyan-500">Gallery</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-xs">
              Discover your perfect aesthetic with our premium collection of ceramic and geometric tiles. Quality meets design.
            </p>
          </div>

        
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-cyan-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/all-tiles" className="hover:text-cyan-500 transition-colors">All Tiles</Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-cyan-500 transition-colors">My Profile</Link>
              </li>
            </ul>
          </div>

        
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/contact" className="hover:text-cyan-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-500 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-500 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

        
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Subscribe to get notified about our new arrivals.
            </p>
            <div className="flex flex-col gap-3">
               <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
                bg-linear-to-r from-cyan-500 to-blue-600 text-white 
                text-sm font-medium transition-all duration-200 
                hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div 
          className="mt-12 h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" 
          data-aos="zoom-in"
        />

       
        <div 
          className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500"
          data-aos="fade-in"
          data-aos-offset="0"
        >
          <p>© {new Date().getFullYear()} Tiles Gallery. All rights reserved.</p>
          <div className="flex items-center gap-6">
             <p>Designed by <span className="text-cyan-500 font-medium">Isran Khan</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;