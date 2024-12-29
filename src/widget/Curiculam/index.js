import React from "react";
import Image from "next/image";
import Link from "next/link";

import Class from "@/components/Class";
import Button from "@/components/Button";

const Curiculam = () => {
    return (
        <>
            <div className="relative">
                <h1 className=" text-H1 font-bold text-center mb-2 md:mb-4">কারিকুলাম</h1>
            </div>
            <div className="flex justify-center gap-1.5 md:!gap-4 mb-3 flex-wrap">
                <div className="flex flex-wrap justify-center items-center bg-inherit rounded-[4px] w-fit gap-2 text-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.75 2.5C7.30812 2.5 7.86077 2.60993 8.37641 2.82351C8.89204 3.03709 9.36056 3.35015 9.75521 3.7448C10.1499 4.13945 10.4629 4.60796 10.6765 5.1236C10.8901 5.63923 11 6.19188 11 6.75V11H6.75C5.62283 11 4.54183 10.5522 3.7448 9.7552C2.94777 8.95817 2.5 7.87717 2.5 6.75C2.5 5.62283 2.94777 4.54183 3.7448 3.7448C4.54183 2.94777 5.62283 2.5 6.75 2.5ZM9 9V6.75C9 6.30499 8.86804 5.86998 8.62081 5.49997C8.37358 5.12996 8.02217 4.84157 7.61104 4.67127C7.19991 4.50097 6.74751 4.45642 6.31105 4.54323C5.87459 4.63005 5.47368 4.84434 5.15901 5.15901C4.84434 5.47368 4.63005 5.87459 4.54323 6.31105C4.45642 6.7475 4.50098 7.1999 4.67127 7.61104C4.84157 8.02217 5.12996 8.37357 5.49997 8.62081C5.86998 8.86804 6.30499 9 6.75 9H9ZM6.75 13H11V17.25C11 18.0906 10.7507 18.9123 10.2837 19.6112C9.81675 20.3101 9.15299 20.8548 8.37641 21.1765C7.59982 21.4982 6.74529 21.5823 5.92087 21.4183C5.09645 21.2543 4.33917 20.8496 3.7448 20.2552C3.15042 19.6608 2.74565 18.9036 2.58166 18.0791C2.41768 17.2547 2.50184 16.4002 2.82351 15.6236C3.14519 14.847 3.68992 14.1833 4.38883 13.7163C5.08774 13.2493 5.90943 13 6.75 13ZM6.75 15C6.30499 15 5.86998 15.132 5.49997 15.3792C5.12996 15.6264 4.84157 15.9778 4.67127 16.389C4.50098 16.8001 4.45642 17.2525 4.54323 17.689C4.63005 18.1254 4.84434 18.5263 5.15901 18.841C5.47368 19.1557 5.87459 19.3699 6.31105 19.4568C6.74751 19.5436 7.19991 19.499 7.61104 19.3287C8.02217 19.1584 8.37358 18.87 8.62081 18.5C8.86804 18.13 9 17.695 9 17.25V15H6.75ZM17.25 2.5C18.3772 2.5 19.4582 2.94777 20.2552 3.7448C21.0522 4.54183 21.5 5.62283 21.5 6.75C21.5 7.87717 21.0522 8.95817 20.2552 9.7552C19.4582 10.5522 18.3772 11 17.25 11H13V6.75C13 5.62283 13.4478 4.54183 14.2448 3.7448C15.0418 2.94777 16.1228 2.5 17.25 2.5ZM17.25 9C17.695 9 18.13 8.86804 18.5 8.62081C18.87 8.37357 19.1584 8.02217 19.3287 7.61104C19.499 7.1999 19.5436 6.7475 19.4568 6.31105C19.37 5.87459 19.1557 5.47368 18.841 5.15901C18.5263 4.84434 18.1254 4.63005 17.689 4.54323C17.2525 4.45642 16.8001 4.50097 16.389 4.67127C15.9778 4.84157 15.6264 5.12996 15.3792 5.49997C15.132 5.86998 15 6.30499 15 6.75V9H17.25ZM13 13H17.25C18.0906 13 18.9123 13.2493 19.6112 13.7163C20.3101 14.1833 20.8548 14.847 21.1765 15.6236C21.4982 16.4002 21.5823 17.2547 21.4183 18.0791C21.2544 18.9036 20.8496 19.6608 20.2552 20.2552C19.6608 20.8496 18.9036 21.2543 18.0791 21.4183C17.2547 21.5823 16.4002 21.4982 15.6236 21.1765C14.847 20.8548 14.1833 20.3101 13.7163 19.6112C13.2493 18.9123 13 18.0906 13 17.25V13ZM15 15V17.25C15 17.695 15.132 18.13 15.3792 18.5C15.6264 18.87 15.9778 19.1584 16.389 19.3287C16.8001 19.499 17.2525 19.5436 17.689 19.4568C18.1254 19.3699 18.5263 19.1557 18.841 18.841C19.1557 18.5263 19.37 18.1254 19.4568 17.689C19.5436 17.2525 19.499 16.8001 19.3287 16.389C19.1584 15.9778 18.87 15.6264 18.5 15.3792C18.13 15.132 17.695 15 17.25 15H15Z"
                            fill="#050400"
                        />
                    </svg>
                    <p className="font-medium text-body2 text-center flex justify-center items-center">৪১ মডিউল</p>
                </div>
                <div className="flex flex-wrap justify-center items-center bg-inherit rounded-[4px] w-fit gap-2 text-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.92901 2.92896L6.34301 4.34296C5.59904 5.08503 5.00906 5.96682 4.60697 6.93763C4.20488 7.90845 3.99861 8.94916 4.00001 9.99996C4.00001 12.21 4.89501 14.21 6.34301 15.657L4.93001 17.07C3.99998 16.1426 3.26237 15.0406 2.75954 13.8273C2.25672 12.614 1.9986 11.3133 2.00001 9.99996C1.99833 8.68649 2.25623 7.38565 2.75889 6.17217C3.26154 4.95869 3.99904 3.85651 4.92901 2.92896ZM19.071 2.92896C20.001 3.85651 20.7385 4.95869 21.2411 6.17217C21.7438 7.38565 22.0017 8.68649 22 9.99996C22.0017 11.3134 21.7438 12.6143 21.2411 13.8277C20.7385 15.0412 20.001 16.1434 19.071 17.071L17.657 15.657C18.401 14.9149 18.991 14.0331 19.393 13.0623C19.7951 12.0915 20.0014 11.0507 20 9.99996C20 7.78996 19.105 5.78996 17.657 4.34296L19.07 2.92996L19.071 2.92896ZM7.75701 5.75696L9.17201 7.17196C8.79997 7.54288 8.50491 7.98367 8.30378 8.46899C8.10264 8.95431 7.99941 9.4746 8.00001 9.99996C8.00001 11.105 8.44801 12.105 9.17201 12.828L7.75701 14.243C7.19904 13.6864 6.75657 13.025 6.45504 12.2968C6.15352 11.5686 5.99888 10.7881 6.00001 9.99996C6.00001 8.34296 6.67201 6.84296 7.75701 5.75696ZM16.243 5.75696C16.801 6.31355 17.2434 6.97494 17.545 7.7031C17.8465 8.43126 18.0011 9.21183 18 9.99996C18.0011 10.7881 17.8465 11.5686 17.545 12.2968C17.2434 13.025 16.801 13.6864 16.243 14.243L14.828 12.828C15.2 12.457 15.4951 12.0162 15.6962 11.5309C15.8974 11.0456 16.0006 10.5253 16 9.99996C16.0006 9.4746 15.8974 8.95431 15.6962 8.46899C15.4951 7.98367 15.2 7.54288 14.828 7.17196L16.243 5.75696ZM12 12C11.4696 12 10.9609 11.7892 10.5858 11.4142C10.2107 11.0391 10 10.5304 10 9.99996C10 9.46952 10.2107 8.96081 10.5858 8.58574C10.9609 8.21067 11.4696 7.99996 12 7.99996C12.5304 7.99996 13.0391 8.21067 13.4142 8.58574C13.7893 8.96081 14 9.46952 14 9.99996C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7892 12.5304 12 12 12ZM11 14H13V22H11V14Z"
                            fill="#050400"
                        />
                    </svg>

                    <p className="font-medium text-body2 text-center flex justify-center items-center">৪২ লাইভ ক্লাস</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col md:!grid grid-cols-1 gap-x-30px gap-y-20 w-full">
                    <div className="w-full flex flex-col gap-3">
                        <div className="w-full flex flex-col items-center gap-3 rounded p-3 border bg-white border-gray_400">
                            <h4 className=" text-H4 text-success_main font-bold">ফাউন্ডেশন (Module 0-6)</h4>
                            <div className="flex flex-wrap items-center gap-3">
                                <p className="text-caption text-secondary">ক্লাস নিবেনঃ</p>
                                <div className="flex items-cente gap-1 py-[3px] pl-1 pr-2 rounded-full bg-white">
                                    <Image src={"/assets/image/client.webp"} className=" h-4 w-4 rounded-full" height={16} width={16} alt="class" />

                                    <p className="text-caption md:!text-body-b2 text-ostad-black-40">Rabbil Hasan</p>
                                </div>
                                <div className="flex items-cente gap-1 py-[3px] pl-1 pr-2 rounded-full bg-white">
                                    <Image src={"/assets/image/client.webp"} className=" h-4 w-4 rounded-full" height={16} width={16} alt="class" />
                                    <p className="text-caption md:!text-body-b2 text-ostad-black-40">Amanullah Rafi</p>
                                </div>
                                <div className="flex items-cente gap-1 py-[3px] pl-1 pr-2 rounded-full bg-white">
                                    <Image src={"/assets/image/client.webp"} className=" h-4 w-4 rounded-full" height={16} width={16} alt="class" />

                                    <p className="text-caption md:!text-body-b2 text-ostad-black-40">Saklain Abdullah</p>
                                </div>
                            </div>
                            <div className="w-full !grid grid-cols-1 md:!grid-cols-2 gap-3">
                                <div className="w-full flex flex-col gap-3">
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p className=" font-light">ব্যাচের কার্যক্রম - মেইন লাইভ ক্লাস শুরুর আগেই যারা ইনরোল করেছেন, তারা কি বসে থাকবেন ? না! এই মডিউলে ব্যাসিক বেশ কিছু ভিডিও দেওয়া আছে। শুরু হয়ে যাক তবে শেখার জার্নি!&nbsp;</p>
                                        </div>
                                    </Class>
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>

                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                </div>
                                <div className="w-full flex flex-col gap-3">
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center gap-3 rounded p-3 border bg-white border-gray_400">
                            <h4 className=" text-H4 text-success_main font-bold">জাভাস্ক্রিপ্ট মাস্টারি (Module 7-10)</h4>
                            <div className="flex flex-wrap items-center gap-3">
                                <p className="text-caption text-secondary">ক্লাস নিবেনঃ</p>
                                <div className="flex items-cente gap-1 py-[3px] pl-1 pr-2 rounded-full bg-white">
                                    <Image src={"/assets/image/client.webp"} className=" h-4 w-4 rounded-full" height={16} width={16} alt="class" />

                                    <p className="text-caption md:!text-body-b2 text-ostad-black-40">Rabbil Hasan</p>
                                </div>
                                <div className="flex items-cente gap-1 py-[3px] pl-1 pr-2 rounded-full bg-white">
                                    <Image src={"/assets/image/client.webp"} className=" h-4 w-4 rounded-full" height={16} width={16} alt="class" />
                                    <p className="text-caption md:!text-body-b2 text-ostad-black-40">Amanullah Rafi</p>
                                </div>
                                <div className="flex items-cente gap-1 py-[3px] pl-1 pr-2 rounded-full bg-white">
                                    <Image src={"/assets/image/client.webp"} className=" h-4 w-4 rounded-full" height={16} width={16} alt="class" />

                                    <p className="text-caption md:!text-body-b2 text-ostad-black-40">Saklain Abdullah</p>
                                </div>
                            </div>
                            <div className="w-full !grid grid-cols-1 md:!grid-cols-2 gap-3">
                                <div className="w-full flex flex-col gap-3">
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                </div>
                                <div className="w-full flex flex-col gap-3">
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                    <Class
                                        facilities={[
                                            {
                                                icon: "/assets/icons/record.svg",
                                                title: "recorded video",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-33-41.592Z-LiveClass-line (1).png",
                                                title: " live class",
                                                count: 77,
                                            },
                                            {
                                                icon: "/assets/icons/2023-11-06T07-36-36.931Z-checkbox-multiple-line.png",
                                                title: "Quiz",
                                                count: 7,
                                            },
                                        ]}
                                        week={0}
                                        title="ক্লাস শুরুর আগেই যারা ইনরোল করেছেন এই মডিউল তাদের জন্য"
                                    >
                                        <div>
                                            <p>
                                                <strong>Live Class 1: </strong>CSS Introduction | How to add CSS | Basic Syntax | Selector |<br />
                                                Background properties | Border Properties | Border Radius
                                                <br />
                                                Display Property | Cursor Property | Float Property
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>Live Class 2:</strong>CSS Fonts | Important | Line Height | Margin | Padding | Filter |&nbsp;Overflow | Position | Word Wrap | Justify content | Text Decoration | Word and Letter Spacing | Variable
                                            </p>
                                        </div>
                                    </Class>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <Link className="w-full" href="#">
                        <Button className={" bg-secondary_mid flex items-center justify-center gap-2"}>আরো দেখুন</Button>
                    </Link>
                </div>
            </div>

            <div className="block md:!hidden">
                <section>
                    <div className="bg-white">
                        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1150px] xl:max-w-[1150px]">
                            <div className="py-8 md:!pt-14 md:!pb-24">
                                <div className="relative">
                                    <p className="text-center font-bold text-2xl mb-0 md:!mb-4">কোর্সটি আপনারই জন্য</p>
                                </div>
                                <div className="mt-6 md:!mt-10 !grid grid-cols-1 md:!grid-cols-3 gap-2 md:!gap-6">
                                    <div className="flex py-1.5 px-3 items-start gap-1.5 md:!gap-2.5 shrink-0 rounded shadow-sm bg-white">
                                        <Image src={"/assets/icons/2023-10-29T15-06-39.968Z-checkbox-circle-line.svg"} alt="checked" height={18} width={18} className=" h-4 w-4" />
                                        <p className=" text-sm">যারা শুন্য থেকে শুরু করে ওয়েব ডেভেলপার হতে চান</p>
                                    </div>
                                    <div className="flex py-1.5 px-3 items-start gap-1.5 md:!gap-2.5 shrink-0 rounded shadow-sm bg-white">
                                        <Image src={"/assets/icons/2023-10-29T15-06-39.968Z-checkbox-circle-line.svg"} alt="checked" height={18} width={18} className=" h-4 w-4" />
                                        <p className=" text-sm">ইউনিভার্সিটি কিংবা কলেজের শিক্ষার্থী যিনি ডেভেলপার হতে চান</p>
                                    </div>
                                    <div className="flex py-1.5 px-3 items-start gap-1.5 md:!gap-2.5 shrink-0 rounded shadow-sm bg-white">
                                        <Image src={"/assets/icons/2023-10-29T15-06-39.968Z-checkbox-circle-line.svg"} alt="checked" height={18} width={18} className=" h-4 w-4" />
                                        <p className=" text-sm">নিজের বিজনেসের জন্য ওয়েবসাইট বানাতে চান</p>
                                    </div>

                                    <div className="flex py-1.5 px-3 items-start gap-1.5 md:!gap-2.5 shrink-0 rounded shadow-sm bg-white">
                                        <Image src={"/assets/icons/2023-10-29T15-06-39.968Z-checkbox-circle-line.svg"} alt="checked" height={18} width={18} className=" h-4 w-4" />
                                        <p className=" text-sm">যিনি ওয়েব ডেভেলপমেন্ট শেখার বিগিনার স্টেজে আছেন</p>
                                    </div>
                                    <div className="flex py-1.5 px-3 items-start gap-1.5 md:!gap-2.5 shrink-0 rounded shadow-sm bg-white">
                                        <Image src={"/assets/icons/2023-10-29T15-06-39.968Z-checkbox-circle-line.svg"} alt="checked" height={18} width={18} className=" h-4 w-4" />
                                        <p className=" text-sm">যারা প্রজেক্ট করে ওয়েব ডেভেলপমেন্ট শিখতে চাচ্ছেন</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-col md:!flex-row gap-4 md:!gap-8 justify-center py-10 md:!py-[86px]">
                        <div className="w-full md:!w-[456px] p-2 md:!p-0 overflow-hidden flex md:!block gap-3 rounded-md !border border-ostad-black-opac-2 bg-white shadow-sm">
                            <div className=" h-100">
                                <Image src={"/assets/image/course/mern.jpg"} width={168} height={94} alt="client" className=" h-auto w-auto max-w-full max-h-full" />
                            </div>
                            <div className="flex p-0 md:!p-4 flex-col justify-center items-start gap-2 md:!gap-6 self-stretch">
                                <p className=" text-sm">ডাউনলোড করুন পুরো গাইডলাইন</p>
                                <p className="hidden md:!block text-ostad-black-60 text-subtitle-s2">MERN Stack Web Developer হবার পুরো গাইডলাইন দেখে নিতে এবং ক্লিয়ার রোডম্যাপ বুঝে নিতে ডাউনলোড করে করে নিন পুরো কারিকুলাম এবং গাইডলাইন</p>
                                <div className="w-full">
                                    <Button className={" bg-primary text-white"}>গাইডলাইন ডাউনলোড করুন</Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:!w-[456px] p-2 md:!p-0 overflow-hidden flex md:!block gap-3 rounded-md !border border-ostad-black-opac-2 bg-white shadow-sm">
                            <div className=" h-100">
                                <Image src={"/assets/image/course/mern.jpg"} width={168} height={94} alt="client" className=" h-auto w-auto max-w-full max-h-full" />
                            </div>
                            <div className="flex p-0 md:!p-4 flex-col justify-center items-start gap-2 md:!gap-6 self-stretch">
                                <p className=" text-sm">MERN Interview হ্যান্ডবুক</p>
                                <p className="hidden md:!block text-ostad-black-60 text-subtitle-s2">ডেভেলপার হবার ইন্টারভিউ ক্র্যাক করার জন্য ১০০+ মোস্ট ইম্পর্ট্যান্ট এবং ইফেক্টিভ ইন্টারভিউ প্রশ্ন এবং উত্তর সম্বলিত হ্যান্ডবুক ডাউনলোড করুন এখনই</p>
                                <div className="w-full">
                                    <Button className={" bg-primary text-white"}>হ্যান্ডবুক ডাউনলোড করুন</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Curiculam;
