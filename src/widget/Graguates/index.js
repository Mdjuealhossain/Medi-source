import React from "react";

import Graguate from "@/components/Graguate";

const Graguates = () => {
    return (
        <div className="flex flex-col items-center gap-4 md:!gap-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className=" text-H1 text-center font-bold">দেখে নিন কি বলছেন ওস্তাদ গ্র্যাজুয়েটরা</h1>
                <p className="text-center">২০০০- র বেশি গ্র্যাজুয়েট যারা পেয়েছেন জব, দেখে নিন কি বলছেন তাদের একাংশ</p>
            </div>
            <div className="w-full flex lg:!flex-row flex-col justify-center gap-3">
                <div className="flex flex-col gap-3 justify-start w-full xl:!min-w-[276px] xl:!w-[276px] lg:!min-w-[218px] lg:!w-[218px]">
                    <Graguate />
                    <Graguate />
                </div>
                <div className="flex flex-col gap-3 justify-start w-full grow">
                    <Graguate />
                    <div className="flex flex-col justify-between items-start gap-3 lg:!flex-row">
                        <Graguate />
                        <Graguate />
                    </div>
                </div>
                <div className="flex flex-col gap-3 justify-start w-full xl:!min-w-[276px] xl:!w-[276px] lg:!min-w-[218px] lg:!w-[218px]">
                    <Graguate />
                    <Graguate />
                </div>
            </div>
        </div>
    );
};

export default Graguates;
