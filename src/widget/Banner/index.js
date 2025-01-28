"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles

// Import required Swiper modules directly
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import ImageURL from "@/components/ImageUrl";
import Link from "next/link";
import useSlider from "@/app/hooks/useSlider";

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
        </>
    );
};

export default Banner;
