import React from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "@/components/Button";

const Herro = () => {
    return (
        <>
            <div className="flex justify-center items-center ">
                <div className="cursor-pointer rounded-[48px] !border border-info_light md:!border-none bg-info_main hover:bg-opacity-20 bg-opacity-10 flex py-1.5 px-2.5 justify-center items-center gap-1.5">
                    <div className="gap-1 rounded-[20px] bg-xs text-xs text-white flex py-0 px-1.5 justify-center items-center">নতুন</div>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <div className="flex size-6 p-[1px] justify-center items-center">
                                <Image height={6} width={6} alt="avarter" className="rounded-full border !border-ostad-blue-100 shrink-0 size-5" src={"/"} />
                            </div>
                            <p className="whitespace-nowrap text-info_main">হ্যালো আমি পিকু! আপনার 24/7 লার্নিং বাডি</p>
                        </div>
                        <div className="text-info_main">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full !grid grid-cols-1 justify-between gap-6 md:!relative md:!p-6 md:!rounded-2xl shadow-none md:shadow-sm border-0 md:!border border-divider lg:!flex lg:!h-full">
                <div className="w-full h-full flex flex-col gap-6 md:!gap-12 z-[5]">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center flex-wrap justify-center md:!justify-start gap-4 text-h1">
                                <p className="text-H1 text-center font-bold">বাংলাদেশ শিখবে</p>
                                <div className="flex gap-4">
                                    <p className="text-H1 font-bold text-error_main">লাইভে</p>
                                    <div className="style_livenow__Qm0qO">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <p className=" max-w-full xl:!text-start text-center md:!text-start font-semibold">স্কিল শেখার মাধ্যমে বদলে ফেলুন নিজের ভবিষ্যৎ</p>
                        </div>
                        <div className="w-full !grid grid-cols-1 md:!grid-cols-2 gap-6">
                            <Link href={"#"}>
                                <Button className={" bg-warning_main h-12 w-full hover:bg-warning_dark flex items-center justify-center gap-2"}>
                                    শেখা শুরু করুন
                                    <Image height={18} width={18} alt="arrow" src={"/assets/icons/arrow_right.svg"} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <Image height={300} width={400} alt="img" className="block md:!hidden w-full h-auto rounded-2xl aspect-[4/3] object-cover" src="/assets/image/home/herro.webp" />
                    <div className="flex flex-col w-full gap-4">
                        <p className=" font-semibold">৭০০০+ গ্র্যাজুয়েটরা কর্মরত আছেন বিভিন্ন দেশি ও বিদেশি প্রতিষ্ঠানে</p>
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex gap-4 flex-wrap">
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                                <div className=" h-5">
                                    <Image height={20} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/heroLogo.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image height={300} width={400} alt="img" className="w-full h-full aspect-[4/3] lg:!h-300 overflow-hidden hidden md:!block object-cover rounded-2xl" src="/assets/image/home/herro.webp" />
            </div>
        </>
    );
};

export default Herro;
