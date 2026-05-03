"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Tiles", href: "/all-tiles" },
    { name: "My Profile", href: "/my-profile" },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <nav className="flex justify-between items-center py-4 px-6 w-full">
        <Link href="/" className="flex gap-2 items-center">
          <h3 className="font-black text-xl text-white italic">
            Tiles<span className="text-cyan-400">Gallery</span>
          </h3>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="relative py-1">
                <Link
                  href={link.href}
                  className={`${isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"} transition-colors`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              {user.image && (
                <img
                  src={user?.image}
                  referrerPolicy="no-referrer"
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-cyan-500 object-cover"
                />
              )}
              <span className="text-slate-300 text-sm font-medium">
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm px-5 py-2 rounded-full border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-slate-300 text-sm hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-slate-900 border-t border-slate-800 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium ${pathname === link.href ? "text-cyan-400" : "text-slate-300"}`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-slate-800 my-2" />

          {user ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {user.image && (
                  <img
                    src={user?.image}
                    referrerPolicy="no-referrer"
                    alt={user.name}
                    className="w-9 h-9 rounded-full border-2 border-cyan-500 object-cover"
                  />
                )}
                <span className="text-white font-semibold">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full py-3 rounded-xl border border-red-500/50 text-red-400 font-bold hover:bg-red-500/10 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-slate-300 text-lg">
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-linear-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-xl font-bold"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
