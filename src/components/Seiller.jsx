import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa"; 

const Seiller = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-24 items-center">
     
      <div className="relative group">
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <Image
          src="/sell-Tiles.jpg"
          alt="Premium Tiles Gallery"
          width={600}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="relative rounded-2xl object-cover shadow-2xl"
        />
      </div>

      
      <div className="space-y-6">
        <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-sm">
          Premium Quality Only
        </h4>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Transform Your Space with{" "}
          <span className="text-cyan-400">Luxury & Elegance</span>
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed">
          Discover premium tiles with modern designs that bring royal elegance
          to your home. Combining long-lasting durability with diverse textures,
          we provide the ultimate interior solutions for your space.
        </p>

        
        <ul className="space-y-4">
          {[
            "World-class Premium Marble & Ceramic",
            "Heat & Scratch Resistant Surface",
            "Exclusive Designs for Modern Homes",
            "Fast & Secure Delivery in Bangladesh",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-slate-200">
              <FaCheckCircle className="text-cyan-500 text-xl" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        
        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800">
          <div>
            <h3 className="text-3xl font-black text-cyan-400">1200+</h3>
            <p className="text-slate-500 text-sm uppercase">Unique Designs</p>
          </div>
          <div>
            <h3 className="text-3xl font-black text-cyan-400">15k+</h3>
            <p className="text-slate-500 text-sm uppercase">Happy Clients</p>
          </div>
        </div>

       
        <Link href="/all-tiles" className="mt-8 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95">
          View All Collections
        </Link>
      </div>
    </div>
  );
};

export default Seiller;
