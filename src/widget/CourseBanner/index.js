import React from "react";
import Image from "next/image";

import Button from "@/components/Button";

const CourseBanner = () => {
    return (
        <div className="py-4 md:!pt-20 md:!pb-10 px-0 gap-2 md:!gap-10 flex flex-col z-[20] h-fit">
            <div className="hidden md:!flex w-full items-end gap-4">
                <div className="w-[55%] flex flex-col justify-end items-start gap-4 flex-1">
                    <div className="flex flex-col items-start gap-2 self-stretch">
                        <div className="flex flex-col items-start gap-2 self-stretch">
                            <div className="flex py-1 px-3 items-center gap-1 rounded-2xl bg-error_light">
                                <Image src={"/assets/icons/upcoming.svg"} height={18} width={18} alt="live" />
                                <p className=" text-caption font-semibold text-error_main">লাইভ কোর্স</p>
                            </div>
                            <div className="flex flex-col items-center gap-3 self-stretch">
                                <div className="flex flex-col items-start gap-2 self-stretch">
                                    <h4 className=" text-H4 font-bold text-center md:!text-start">Full Stack Web Development with JavaScript (MERN)</h4>
                                    <div className="flex items-center justify-center text-success_main gap-2">
                                        <div className="flex items-center gap-1">
                                            <p className="text-caption text-success_main md:!text-nav-menu">4.8</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5367 5.88L17.557 6.594L13.1057 10.71L14.287 16.656L8.99725 13.695ZM8.99725 11.976L12.1825 13.7587L11.4707 10.179L14.1505 7.70025L10.5257 7.2705L8.99725 3.95625L7.46875 7.27125L3.844 7.70025L6.52375 10.179L5.812 13.7587L8.99725 11.976Z"
                                                    fill="currentColor"
                                                ></path>
                                                <path d="M8.99725 11.976L12.1825 13.7587L11.4707 10.179L14.1505 7.70025L10.5257 7.2705L8.99725 3.95625L7.46875 7.27125L3.844 7.70025L6.52375 10.179L5.812 13.7587L8.99725 11.976Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <p className="underline cursor-pointer text-caption text-secondary">(313 Ratings)</p>
                                    </div>
                                </div>
                                <p className=" text-center md:!text-start text-body2 text-secondary">১ বারই কোর্স কিনুন। ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট এবং ব্যাকেন্ড ওয়েব ডেভেলপমেন্ট - ২ টা ক্যারিয়ার ট্র্যাকের দরজাই ওপেন রাখুন। কারন এক্সেস তো থাকবে লাইফটাইমই! আর সাথে ৩ টা জিনিস রাখবেন- ল্যাপটপ বা কম্পিউটার, ইন্টারনেট কানেকশন ও শেখার অদম্য ইচ্ছা। বিজয় আপনারই!</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div>
                                <Button className={" bg-warning_main hover:bg-warning_main flex items-center justify-center gap-2"}>
                                    ব্যাচে ভর্তি হোন
                                    <Image src={"/assets/icons/arrow_right.svg"} height={18} width={18} alt="right" />
                                </Button>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1 items-center">
                                    <h4 className=" text-H4">৳৮,০০০</h4>
                                </div>
                                <button className="flex items-center gap-[2px] cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V9.5C21.337 9.5 20.7011 9.76339 20.2322 10.2322C19.7634 10.7011 19.5 11.337 19.5 12C19.5 12.663 19.7634 13.2989 20.2322 13.7678C20.7011 14.2366 21.337 14.5 22 14.5V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4ZM8.085 19C8.18807 18.707 8.37955 18.4532 8.63301 18.2737C8.88647 18.0942 9.1894 17.9978 9.5 17.9978C9.8106 17.9978 10.1135 18.0942 10.367 18.2737C10.6204 18.4532 10.8119 18.707 10.915 19H20V16.032C19.2488 15.6597 18.6165 15.085 18.1745 14.3725C17.7325 13.6601 17.4982 12.8384 17.4982 12C17.4982 11.1616 17.7325 10.3399 18.1745 9.62746C18.6165 8.91505 19.2488 8.3403 20 7.968V5H10.915C10.8119 5.29299 10.6204 5.54677 10.367 5.72629C10.1135 5.90581 9.8106 6.00223 9.5 6.00223C9.1894 6.00223 8.88647 5.90581 8.63301 5.72629C8.37955 5.54677 8.18807 5.29299 8.085 5H4V19H8.085ZM9.5 11C9.10218 11 8.72064 10.842 8.43934 10.5607C8.15804 10.2794 8 9.89782 8 9.5C8 9.10218 8.15804 8.72064 8.43934 8.43934C8.72064 8.15804 9.10218 8 9.5 8C9.89782 8 10.2794 8.15804 10.5607 8.43934C10.842 8.72064 11 9.10218 11 9.5C11 9.89782 10.842 10.2794 10.5607 10.5607C10.2794 10.842 9.89782 11 9.5 11ZM9.5 16C9.10218 16 8.72064 15.842 8.43934 15.5607C8.15804 15.2794 8 14.8978 8 14.5C8 14.1022 8.15804 13.7206 8.43934 13.4393C8.72064 13.158 9.10218 13 9.5 13C9.89782 13 10.2794 13.158 10.5607 13.4393C10.842 13.7206 11 14.1022 11 14.5C11 14.8978 10.842 15.2794 10.5607 15.5607C10.2794 15.842 9.89782 16 9.5 16Z"
                                            fill="#050400"
                                        />
                                    </svg>

                                    <p className="text-caption">প্রোমো কোড</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 self-stretch">
                        <div>
                            <div className="flex rounded !border border-gray_400 text-secondary h-7 py-0.5 px-2 justify-center items-center gap-1 flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" fill="none">
                                    <g id="media/broadcast-line">
                                        <g id="Group">
                                            <path
                                                id="Vector"
                                                d="M2.4645 2.5L3.1715 3.207C2.79952 3.57804 2.50453 4.01893 2.30348 4.50434C2.10244 4.98975 1.9993 5.5101 2 6.0355C2 7.1405 2.4475 8.1405 3.1715 8.864L2.465 9.5705C1.99999 9.10682 1.63118 8.55583 1.37977 7.94918C1.12836 7.34253 0.999298 6.69218 1 6.0355C0.999167 5.37877 1.12812 4.72835 1.37944 4.12161C1.63077 3.51487 1.99952 2.96378 2.4645 2.5ZM9.5355 2.5C10.0005 2.96378 10.3692 3.51487 10.6206 4.12161C10.8719 4.72835 11.0008 5.37877 11 6.0355C11.0008 6.69223 10.8719 7.34265 10.6206 7.94939C10.3692 8.55613 10.0005 9.10722 9.5355 9.571L8.8285 8.864C9.20049 8.49296 9.49548 8.05207 9.69652 7.56666C9.89757 7.08125 10.0007 6.5609 10 6.0355C10 4.9305 9.5525 3.9305 8.8285 3.207L9.535 2.5005L9.5355 2.5ZM3.8785 3.914L4.586 4.6215C4.39999 4.80696 4.25245 5.02736 4.15189 5.27002C4.05132 5.51268 3.99971 5.77282 4 6.0355C4 6.588 4.224 7.088 4.586 7.4495L3.8785 8.157C3.59952 7.8787 3.37829 7.54801 3.22752 7.18393C3.07676 6.81985 2.99944 6.42956 3 6.0355C3 5.207 3.336 4.457 3.8785 3.914ZM8.1215 3.914C8.40049 4.1923 8.62172 4.52299 8.77249 4.88707C8.92325 5.25115 9.00057 5.64144 9 6.0355C9.00057 6.42956 8.92325 6.81985 8.77249 7.18393C8.62172 7.54801 8.40049 7.8787 8.1215 8.157L7.414 7.4495C7.60002 7.26404 7.74755 7.04364 7.84812 6.80098C7.94869 6.55832 8.0003 6.29818 8 6.0355C8.0003 5.77282 7.94869 5.51268 7.84812 5.27002C7.74755 5.02736 7.60002 4.80696 7.414 4.6215L8.1215 3.914ZM6 7.0355C5.73479 7.0355 5.48043 6.93014 5.2929 6.74261C5.10536 6.55507 5 6.30072 5 6.0355C5 5.77028 5.10536 5.51593 5.2929 5.32839C5.48043 5.14086 5.73479 5.0355 6 5.0355C6.26522 5.0355 6.51957 5.14086 6.70711 5.32839C6.89465 5.51593 7 5.77028 7 6.0355C7 6.30072 6.89465 6.55507 6.70711 6.74261C6.51957 6.93014 6.26522 7.0355 6 7.0355Z"
                                                fill="currentColor"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-caption text-secondary">৪২ টি লাইভ ক্লাস</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex rounded !border border-gray_400 text-secondary h-7 py-0.5 px-2 justify-center items-center gap-1 flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 16" fill="none">
                                    <path
                                        d="M6.09582 2.66667H14.7625V4H6.09582V2.66667ZM4.09582 2V4H4.76248V4.66667H2.76248V4H3.42915V2.66667H2.76248V2H4.09582ZM2.76248 9.33333V7.66667H4.09582V7.33333H2.76248V6.66667H4.76248V8.33333H3.42915V8.66667H4.76248V9.33333H2.76248ZM4.09582 13H2.76248V12.3333H4.09582V12H2.76248V11.3333H4.76248V14H2.76248V13.3333H4.09582V13ZM6.09582 7.33333H14.7625V8.66667H6.09582V7.33333ZM6.09582 12H14.7625V13.3333H6.09582V12Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className="text-caption text-secondary">১০ টি প্রজেক্টসমূহ</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex rounded !border border-gray_400 text-secondary h-7 py-0.5 px-2 justify-center items-center gap-1 flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 17" fill="none">
                                    <path
                                        d="M11.332 2.62972H13.9987C14.1755 2.62972 14.3451 2.69996 14.4701 2.82498C14.5951 2.95001 14.6654 3.11958 14.6654 3.29639V13.9631C14.6654 14.1399 14.5951 14.3094 14.4701 14.4345C14.3451 14.5595 14.1755 14.6297 13.9987 14.6297H1.9987C1.82189 14.6297 1.65232 14.5595 1.52729 14.4345C1.40227 14.3094 1.33203 14.1399 1.33203 13.9631V3.29639C1.33203 3.11958 1.40227 2.95001 1.52729 2.82498C1.65232 2.69996 1.82189 2.62972 1.9987 2.62972H4.66536V1.29639H5.9987V2.62972H9.9987V1.29639H11.332V2.62972ZM13.332 7.96305H2.66536V13.2964H13.332V7.96305ZM9.9987 3.96305H5.9987V5.29639H4.66536V3.96305H2.66536V6.62972H13.332V3.96305H11.332V5.29639H9.9987V3.96305ZM3.9987 9.29639H5.33203V10.6297H3.9987V9.29639ZM7.33203 9.29639H8.66536V10.6297H7.33203V9.29639ZM10.6654 9.29639H11.9987V10.6297H10.6654V9.29639Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className="text-caption text-secondary">৮৩ দিন বাকি</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex rounded !border border-gray_400 text-secondary h-7 py-0.5 px-2 justify-center items-center gap-1 flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 16" fill="none">
                                    <path
                                        d="M2.11246 2.662C2.11246 2.29667 2.40912 2 2.77446 2H13.4505C13.8158 2 14.1125 2.29667 14.1125 2.662V13.338C14.1123 13.5135 14.0425 13.6818 13.9184 13.8059C13.7943 13.93 13.626 13.9998 13.4505 14H2.77446C2.59894 13.9998 2.43066 13.93 2.30655 13.8059C2.18244 13.6818 2.11263 13.5135 2.11246 13.338V2.662ZM3.44579 3.33333V12.6667H12.7791V3.33333H3.44579ZM7.19379 5.61L10.4465 7.778C10.483 7.80234 10.513 7.83535 10.5338 7.87408C10.5545 7.91281 10.5654 7.95606 10.5654 8C10.5654 8.04394 10.5545 8.08719 10.5338 8.12592C10.513 8.16465 10.483 8.19766 10.4465 8.222L7.19312 10.39C7.15301 10.4166 7.10645 10.4318 7.05837 10.4341C7.0103 10.4364 6.96251 10.4256 6.92006 10.4029C6.87762 10.3802 6.84211 10.3465 6.8173 10.3052C6.79248 10.264 6.77929 10.2168 6.77912 10.1687V5.83133C6.77921 5.7831 6.79238 5.73579 6.81723 5.69445C6.84208 5.65311 6.87767 5.61929 6.92022 5.59657C6.96277 5.57386 7.01069 5.56312 7.05886 5.56548C7.10704 5.56784 7.15367 5.58323 7.19379 5.61Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className="text-caption text-secondary">১,১২৫ টি প্রি রেকর্ডেড ভিডিও</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full gap-2">
                        <div className="flex h-[28px] py-0.5 px-2 justify-center items-center gap-1 md:!flex-1 rounded border-gray_400 bg-success_light border">
                            <div className=" text-success_main">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path
                                        d="M10.1764 2C10.5444 2 10.8431 2.29867 10.8431 2.66667V4H14.1764C14.5444 4 14.8431 4.29867 14.8431 4.66667V13.3333C14.8431 13.7013 14.5444 14 14.1764 14H2.17643C1.80843 14 1.50977 13.7013 1.50977 13.3333V4.66667C1.50977 4.29867 1.80843 4 2.17643 4H5.50977V2.66667C5.50977 2.29867 5.80843 2 6.17643 2H10.1764ZM10.8431 5.33333H5.50977V12.6667H10.8431V5.33333ZM2.8431 5.33333V12.6667H4.17643V5.33333H2.8431ZM9.50977 3.33333H6.8431V4H9.50977V3.33333ZM12.1764 5.33333V12.6667H13.5098V5.33333H12.1764Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                            <p className="text-caption  text-success_main">জব প্লেসমেন্ট সাপোর্ট</p>
                        </div>
                        <div className="flex h-[28px] py-0.5 px-2 justify-center items-center gap-1 flex-1 rounded border-gray_400 bg-success_light border">
                            <div className=" text-success_main">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 17" fill="none">
                                    <path
                                        d="M11.332 2.62972H13.9987C14.1755 2.62972 14.3451 2.69996 14.4701 2.82498C14.5951 2.95001 14.6654 3.11958 14.6654 3.29639V13.9631C14.6654 14.1399 14.5951 14.3094 14.4701 14.4345C14.3451 14.5595 14.1755 14.6297 13.9987 14.6297H1.9987C1.82189 14.6297 1.65232 14.5595 1.52729 14.4345C1.40227 14.3094 1.33203 14.1399 1.33203 13.9631V3.29639C1.33203 3.11958 1.40227 2.95001 1.52729 2.82498C1.65232 2.69996 1.82189 2.62972 1.9987 2.62972H4.66536V1.29639H5.9987V2.62972H9.9987V1.29639H11.332V2.62972ZM13.332 7.96305H2.66536V13.2964H13.332V7.96305ZM9.9987 3.96305H5.9987V5.29639H4.66536V3.96305H2.66536V6.62972H13.332V3.96305H11.332V5.29639H9.9987V3.96305ZM3.9987 9.29639H5.33203V10.6297H3.9987V9.29639ZM7.33203 9.29639H8.66536V10.6297H7.33203V9.29639ZM10.6654 9.29639H11.9987V10.6297H10.6654V9.29639Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                            <p className="text-caption text-success_main">ক্লাস রেকর্ডিং এ লাইফটাইম এক্সেস</p>
                        </div>
                    </div>
                </div>
                <div className="w-[45%] h-full">
                    <div className="relative">
                        <div className="relative cursor-pointer group">
                            <div className="absolute top-0 z-[5] w-full flex gap-2 rounded-tl border-b !border-ostad-black-60 rounded-tr-[14px] py-1 px-2 bg-[rgba(16,24,40,0.20)] backdrop-blur-[2.5px] overflow-hidden">
                                <img className="min-w-8" src="https://cdn.ostad.app/public/upload/2024-02-06T10-08-49.464Z-VideosORANF.png" />
                                <p className="text-subtitle-s2 text-white">ক্লিক করে দেখে নিন কোর্সের ডেমো ক্লাস</p>
                            </div>
                            <img src="https://img.youtube.com/vi/F6ekTEnEsAU/hqdefault.jpg" alt="Full Stack Web Development with JavaScript (MERN) demo class" className="w-full aspect-video object-cover transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md shadow-lg border" />
                            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl">
                                <div className="bg-ostad-black-100/10 flex items-center justify-center rounded-full size-28">
                                    <div className="flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100">
                                        <img className="size-[72px] text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out" src="https://cdn.ostad.app/public/upload/2023-11-15T10-15-34.164Z-play-icon.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-ostad-black-bg flex justify-between items-center gap-2 md:!gap-4 p-2 md:!px-3 md:!py-2 rounded">
                <div className="max-w-fit md:!max-w-[132px] min-w-fit md:!min-w-[132px]">
                    <div className="flex flex-col gap-1">
                        <p className="text-caption font-medium text-secondary">ব্যাচ শুরু</p>
                        <div className="hidden md:!block">
                            <div className="flex flex-wrap justify-center items-center bg-inherit rounded-[4px] w-fit gap-2 text-center">
                                <p className="font-medium text-center text-body2 flex justify-center items-center  text-secondary ">বৃহস্পতিবার ২০ মার্চ</p>
                            </div>
                        </div>
                    </div>
                    <p className="block md:!hidden text-body2  text-secondary">২০ মার্চ</p>
                </div>
                <div className="w-[1px] self-stretch  bg-gray_400"></div>
                <div className="block md:!hidden my-2">
                    <div className="mb-2.5">
                        <div className="flex gap-1 items-center">
                            <div className=" text-warning_main">
                                <svg width="16" height="[object Object]" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28385 14.6668C4.60185 14.6668 1.61719 11.6822 1.61719 8.00016C1.61719 4.31816 4.60185 1.3335 8.28385 1.3335C11.9659 1.3335 14.9505 4.31816 14.9505 8.00016C14.9505 11.6822 11.9659 14.6668 8.28385 14.6668ZM8.28385 13.3335C9.69834 13.3335 11.0549 12.7716 12.0551 11.7714C13.0553 10.7712 13.6172 9.41465 13.6172 8.00016C13.6172 6.58567 13.0553 5.22912 12.0551 4.22893C11.0549 3.22873 9.69834 2.66683 8.28385 2.66683C6.86937 2.66683 5.51281 3.22873 4.51262 4.22893C3.51242 5.22912 2.95052 6.58567 2.95052 8.00016C2.95052 9.41465 3.51242 10.7712 4.51262 11.7714C5.51281 12.7716 6.86937 13.3335 8.28385 13.3335ZM8.95052 8.00016H11.6172V9.3335H7.61719V4.66683H8.95052V8.00016Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                            <p className="text-caption  text-secondary">লাইভ ক্লাস</p>
                        </div>
                        <p className="text-overline md:!text-caption ">
                            রাত ৯:০০- ১০:৩০ (<span>রবি,</span>
                            <span>মঙ্গল</span>)
                        </p>
                        <p className="text-overline md:!text-caption "></p>
                    </div>
                </div>
                <div className="block md:!hidden w-[1px] self-stretch  bg-gray_400"></div>
                <div className="max-w-fit hidden md:!block">
                    <div className="flex gap-2 items-center">
                        <div className=" text-warning_main">
                            <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.36198 0.666504V1.99984H10.362V0.666504H11.6953V1.99984H14.362C14.5388 1.99984 14.7084 2.07008 14.8334 2.1951C14.9584 2.32012 15.0286 2.48969 15.0286 2.6665V13.3332C15.0286 13.51 14.9584 13.6796 14.8334 13.8046C14.7084 13.9296 14.5388 13.9998 14.362 13.9998H2.36198C2.18517 13.9998 2.0156 13.9296 1.89057 13.8046C1.76555 13.6796 1.69531 13.51 1.69531 13.3332V2.6665C1.69531 2.48969 1.76555 2.32012 1.89057 2.1951C2.0156 2.07008 2.18517 1.99984 2.36198 1.99984H5.02865V0.666504H6.36198ZM13.6953 6.6665H3.02865V12.6665H13.6953V6.6665ZM10.386 7.42384L11.3286 8.3665L8.02865 11.6665L5.67131 9.30917L6.61531 8.3665L8.02931 9.78117L10.3866 7.42384H10.386ZM5.02865 3.33317H3.02865V5.33317H13.6953V3.33317H11.6953V3.99984H10.362V3.33317H6.36198V3.99984H5.02865V3.33317Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <p className="text-caption  text-secondary">লাইভ ক্লাস</p>
                    </div>
                    <p className="text-body2  text-secondary "></p>
                    <p className="text-body2  text-secondary ">
                        রাত ৯:০০- ১০:৩০ (<span>রবি,</span>
                        <span>মঙ্গল</span>)
                    </p>
                </div>
                <div className="hidden md:!block w-[1px] self-stretch bg-gray_400"></div>
                <div className="hidden lg:!block max-w-[132px] min-w-[132px]">
                    <div className="flex gap-2 items-center">
                        <img src="https://cdn.ostad.app/public/upload/2024-05-13T09-03-53.409Z-_chair.svg" />
                        <p className="text-caption  text-secondary">সিট বাকি</p>
                    </div>
                    <p className="text-body2   text-secondary">৯৯ টি</p>
                </div>
                <div className="hidden lg:!block w-[1px] self-stretch bg-gray_400"></div>
                <div className="max-w-fit md:!max-w-[132px] min-w-fit md:!min-w-[132px]">
                    <div className="flex gap-1 md:!gap-2 items-center">
                        <img className="w-4" src="https://cdn.ostad.app/public/upload/2023-11-25T10-38-35.495Z-Line.svg" />
                        <p className="text-caption text-secondary">ভর্তি চলছে</p>
                    </div>
                    <p className="text-caption text-secondary">১০ম ব্যাচে</p>
                </div>
            </div>
        </div>
    );
};

export default CourseBanner;
