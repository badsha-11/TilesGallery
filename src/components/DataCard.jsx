import Image from "next/image";
import Link from "next/link";

const DataCard = ({ item }) => {
    return (
        <div 
            key={item.id} 
            className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
             
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-cyan-400 text-[10px] px-2 py-1 rounded-full border border-cyan-500/30 font-bold uppercase">
                {item.category}
              </div>
            </div>

            
            <div className="p-5">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                {item.title}
              </h3>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-cyan-400 font-black text-xl">
                  ${item.price}
                </span>
                
                <Link href={`/all-tiles/${item.id}`} className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-cyan-500/20">
                  Details
                </Link>
              </div>
            </div>
          </div>
    );
};

export default DataCard;