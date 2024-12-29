import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className=" bg-warning_light">
            <div className="w-full max-w-xl mx-auto px-4 py-16">
                <div className=" grid grid-cols-4 gap-8">
                    <div className="md:col-span-1 col-span-4 flex flex-col justify-center md:justify-start items-center md:items-start">
                        <Image height={32} width={120} alt="logo" src={"/assets/logos/2024-03-20T04-26-32.799Z-ostad_logo_light@512x (2).png"} className=" h-8 w-auto my-4" />
                        <p className=" text-black mb-4">অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
                        <p className=" text-subtitle1 mb-2 text-black font-semibold">ডাউনলোড করুন ওস্তাদ অ্যাপ</p>
                        <div className=" flex items-center gap-2 mb-4">
                            <div className=" px-6 py-3 bg-primary rounded-lg">
                                <Image className="h-6 w-6" height={24} width={24} alt="social" src={"/assets/icons/playstor.svg"} />
                            </div>
                            <div className=" px-6 py-3 bg-primary rounded-lg">
                                <Image className="h-6 w-6" height={24} width={24} alt="social" src={"/assets/icons/playstor.svg"} />
                            </div>
                            <div className=" px-6 py-3 bg-primary rounded-lg">
                                <Image className="h-6 w-6" height={24} width={24} alt="social" src={"/assets/icons/playstor.svg"} />
                            </div>
                        </div>
                        <p className=" text-black mb-2"> কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
                        <div className=" flex items-center gap-2 mb-4">
                            <div className=" p-1 bg-white border border-gray_400 hover:border-warning_main hover:bg-warning_light rounded-md">
                                <Image src={"/assets/logos/fb.svg"} height={28} width={28} className=" h-7 w-7" alt="fb" />
                            </div>
                            <div className=" p-1 bg-white border border-gray_400 hover:border-warning_main hover:bg-warning_light rounded-md">
                                <Image src={"/assets/logos/fb.svg"} height={28} width={28} className=" h-7 w-7" alt="fb" />
                            </div>
                            <div className=" p-1 bg-white border border-gray_400 hover:border-warning_main hover:bg-warning_light rounded-md">
                                <Image src={"/assets/logos/fb.svg"} height={28} width={28} className=" h-7 w-7" alt="fb" />
                            </div>
                            <div className=" p-1 bg-white border border-gray_400 hover:border-warning_main hover:bg-warning_light rounded-md">
                                <Image src={"/assets/logos/fb.svg"} height={28} width={28} className=" h-7 w-7" alt="fb" />
                            </div>
                            <div className=" p-1 bg-white border border-gray_400 hover:border-warning_main hover:bg-warning_light rounded-md">
                                <Image src={"/assets/logos/fb.svg"} height={28} width={28} className=" h-7 w-7" alt="fb" />
                            </div>
                        </div>
                    </div>
                    <div className=" md:col-span-1 col-span-2 flex flex-col">
                        <p className=" text-subtitle1 font-semibold text-black mb-6">কুইক লিংক</p>
                        <Link href={"#"} className="mb-4 hover:underline hover:text-warning_dark">
                            আপকামিং লাইভ ব্যাচ
                        </Link>
                        <Link href={"#"} className="mb-4 hover:underline hover:text-warning_dark">
                            ফ্রি কোর্সসমূহ
                        </Link>
                        <Link href={"#"} className="mb-4 hover:underline hover:text-warning_dark">
                            লাইভ ওয়ার্কশপ
                        </Link>
                        <Link href={"#"} className="mb-4 hover:underline hover:text-warning_dark">
                            ব্লগ
                        </Link>
                    </div>
                    <div className=" md:col-span-1 col-span-2 flex flex-col">
                        <p className=" text-subtitle1 font-semibold text-black mb-6">কোম্পানি</p>
                        <Link href={"#"} className="mb-4 hover:underline hover:text-warning_dark">
                            আমাদের সম্পর্কে
                        </Link>
                        <Link href={"#"} className="mb-4 hover:underline hover:text-warning_dark">
                            রিফান্ড পলিসি
                        </Link>
                        <Link href={"#"} className="mb-4 hover:underline hover:text-warning_dark">
                            প্রাইভেসী পলিসি
                        </Link>
                        <Link href={"#"} className="mb-4 hover:underline hover:text-warning_dark">
                            টার্মস এবং শর্তাবলী
                        </Link>
                    </div>
                    <div className=" md:col-span-1 col-span-4">
                        <p className=" text-subtitle1 font-semibold text-black mb-6">যোগাযোগ</p>
                        <div className=" flex items-center gap-2 mb-4">
                            <Image src={"/assets/icons/inbox.svg"} height={18} width={18} alt="inbox" />
                            <Link href={"#"} className="hover:underline hover:text-warning_dark">
                                support@ostad.app
                            </Link>
                        </div>
                        <div className=" flex items-center gap-2 mb-4">
                            <Image src={"/assets/icons/location.svg"} height={18} width={18} alt="inbox" />
                            <Link href={"#"} className="hover:underline hover:text-warning_dark">
                                Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" md:h-11 h-4">
                    <Image src={"/assets/image/client.webp"} height={44} width={1300} alt="client" className=" h-full md:11" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
