"use client";
import React from "react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="text-center space-y-6">
        
        <h1 className="text-[12rem] font-black text-transparent bg-clip-text bg-linear-to-b from-white to-slate-700 leading-none select-none">
          404
        </h1>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
            Oops! Page <span className="text-cyan-400">Not Found</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            onPress={() => router.back()}
            variant="bordered"
            startContent={<FaArrowLeft />}
            className="border-slate-700 text-slate-300 font-bold h-12 px-8 rounded-xl hover:bg-slate-800 transition-all"
          >
            Go Back
          </Button>

          <Button
            onPress={() => router.push("/")}
            startContent={<FaHome />}
            className="bg-cyan-500 text-slate-900 font-black h-12 px-8 rounded-xl uppercase tracking-widest shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 hover:-translate-y-1 transition-all"
          >
            Home Page
          </Button>
        </div>
      </div>

      
      <div className="mt-20 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-slate-800" />
        <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
        <div className="w-2 h-2 rounded-full bg-slate-800" />
      </div>
    </div>
  );
}