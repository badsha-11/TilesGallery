"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Loder } from "@/components/Loder";
import DataCard from "@/components/DataCard";

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
          <DataCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;