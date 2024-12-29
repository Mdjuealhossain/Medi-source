import React from "react";
import Link from "next/link";
import Image from "next/image";

import Course from "@/components/Course";
import Test from "@/components/Test";
import FacilitiesCard from "../facilitiesCard";

const LiveCources = () => {
    return (
        <>
            <div className="w-full !grid grid-cols-1 lg:!grid-cols-2 gap-4 md:!flex-row md:!gap-8">
                <Test />
                <Test />
            </div>
            <div className="flex flex-col items-center gap-4 mt-10 md:!mt-16">
                <div className="w-full flex justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <h2 className="text-center text-H2 font-bold whitespace-nowrap">ফ্রি কোর্সেস</h2>
                        <Image height={24} width={24} alt="free" src={"/assets/icons/free.png"} className="h-8 w-8" />
                    </div>
                    <div className="grow horizontal-line"></div>
                    <div>
                        <a id="home_free_courses_btn_see_all" className="w-full" href="/learn-free">
                            <button id="home_free_courses_btn_see_all" type="button" className="group w-full flex gap-2 justify-center items-center transition-all duration-200 active:scale-[98%] h-10 px-6 py-2 rounded-md !bg-ostad-black-100 hover:!bg-ostad-black-80 active:!bg-ostad-black-100">
                                <p className="uppercase whitespace-nowrap transition-all duration-200 !text-button text-white">সব দেখুন</p>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="!grid grid-cols-1 gap-4 w-full sm:!grid-cols-2 sm:!gap-6 lg:!gap-5 lg:!grid-cols-4">
                    <Link href={"#"}>
                        <Course />
                    </Link>
                    <Link href={"#"}>
                        <Course />
                    </Link>
                    <Link href={"#"}>
                        <Course />
                    </Link>
                </div>
            </div>
            <div className=" gap-1 mt-10 md:!mt-16">
                <p className="text-H2 font-bold  text-center">কি কি পাচ্ছেন লাইভ কোর্সে</p>
                <div className="p-4 rounded-sm grid grid-cols-2 gap-2 lg:grid-cols-3">
                    <FacilitiesCard />
                    <FacilitiesCard />
                    <FacilitiesCard />
                    <FacilitiesCard />
                    <FacilitiesCard />
                    <FacilitiesCard />
                </div>
            </div>
            <div className="pt-10 md:!pt-16">
                <div className="rounded-none md:!rounded-xl py-0 md:!py-8 !grid grid-cols-2 md:!flex flex-row w-full gap-4 items-center">
                    <div className=" bg-success_light py-3 md:!py-6 px-6 md:!px-8 flex flex-col items-start justify-center rounded-md gap-0.5 md:!gap-2 w-full">
                        <h1 className=" text-H1 font-bold">৭,০০০+</h1>
                        <p className=" whitespace-nowrap">জব প্লেসমেন্ট</p>
                    </div>
                    <div className=" bg-secondary_li py-3 md:!py-6 px-6 md:!px-8 flex flex-col items-start justify-center rounded-md gap-0.5 md:!gap-2 w-full">
                        <h1 className=" text-H1 font-bold">১৫,০০০+</h1>
                        <p className=" whitespace-nowrap">লার্নার</p>
                    </div>
                    <div className=" bg-error_light py-3 md:!py-6 px-6 md:!px-8 flex flex-col items-start justify-center rounded-md gap-0.5 md:!gap-2 w-full">
                        <h1 className=" text-H1 font-bold">৯০%</h1>
                        <p className=" whitespace-nowrap">কোর্স কমপ্লিশন রেট</p>
                    </div>
                    <div className=" bg-warning_light py-3 md:!py-6 px-6 md:!px-8 flex flex-col items-start justify-center rounded-md gap-0.5 md:!gap-2 w-full">
                        <h1 className=" text-H1 font-bold">৪৬</h1>
                        <p className=" whitespace-nowrap">লাইভ কোর্স</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LiveCources;
