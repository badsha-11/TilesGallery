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
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((item) => (
        <div key={item.id} className="border p-3 rounded-lg">
          <div className="relative w-full h-48">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded"
            />
          </div>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default TopGenaretions;
