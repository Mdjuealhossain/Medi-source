import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles

// Import required Swiper modules directly
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import ImageURL from "@/components/ImageUrl";
import Link from "next/link";

const Banner = () => {
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
                {banners.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href={"#"}>
                            <div className="relative w-full md:h-370 h-150 rounded-lg object-fill overflow-hidden">
                                <ImageURL className="!h-full !w-full" image={item?.image && item?.image} height={370} width={1360} />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Banner;

const banners = [
    { id: 1, image: "/assets/image/home/image1.jpg", alt: "image1" },
    { id: 2, image: "/assets/image/home/image2.jpeg", alt: "image2" },
    { id: 3, image: "/assets/image/home/image3.jpeg", alt: "image3" },
    { id: 4, image: "/assets/image/home/image4.jpeg", alt: "image4" },
];
