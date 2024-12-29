import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bussiness = () => {
    return (
        <div className="w-full flex flex-col py-6 px-4 items-center justify-between rounded-2xl bg-secondary_light gap-4 lg:!flex-row-reverse">
            <Image src="/assets/image/home/goal.webp" className="w-full lg:!w-[476px] h-auto lg:!h-[268px] object-cover rounded-2xl" width={476} height={268} alt="goal" loading="lazy" />
            <div className="flex flex-col justify-center items-start md:!items-center lg:!items-start gap-6">
                <div className="flex flex-col gap-4 md:!items-center lg:!items-start">
                    <h1 className="text-H1 font-bold text-gray_800">Ostad for business</h1>
                    <p className=" text-gray_800">জয়েন করুন আমাদের কর্পোরেট স্কিলস ট্রেইনিং প্রোগ্রামে, ট্রেইনিং নিন দেশ সেরা ইন্ডাস্ট্রি এক্সপার্টদের থেকে আর সাজিয়ে নিন আপনার টিমকে নতুনভাবে।</p>
                </div>

                <Link href={"#"} className="flex w-full md:!w-[262px]">
                    <Button size="large" className={" bg-warning_main w-full hover:bg-warning_dark flex items-center justify-center gap-2"}>
                        বিস্তারিত দেখি
                        <Image height={18} width={18} alt="arrow" src={"/assets/icons/arrow_right.svg"} />
                    </Button>
                </Link>

                <div className="w-full flex flex-nowrap flex-col items-center gap-3 lg:!items-start">
                    <h4 className=" text-H4 text-gray_800 font-bold">আমাদের ক্লায়েন্ট</h4>
                    <div className="flex flex-wrap justify-center gap-6 md:!justify-start">
                        <div className=" h-10">
                            <Image height={40} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/client.png" />
                        </div>
                        <div className=" h-10">
                            <Image height={40} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/client.png" />
                        </div>
                        <div className=" h-10">
                            <Image height={40} width={55} layout="responsive" className=" max-h-full h-auto max-w-full w-auto transition-all duration-300 filter grayscale hover:!grayscale-0" alt="srvice" src="/assets/image/home/client.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bussiness;
