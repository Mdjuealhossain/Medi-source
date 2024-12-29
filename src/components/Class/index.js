"use client";
import { useState } from "react";
import Image from "next/image";

const Class = ({ facilities = [], children, week, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleColaps = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div onClick={toggleColaps} className="flex flex-col items-start self-stretch bg-white rounded-md shadow-md cursor-pointer h-fit w-full overflow-hidden" title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য">
            <div className={`flex w-full p-3 !border-b ${isOpen ? " border-gray_400" : " border-transparent"} h-[77px] justify-between items-start`}>
                <div className="flex items-start gap-2">
                    <div className="bg-[#12b76a] flex-col py-1 px-2 flex justify-center items-center rounded">
                        <p className=" text-body2 font-medium text-white">সপ্তাহ</p>
                        <h6 className=" text-H6 font-bold text-white">{week}</h6>
                    </div>
                    <p className="text-ostad-black-80 text-base font-medium leading-[118.7%] line-clamp-2">{title}</p>
                </div>
                <div className="flex w-8 h-8 min-w-8 min-h-8 justify-center items-center rounded-full bg-gray_500">
                    <Image src={"/assets/icons/arrow-down-s-line.svg"} className={`h-4 w-4 ${isOpen ? " rotate-180" : " rotate-0"}`} height={16} width={16} alt="down" />
                </div>
            </div>
            {isOpen && (
                <div>
                    <div className="p-3">
                        <div className="flex flex-wrap gap-3 mb-2.5 ">
                            {facilities.map((fac, index) => (
                                <div key={index} className="flex flex-wrap justify-center items-center bg-gray_500 px-1.5 py-[3px]  rounded gap-2 text-center">
                                    <Image src={fac.icon} alt="icon" height={16} width={16} className=" h-4 w-4" />
                                    <p className="font-medium text-body2 text-center flex justify-center items-center">
                                        {fac.count} {fac.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="w-full pb-2">{children}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Class;
