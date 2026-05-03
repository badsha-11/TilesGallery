"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const DataCard = ({ item, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      viewport={{ once: false, amount: 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]"
    >
     
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
    
        <div className="absolute top-4 left-4 bg-slate-950/60 backdrop-blur-md text-cyan-400 text-[10px] px-3 py-1.5 rounded-full border border-white/10 font-bold uppercase tracking-widest z-10">
          {item.category}
        </div>

       
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

     
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
          {item.title}
        </h3>

        <div className="flex justify-between items-center mt-6">
          <div className="flex flex-col">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Price</span>
            <span className="text-cyan-400 font-black text-2xl tracking-tighter">
              ${item.price}
            </span>
          </div>

          <motion.div whileTap={{ scale: 0.9 }}>
            <Link
              href={`/tile/${item.id}`}
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-slate-900 transition-all duration-300 bg-cyan-500 rounded-xl hover:bg-cyan-400 group/btn shadow-[0_10px_20px_-10px_rgba(6,182,212,0.5)] active:shadow-none"
            >
              <span className="relative text-sm">View Details</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DataCard;