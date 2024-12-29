import Image from "next/image";
import React from "react";

const Goal = ({ course, workshop, title, img, alt }) => {
    return (
        <div className="overflow-hidden rounded-lg bg-gray_300 border border-transparent hover:border-divider">
            <div className="flex py-3 px-4 flex-col justify-center items-center gap-2 flex-1 animate_pulse">
                <div className="w-14 min-h-9 max-h-9 rounded-full flex items-center justify-center">
                    <Image src={img} height={24} width={24} className=" h-6 w-6" alt={alt} />
                </div>
                <div className="flex flex-col gap-4 w-full h-full justify-between items-center">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <p className=" font-bold text-center group-hover/cat:underline">{title}</p>
                        <p className=" text-xs whitespace-nowrap font-medium text-secondary text-center">
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
        </div>
    );
};

export default Goal;
