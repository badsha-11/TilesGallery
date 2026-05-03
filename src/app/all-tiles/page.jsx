"use client";
import { useEffect, useState } from "react";
import { Loder } from "@/components/Loder";
import DataCard from "@/components/DataCard";
import { FaSearch } from "react-icons/fa";

const AllTilesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  // Search filter
  const filtered = data.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.id?.toString().toLowerCase().includes(q) ||
      item.title?.toLowerCase().includes(q) ||
      item.category?.toLowerCase().includes(q) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[90vh]">
        <Loder />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Explore Our <span className="text-cyan-400">Entire Collection</span>
        </h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Discover a wide range of premium tiles designed to bring luxury and durability to your dream spaces.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12 relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, category, tag..."
          className="w-full h-12 pl-11 pr-4 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Result count */}
      {search && (
        <p className="text-slate-400 text-sm text-center mb-6">
          <span className="text-cyan-400 font-bold">{filtered.length}</span> result found for "<span className="text-white">{search}</span>"
        </p>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((item, index) => (
            <DataCard key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <p className="text-5xl">🔍</p>
          <p className="text-white font-bold text-xl">No tiles found</p>
          <p className="text-slate-400 text-sm">Try searching with a different keyword</p>
          <button
            onClick={() => setSearch("")}
            className="mt-2 px-6 py-2 rounded-lg bg-cyan-500 text-slate-900 font-bold text-sm hover:bg-cyan-400 transition-all"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default AllTilesPage;