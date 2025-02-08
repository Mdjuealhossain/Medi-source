"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import required Swiper modules directly
import ImageURL from "@/components/ImageUrl";
import useSlider from "@/app/hooks/useSlider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles

const Banner = () => {
    const { data, loading, error } = useSlider();

    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                effect="fade" // Enable fade effect
                fadeEffect={{ crossFade: true }} // Optional: for smooth transitions
                speed={2000} // Adjust speed for smoother transitions (in ms)
                modules={[Autoplay, Pagination, EffectFade]}
                className="mySwiper"
            >
                {data?.data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href={"#"} target="_blank">
                            <div className="relative w-full md:h-370 h-150 rounded-lg object-fill overflow-hidden">
                                <ImageURL className="!h-full !w-full" image={item.image} height={370} width={1360} alt={"slider"} />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Loading Spinner */}
            {loading && (
                <div className="h-screen flex items-center justify-center">
                    <Image src="/assets/icons/loading_img.svg" alt="loading" height={24} width={24} className="md:h-16 md:w-16 h-10 w-10" />
                </div>
            )}
        </>
    );
};

export default Banner;
