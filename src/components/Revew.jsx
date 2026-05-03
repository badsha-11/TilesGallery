"use client";

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Swiper styles
import 'swiper/css';

const Revew = () => {
    const [reviews, setReviews] = useState([]);

    // JSON ফাইল থেকে ডেটা ফেচ করা
    useEffect(() => {
        fetch('/revew.json')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.error("Error loading reviews:", err));
    }, []);

    if (reviews.length === 0) return null;

    return (
        <section className="py-20 bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-black text-white italic"
                >
                    Client <span className="text-cyan-500">Testimonials</span>
                </motion.h2>
                <p className="text-slate-500 mt-4 uppercase tracking-[0.3em] text-xs font-bold">
                    Real stories from our happy clients
                </p>
            </div>

            <div className="w-full">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={6000} // নিরবিচ্ছিন্ন গতির জন্য
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 4 },
                    }}
                    className="review-swiper"
                >
                    {reviews.map((rev) => (
                        <SwiperSlide key={rev.id}>
                            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-md hover:border-cyan-500/40 transition-all duration-500 group h-full flex flex-col justify-between">
                                <div>
                                    <FaQuoteLeft className="text-cyan-500/20 text-4xl mb-4 group-hover:text-cyan-500/40 transition-colors" />
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar 
                                                key={i} 
                                                className={i < Math.floor(rev.rating) ? "text-yellow-500" : "text-slate-700"} 
                                                size={14} 
                                            />
                                        ))}
                                    </div>
                                    <p className="text-slate-300 italic mb-6 leading-relaxed text-sm">
                                        "{rev.comment}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 border-t border-slate-800/50 pt-6">
                                    <img 
                                        src={rev.image} 
                                        alt={rev.name} 
                                        className="w-12 h-12 rounded-full border-2 border-cyan-500/30 object-cover" 
                                    />
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{rev.name}</h4>
                                        <p className="text-cyan-500 text-[10px] uppercase tracking-widest font-black">
                                            {rev.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* CSS for Infinite Linear Motion */}
            <style jsx global>{`
                .review-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </section>
    );
};

export default Revew;