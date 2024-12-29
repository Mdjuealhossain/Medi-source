import Image from "next/image";
import React from "react";
import Button from "../Button";

const Course = ({ courseCatagory }) => {
    return (
        <div className=" border rounded-lg overflow-hidden border-secondary_mid hover:border-divider hover:shadow-lg">
            <div className=" h-150 flex items-center justify-center object-cover ">
                <Image src={"/assets/image/home/course.jpg"} height={150} width={261} alt="course" className=" h-auto w-auto max-w-full max-h-full" />
            </div>
            <div>
                {courseCatagory && (
                    <div className=" p-2 flex items-center gap-2 border-b border-divider">
                        <div className=" px-2 py-1 bg-secondary_mid rounded text-xs">ব্যাচ ৫</div>
                        <div className=" px-2 py-1 bg-secondary_mid rounded text-xs flex items-center gap-1 justify-center">
                            <Image src={"/assets/icons/time-line.svg"} height={12} width={12} className=" h-3 w-3" alt="icon" />৫ দিন বাকি
                        </div>
                        <div className=" px-2 py-1 bg-secondary_mid rounded text-xs flex items-center gap-1 justify-center">
                            <Image src={"/assets/icons/recent.svg"} height={12} width={12} className=" h-3 w-3" alt="icon" />৫ দিন বাকি
                        </div>
                    </div>
                )}
                <div className=" px-4 py-2">
                    <h6 className=" text-H6 font-bold">App Development with Flutter Development ETC</h6>
                </div>
                <div className=" px-4 py-2 bg-secondary_light">
                    <Button className={" w-full bg-secondary_mid flex items-center justify-center gap-2"}>
                        বিস্তারিত দেখি
                        <Image height={18} width={18} alt="arrow" src={"/assets/icons/arrow_right.svg"} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Course;
