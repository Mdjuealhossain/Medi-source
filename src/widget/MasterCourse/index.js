import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import MasterCard from "@/components/MasterCard";

const MasterCourse = () => {
    return (
        <div className="w-full py-5 relative md:!py-4 px-4 flex flex-col items-center gap-5 md:!gap-4 rounded-2xl bg-primary">
            <div className="flex flex-col justify-center items-center">
                <div className="flex gap-2">
                    <Image src={"/assets/icons/masterclass.svg"} height={40} width={40} alt="upcoming" className=" h-10 w-10" />
                    <h2 className="text-H2 font-bold text-white">ফ্রি লাইভ মাস্টারক্লাস</h2>
                </div>
                <p className="text-center md:!text-start text-white">দেখে নিন কি কি পাচ্ছেন ওস্তাদের লাইভ কোর্সে জয়েন করলে</p>
            </div>
            <div className="flex flex-col gap-6 self-stretch">
                <div className="flex w-full gap-3 md:!gap-4 items-center">
                    <Image src={"/assets/icons/up_large.svg"} height={40} width={40} alt="up" className=" h-10 w-10" />
                    <p className="text-H4 font-bold whitespace-nowrap text-white">আপকামিং লাইভ মাস্টারক্লাস</p>
                    <div className="h-[1px] w-full bg-[#475467]"></div>
                </div>
                <div className="flex flex-col items-end gap-6 w-full">
                    <div className="!grid grid-cols-1 gap-4 w-full sm:!grid-cols-2 sm:!gap-6 lg:!gap-5 lg:!grid-cols-4">
                        <Link href={"#"}>
                            <MasterCard cardClass={" hover:border-warning_dark"} btnClass={" bg-warning_light !border-warning_dark hover:bg-warning_main"} />
                        </Link>
                        <Link href={"#"}>
                            <MasterCard cardClass={" hover:border-warning_dark"} btnClass={" bg-warning_light !border-warning_dark hover:bg-warning_main"} />
                        </Link>
                        <Link href={"#"}>
                            <MasterCard cardClass={" hover:border-warning_dark"} btnClass={" bg-warning_light !border-warning_dark hover:bg-warning_main"} />
                        </Link>
                        <Link href={"#"}>
                            <MasterCard cardClass={" hover:border-warning_dark"} btnClass={" bg-warning_light !border-warning_dark hover:bg-warning_main"} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:!gap-6 self-stretch">
                <div className="flex w-full gap-4 items-center">
                    <Image src={"/assets/icons/next_comming.svg"} height={40} width={40} alt="up" className=" h-10 w-10" />
                    <p className="text-H4 font-bold whitespace-nowrap text-white">পূর্ববর্তী মাস্টারক্লাসসমূহ</p>

                    <div className="h-[1px] w-full bg-[#475467]"></div>
                </div>
                <div className="flex flex-col items-end gap-6">
                    <div className="!grid grid-cols-1 gap-4 w-full sm:!grid-cols-2 sm:!gap-6 lg:!gap-5 lg:!grid-cols-4">
                        <Link href={"#"}>
                            <MasterCard free cardClass={" hover:border-warning_dark"} btnClass={"bg-primary text-white !border-primary hover:bg-secondary"} />
                        </Link>
                        <Link href={"#"}>
                            <MasterCard free cardClass={" hover:border-warning_dark"} btnClass={"bg-primary text-white !border-primary hover:bg-secondary"} />
                        </Link>
                        <Link href={"#"}>
                            <MasterCard free cardClass={" hover:border-warning_dark"} btnClass={"bg-primary text-white !border-primary hover:bg-secondary"} />
                        </Link>
                        <Link href={"#"}>
                            <MasterCard free cardClass={" hover:border-warning_dark"} btnClass={"bg-primary text-white !border-primary hover:bg-secondary"} />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Link className="w-full" href="/category">
                    <Button className={" w-full bg-secondary_mid flex items-center justify-center gap-2"}>
                        সব মাস্টারক্লাস দেখুন
                        <Image height={24} width={24} alt="arrow" src={"/assets/icons/arrow_right.svg"} className=" h-6 w-6" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default MasterCourse;
