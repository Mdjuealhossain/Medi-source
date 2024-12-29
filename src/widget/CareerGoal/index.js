import React from "react";
import Link from "next/link";

import Goal from "@/components/Goal";

const CareerGoal = () => {
    return (
        <div className="relative flex flex-col pb-2 items-center z-10 overflow-hidden">
            <div className="py-4 md:py-6 md:px-12 flex flex-col items-center bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.10)_0%,_rgba(255,_255,_255,_0.00)_114.21%)] rounded-tl-[40px] rounded-br-none rounded-tr-[40px] rounded-bl-none">
                <h2 className="text-H2 font-bold ">ক্যারিয়ার গোল সেট করুন</h2>
                <p className="text-center md:!text-start">নিচের অপশন গুলো থেকে আপনার গোল সিলেক্ট করে শেখা শুরু করুন</p>
            </div>

            <div className="w-full !grid grid-cols-2 gap-4 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4">
                <Link href={"#"}>
                    <Goal course={5} workshop={6} title={"website and app development"} img="/assets/icons/web.png" alt="goal" />
                </Link>
                <Link href={"#"}>
                    <Goal course={5} workshop={6} title={"website and app development"} img="/assets/icons/web.png" alt="goal" />
                </Link>
                <Link href={"#"}>
                    <Goal course={5} workshop={6} title={"website and app development"} img="/assets/icons/web.png" alt="goal" />
                </Link>
                <Link href={"#"}>
                    <Goal course={5} workshop={6} title={"website and app development"} img="/assets/icons/web.png" alt="goal" />
                </Link>
                <Link href={"#"}>
                    <Goal course={5} workshop={6} title={"website and app development"} img="/assets/icons/web.png" alt="goal" />
                </Link>
                <Link href={"#"}>
                    <Goal course={5} workshop={6} title={"website and app development"} img="/assets/icons/web.png" alt="goal" />
                </Link>
            </div>
        </div>
    );
};

export default CareerGoal;
