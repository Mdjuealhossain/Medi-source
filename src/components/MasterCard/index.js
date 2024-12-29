import Image from "next/image";
import React from "react";
import Button from "../Button";

const MasterCard = ({ cardClass, btnClass, free }) => {
    return (
        <div className={`${cardClass} w-full h-full flex flex-col justify-between gap-4 md:gap-5 p-3 md:!p-4 rounded-lg lg:rounded-xl border  bg-white transition-all duration-300`}>
            <div className="w-full flex flex-col gap-4 md:gap-5">
                <div className=" h-150 flex items-center justify-center object-cover rounded-sm lg:rounded-lg overflow-hidden">
                    <Image src={"/assets/image/home/course.jpg"} height={150} width={261} alt="course" className=" h-auto w-auto max-w-full max-h-full" />
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="hidden md:!flex flex-wrap gap-2 w-full">
                            <p className=" text-caption mb-2">WordPress Theme Development</p>
                        </div>
                        <h6 className=" text-H6 font-bold">ওয়ার্ডপ্রেস থিম ডেভেলপমেন্ট শিখে কিভাবে ক্যারিয়ার শুরু করা যেতে পারে?</h6>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-1 self-stretch rounded">
                    {free && <p className=" text-caption">ফ্রি মাস্টারক্লাসটি হয়েছে</p>}
                    <div className={`flex items-start gap-1 text-body2 font-medium ${!free && " text-warning_dark"}`}>
                        <div className="min-w-6 max-w-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 11H4V19H20V11ZM15 5H9V7H7V5H4V9H20V5H17V7H15V5ZM6 13H8V15H6V13ZM11 13H13V15H11V13ZM16 13H18V15H16V13Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <p className="text-caption1 md:!text-body-b2 text-ostad-warning-100 whitespace-normal">শুক্রবার ২৭ ডিসেম্বর দুপুর ৩:০০</p>
                    </div>
                </div>
                <Button className={`${btnClass}`}>বিস্তারিত দেখি</Button>
            </div>
        </div>
    );
};

export default MasterCard;
