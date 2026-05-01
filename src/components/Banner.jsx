"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"; 
import { Loder } from "./Loder";

export default function Banner() {
  const [slides, setSlides] = useState([]); 
  const [error, setError] = useState(false); 

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        
        const response = await fetch("/banner.json");
        if (!response.ok) throw new Error("Data not found");
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setError(true);
      }
    };

    fetchBannerData();
  }, []);

  
  if (error) {
    return <div className="h-[60vh] flex items-center justify-center text-red-500">Failed to load banner.</div>;
  }

  
  if (slides.length === 0) {
    return (
      <div className="h-[60vh] md:h-[80vh] w-full flex items-center justify-center bg-slate-900 rounded-3xl mt-5">
        <Loder />
      </div>
    );
  }

  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative mt-5 overflow-hidden rounded-3xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              
              <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/50 to-transparent flex items-center px-8 md:px-20">
                <div className="max-w-2xl text-left">
                  <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    {slide.id === 1 ? (
                      <>
                        Discover Your <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                          Perfect Aesthetic
                        </span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>
                  
                  <p className="mt-4 text-slate-300 text-lg md:text-xl max-w-lg">
                    {slide.subtitle}
                  </p>
                  
                  <div className="mt-8 flex gap-4">
                    <Link 
                      href={slide.link} 
                      className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all active:scale-95"
                    >
                      {slide.btnText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #06b6d4 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 25px;
          border-radius: 10px;
          transition: all 0.3s;
        }
      `}</style>
    </div>
    
  );
}