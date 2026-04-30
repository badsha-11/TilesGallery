"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; 

const Navbar = () => {
  const pathname = usePathname(); 

  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Tiles", href: "/all-tiles" },
    { name: "My Profile", href: "/profile" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto px-4 w-full">
        
        
        <Link href="/" className="flex gap-2 items-center group">
         
          <h3 className="font-black text-xl text-white">Tiles<span className="text-cyan-400">Gallery</span></h3>
        </Link>

       
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href; 
            return (
              <li key={link.name} className="relative py-2">
                <Link
                  href={link.href}
                  className={`${
                    isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"
                  } transition-colors duration-300`}
                >
                  {link.name}
                </Link>
                
                
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                )}
              </li>
            );
          })}
        </ul>

      
        <div className="flex items-center gap-4">
          <Link href={"/login"} className="text-slate-300 text-sm hover:text-white">Login</Link>
          <Link href={"/register"} className="bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm px-5 py-2 rounded-full font-semibold">
            Sign Up
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;