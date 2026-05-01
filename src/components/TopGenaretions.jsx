"use client";

import { useEffect, useState } from "react";
import DataCard from "./DataCard";
import { Loder } from "./Loder";
import Seiller from "./Seiller";


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
        <Loder />
      </div>
    );
  }

  return (
    <div className=" px-4 pb-20">
      <Seiller/>
      <h2 className="text-3xl font-black text-white mb-10 text-center uppercase tracking-widest">
        Featured <span className="text-cyan-400">Collections</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.slice(0, 8).map((item) => (
          <DataCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopGenaretions;