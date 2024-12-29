import React from "react";
import Image from "next/image";

import Button from "@/components/Button";

const AppInstaller = () => {
    return (
        <>
            <div className="hidden md:!flex items-center py-16">
                <div className="overflow-hidden flex flex-col lg:!flex-row pb-4 lg:!pb-0 w-full items-center gap-6 rounded-2xl border border-divider bg-white">
                    <Image src={"/assets/image/home/app.png"} alt="app" className="w-full h-auto lg:!w-[464px] aspect-[464/310] cursor-pointer" height={310} width={464} />
                    <div className="flex-1 pr-6">
                        <h2 className="text-H2 font-bold mb-2 ">ডাউনলোড করুন ওস্তাদ App</h2>
                        <p>লাইভ ক্লাসের বেস্ট এক্সপেরিয়েন্স পেতে, এখনই ডাউনলোড করুন ওস্তাদ অ্যাপ</p>
                        <div className="mt-6 !grid grid-cols-2 grid-rows-2 gap-5 xl:flex xl:flex-wrap xl:w-full">
                            <Button className={" bg-gray_500 uppercase hover:bg-gray_300 flex items-center justify-center gap-2"}>
                                <Image height={18} width={18} alt="arrow" src={"/assets/icons/playstor.svg"} />
                                android
                            </Button>
                            <Button className={" bg-gray_500 uppercase hover:bg-gray_300 flex items-center justify-center gap-2"}>
                                <Image height={18} width={18} alt="arrow" src={"/assets/icons/playstor.svg"} />
                                iOS App
                            </Button>
                            <Button className={" bg-gray_500 uppercase hover:bg-gray_300 flex items-center justify-center gap-2"}>
                                <Image height={18} width={18} alt="arrow" src={"/assets/icons/playstor.svg"} />
                                windows
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 px-0 block md:!hidden">
                <p className="text-white text-h2 text-center">ডাউনলোড করুন ওস্তাদ App</p>
                <p className="text-body-paragraph text-white text-center mb-6">লাইভ ক্লাসের বেস্ট এক্সপেরিয়েন্স পেতে, এখনই ডাউনলোড করুন ওস্তাদ অ্যাপ</p>

                <Image src={"/assets/image/home/app.png"} alt="app" className="w-full h-auto lg:!w-[464px] aspect-[464/310] cursor-pointer" height={310} width={464} />
                <div className="flex items-center w-full gap-4 mt-4">
                    <Button className={" bg-gray_500 w-full uppercase hover:bg-gray_300 flex items-center justify-center gap-2"}>
                        <Image height={18} width={18} alt="arrow" src={"/assets/icons/playstor.svg"} />
                        iOS App
                    </Button>
                    <Button className={" bg-gray_500 w-full uppercase hover:bg-gray_300 flex items-center justify-center gap-2"}>
                        <Image height={18} width={18} alt="arrow" src={"/assets/icons/playstor.svg"} />
                        windows
                    </Button>
                </div>
            </div>
        </>
    );
};

export default AppInstaller;
