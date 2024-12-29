"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Course from "@/components/Course";
import TabCard from "@/components/TabCard";

const UpcomingCourse = ({ tabs }) => {
    const [isTab, setIsTab] = useState(tabs[0].id);
    const containerRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const handleScrolltab = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center gap-3 rounded-2xl p-0 md:!p-4 bg-none shadow-none md:!bg-white md:!shadow-xl overflow-hidden">
            <div className="flex items-center gap-2">
                <Image src={"/assets/icons/upcoming.svg"} height={40} width={40} alt="upcoming" className=" h-10 w-10" />
                <h2 className=" text-H2 font-bold">আপকামিং লাইভ কোর্স</h2>
            </div>
            <div className="w-full flex flex-col items-center md:!gap-6 gap-4">
                <div className="flex flex-col gap-6 w-full h-full ">
                    <div className="relative">
                        <div ref={containerRef} className=" flex items-center overflow-auto gap-3 no-scrollbar" onScroll={handleScrolltab}>
                            {tabs.map((tab) => (
                                <div onClick={() => setIsTab(tab.id)} key={tab.id}>
                                    <TabCard parentClass={`${isTab == tab.id ? " bg-gray_800 border-gray_800 !text-white" : "border-divider hover:bg-gray_500"}`} course={tab.course} workshop={tab.workshop} title={tab.title} img={tab.img} alt={tab.alt} />
                                </div>
                            ))}
                        </div>
                        {/* Scroll Buttons */}
                        {showLeftButton && (
                            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-paper_bg hover:bg-warning_light p-2 rounded-full shadow-lg" onClick={scrollLeft}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" fill="#050400" />
                                </svg>
                            </button>
                        )}
                        {showRightButton && (
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-paper_bg hover:bg-warning_light p-2 rounded-full shadow-lg" onClick={scrollRight}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#050400" />
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="w-full !grid grid-cols-1 sm:grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4 gap-2 md:!gap-3">
                        {isTab == "1" && (
                            <>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                            </>
                        )}
                        {isTab == "2" && (
                            <>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                            </>
                        )}
                        {isTab == "3" && (
                            <>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"/free-course/course-details"}>
                                    <Course courseCatagory />
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full flex flex-col md:!max-w-[375px]">
                            <Link className="w-full" href="/category">
                                <Button size="large" className={" w-full bg-secondary_mid flex items-center justify-center gap-2"}>
                                    সব দেখুন
                                    <Image height={24} width={24} alt="arrow" src={"/assets/icons/arrow_right.svg"} className=" h-6 w-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCourse;
