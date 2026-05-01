"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Loder } from "@/components/Loder";

const AllTilesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching all tiles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[90vh]">
        <Loder />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Explore Our <span className="text-cyan-400">Entire Collection</span>
        </h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Discover a wide range of premium tiles designed to bring luxury and durability to your dream spaces.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <div 
            key={item.id} 
            className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-full"
          >
            
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 truncate mb-4">
                {item.title}
              </h3>
              
              <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Starting From</p>
                  <span className="text-cyan-400 font-black text-2xl">
                    ${item.price}
                  </span>
                </div>
                
                
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 active:scale-90 shadow-lg shadow-cyan-500/20">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;