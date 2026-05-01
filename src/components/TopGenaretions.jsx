"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const TopGenaretions = () => {
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
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-cyan-400 animate-pulse font-bold">Loading Premium Tiles...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-20">
      <h2 className="text-3xl font-black text-white mb-10 text-center uppercase tracking-widest">
        Featured <span className="text-cyan-400">Collections</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.slice(0, 8).map((item) => (
          <div 
            key={item.id} 
            className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            {/* Image Container */}
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Category Tag (Optional) */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-cyan-400 text-[10px] px-2 py-1 rounded-full border border-cyan-500/30 font-bold uppercase">
                {item.category}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                {item.title}
              </h3>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-cyan-400 font-black text-xl">
                  ${item.price}
                </span>
                
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-cyan-500/20">
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

export default TopGenaretions;