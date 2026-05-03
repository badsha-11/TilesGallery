import React from 'react';
import Image from 'next/image';

import data from '../../../../public/data.json';

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params;
    
   
    const item = data.find((tile) => tile.id === id);

    if (!item) {
        return <div className="text-white text-center py-20 font-bold">Product Not Found!</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                
                <div className="relative group overflow-hidden rounded-3xl border border-slate-700 bg-slate-800/50 p-2">
                    <div className="relative h-100 md:h-150 w-full overflow-hidden rounded-2xl">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>
                </div>

                
                <div className="flex flex-col space-y-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {item.tags?.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                   
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        {item.title}
                    </h1>

                    
                    <div className="flex items-baseline gap-2">
                        <span className="text-slate-400 text-lg uppercase font-bold">Price:</span>
                        <span className="text-4xl font-black text-cyan-400">${item.price}</span>
                        <span className="text-slate-500 font-medium">/ per sq.ft</span>
                    </div>

                   
                    <div className="space-y-4 pt-4 border-t border-slate-800">
                        <h3 className="text-xl font-bold text-white">Product Overview</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            {item.description || "Experience the perfect blend of durability and aesthetics with our premium tile collection. Designed for modern living, these tiles offer a sophisticated finish to any interior space."}
                        </p>
                    </div>

                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-cyan-500/20 active:scale-95 uppercase tracking-wider">
                            Order Now
                        </button>
                        <button className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-black py-4 rounded-2xl transition-all duration-300 active:scale-95 uppercase tracking-wider">
                            Download Catalog
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

 
export default TilesDetailsPage;