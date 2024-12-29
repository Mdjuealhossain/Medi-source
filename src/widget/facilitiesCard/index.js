import Image from "next/image";
import React from "react";

const FacilitiesCard = () => {
    return (
        <div className="flex w-full h-full p-2 md:!p-3 flex-col items-center md:!justify-start gap-2 flex-1 self-stretch bg-white border border-gray_400">
            <Image src={"/assets/icons/industry.png"} height={32} width={50} alt="industry" />
            <div className="flex flex-col w-full items-center gap-1">
                <p className="text-button md:!text-h5 text-ostad-black-60 md:!text-ostad-black-60 text-center">ইন্ডাস্ট্রি ফোকাসড লাইভ কোর্সেস</p>
            </div>
        </div>
    );
};

export default FacilitiesCard;
