import React from "react";
import Link from "next/link";
import Image from "next/image";

import Course from "@/components/Course";

const Creatives = () => {
    return (
        <div className="w-full rounded-none md:!rounded-2xl pt-4 md:!pt-0 pb-4 md:!pb-6 flex flex-col gap-2 md:!gap-6 bg-ostad-black-bg md:!bg-white shadow-none md:!shadow-ostad-xs">
            <div className="pt-4 pb-2 md:!pb-0 md:!pt-[18px] flex flex-col justify-center items-center gap2 md:!gap-8 shadow-none md:!shadow-[0px_2px_4px_-8px_#12B76A1F]">
                <div className="flex items-center gap-2">
                    <p className=" text-H1 font-bold">Creatives</p>
                    <Image height={32} width={24} className=" h-8 w-8" alt="web" src={"/assets/icons/web.png"} />
                </div>
            </div>
            <div className="px-4 !grid grid-cols-2 md:!grid-cols-4 gap-x-2 md:!gap-x-2.5 gap-y-2 md:!gap-y-6">
                <Link href={"/free-course/course-details"}>
                    <Course courseCatagory />
                </Link>
            </div>
        </div>
    );
};

export default Creatives;
