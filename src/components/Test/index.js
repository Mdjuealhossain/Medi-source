import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button";

const Test = () => {
    return (
        <div className="w-full flex flex-row-reverse md:!flex-col gap-3 md:!gap-6 p-2 rounded-lg border border-gray_300 bg-white shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col h-auto md:h-fit justify-between md:!justify-start w-full md:!w-auto gap-4">
                <div className="flex flex-col gap-4">
                    <h4 className=" text-H4 font-bold">
                        আপনার কোডিং নলেজ এক্সপ্লোর করুন
                        <span>CodeMama</span> -র সাথে
                    </h4>
                </div>
                <div className="flex">
                    <Link href="/codemama">
                        <Button className="group z-50 w-full flex gap-2 justify-center items-center transition-all text-caption duration-200 active:scale-[98%] h-8 px-3 py-2 rounded bg-primary hover:bg-gray_800 ">
                            <p className="uppercase whitespace-nowrap transition-all duration-200 font-semibold text-white">Check Codemama</p>
                            <svg className=" h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" fill="#ffffff"></path>
                                </g>
                            </svg>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className=" md:h-223 h-100">
                <Image src={"/assets/image/home/test.webp"} height={230} width={526} alt="test" className="h-full md:!aspect-[16/7] object-cover rounded-tl-lg rounded border max-h-full max-w-full w-full border-gray_300" />
            </div>
        </div>
    );
};

export default Test;
