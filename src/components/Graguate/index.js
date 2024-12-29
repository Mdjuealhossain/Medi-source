import Image from "next/image";
import React from "react";

const Graguate = () => {
    return (
        <div className="w-full flex flex-col items-start p-3 gap-2 rounded-lg bg-white border !border-ostad-black-overlay">
            <p className=" text-subtitle2 text-gray_600 text-justify">এই কোর্সটি হচ্ছে আমার লাইফে করা one of the best course। লার্নিং এক্সপিরিয়েন্স বলেন বা ওস্তাদ টিমের সাপোর্ট বলেন, সবই ছিল অসাধারণ। একদম বেসিক থেকে এত সুন্দরভাবে ডিটেইলস শেখানো হয়েছে, যে আমি অনেক কিছুই শেখার সুযোগ পেয়েছি।</p>
            <div className=" border-t border-gray_300 w-full my-0"></div>
            <div className="flex justify-between items-center gap-2 w-full">
                <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center justify-center min-w-10 max-w-10 h-10 object-cover rounded-full">
                        <div className="rounded-full h-8 w-8 relative overflow-hidden">
                            <Image className="rounded-full aspect-square object-cover w-full" height={32} width={32} alt="grag" src={"/assets/image/home/grag.jpg"} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className=" font-semibold whitespace-nowrap">Jahid Hossain</p>
                        <p className="text-caption">Full Stack Web Development with MERN Batch 2</p>
                    </div>
                </div>
                <div className="w-8 h-8 min-w-8">
                    <Image alt="quit" height={32} width={32} src={"/assets/icons/quation.svg"} className=" h-full w-full" />
                </div>
            </div>
        </div>
    );
};

export default Graguate;
