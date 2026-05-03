import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Seiller = () => {
  const listItems = [
    "World-class Premium Marble & Ceramic",
    "Heat & Scratch Resistant Surface",
    "Exclusive Designs for Modern Homes",
    "Fast & Secure Delivery in Bangladesh",
  ];

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-24 items-center">

      
      <motion.div
        className="relative group "
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <Image
            src="/sell-Tiles.jpg"
          alt="Premium Tiles Gallery"
          width={600}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="relative rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </motion.div>

     
      <div className="space-y-6">

        
        <motion.h4
          className="text-cyan-400 font-bold uppercase tracking-widest text-sm"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Premium Quality Only
        </motion.h4>

        
        <motion.h2
          className="text-4xl md:text-5xl font-black text-white leading-tight"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Transform Your Space with{" "}
          <span className="text-cyan-400">Luxury & Elegance</span>
        </motion.h2>

        
        <motion.p
          className="text-slate-400 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Discover premium tiles with modern designs that bring royal elegance
          to your home. Combining long-lasting durability with diverse textures,
          we provide the ultimate interior solutions for your space.
        </motion.p>

      
        <ul className="space-y-4">
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 text-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <FaCheckCircle className="text-cyan-500 text-xl" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>

       
        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800">
          {[
            { value: "1200+", label: "Unique Designs" },
            { value: "15k+", label: "Happy Clients" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-3xl font-black text-cyan-400">{stat.value}</h3>
              <p className="text-slate-500 text-sm uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link
            href="/all-tiles"
            className="inline-block mt-4 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            View All Collections
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Seiller;