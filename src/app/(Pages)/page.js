"use client";
import React from "react";

import Bussiness from "@/widget/Bussiness";
import CareerGoal from "@/widget/CareerGoal";
import LiveCources from "@/widget/LiveCources";
import Herro from "@/widget/Herro";
import MasterCourse from "@/widget/MasterCourse";
import UpcomingCourse from "@/widget/UpcomingCourse";
import Graguates from "@/widget/Graguates";
import AppInstaller from "@/widget/AppInstaller";

const Home = () => {
    return (
        <div>
            <section className="my-6 md:!my-10">
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <Herro />
                </div>
            </section>
            <section className="w-full pt-10 md:!pt-16">
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <UpcomingCourse tabs={tabs} />
                </div>
            </section>
            <section className="w-full pt-10 md:!pt-16">
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <MasterCourse />
                </div>
            </section>
            <section className="w-full pt-10 md:!pt-16">
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <CareerGoal />
                </div>
            </section>
            <section className="w-full bg-white py-10 md:!py-16">
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <Bussiness />
                </div>
            </section>
            <section className="w-full py-10 md:!py-16">
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <LiveCources />
                </div>
            </section>
            <section className="w-full py-10 md:!py-16">
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <Graguates />
                </div>
            </section>
            <section className="bg-cover bg-center bg-no-repeat bg-app_banner w-full">
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <AppInstaller />
                </div>
            </section>
        </div>
    );
};

export default Home;
const tabs = [
    {
        id: "1",
        course: "৫",
        workshop: "৫",
        title: "Blockchain Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "2",
        course: "৫",
        workshop: "৫",
        title: "Blockchain Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "3",
        course: "৫",
        workshop: "৫",
        title: "Blockchain Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "4",
        course: "৫",
        workshop: "৫",
        title: "Blockchain Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "5",
        course: "৫",
        workshop: "৫",
        title: "Blockchain Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "6",
        course: "৫",
        workshop: "৫",
        title: "Blockchain Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "7",
        course: "৫",
        workshop: "৫",
        title: "Blockchain Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
];
