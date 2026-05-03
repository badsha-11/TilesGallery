"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // FIXED (performance safe)
      easing: "ease-out-back",
    });
  }, []);

  const year = new Date().getFullYear(); // FIXED hydration safe

  return (
    <footer className="relative mt-24 overflow-hidden z-20">
      <div className="h-px w-full bg-linear-to-r from-transparent via-slate-700 to-transparent dark:via-cyan-500/20" />

      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#020617]" />
      <div className="absolute inset-0 -z-10 bg-linear-to-tr from-cyan-500/5 via-transparent to-blue-500/5 dark:from-cyan-500/10 dark:to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4" data-aos="fade-right">
            <h2 className="text-xl font-black text-slate-900 dark:text-white italic">
              Tiles<span className="text-cyan-500">Gallery</span>
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              Premium ceramic and decorative tiles collection for modern interiors.
            </p>
          </div>

          {/* Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/all-tiles">All Tiles</Link></li>
              <li><Link href="/profile">Profile</Link></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div data-aos="fade-left" data-aos-delay="300">
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">
              Stay Updated
            </h3>

            <Link
              href="/register"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm 
              hover:scale-[1.03] transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between text-xs text-slate-500">
          <p>© {year} Tiles Gallery. All rights reserved.</p>
          <p>
            Designed by <span className="text-cyan-500">Isran Khan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;