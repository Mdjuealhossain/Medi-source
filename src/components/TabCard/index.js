import Image from "next/image";
import React from "react";

const TabCard = ({ course, workshop, title, img, alt, parentClass }) => {
    return (
        <div>
            <div className={`${parentClass} group/cat h-full cursor-pointer py-2 px-4 flex items-center gap-1.5 rounded-md !border `}>
                <div className="w-7 bg-white justify-center items-center rounded-full !shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)] p-1.5">
                    <Image height={16} width={16} alt={alt} className="w-4 min-w-4 brightness-0 group-hover/cat:brightness-100 transition-all duration-300" src={img} />
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5">
                    <p className="text-body2 whitespace-nowrap font-medium line-clamp-1 group-hover/cat:underline">{title}</p>
                    <p className=" text-xs whitespace-nowrap">
                        {course && (
                            <>
                                {course} {"• কোর্স "}
                            </>
                        )}
                        {workshop && (
                            <>
                                {workshop} {"• ওয়ার্কশপ"}
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TabCard;
