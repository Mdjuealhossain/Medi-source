"use client";
import React from "react";

import Test from "@/components/Test";
import BussinessMarketing from "@/widget/BussinessMarketing";
import CourseTabs from "@/widget/CourseTabs";
import Creatives from "@/widget/Creatives";
import DataEngineering from "@/widget/DataEngineering";
import ProductManagment from "@/widget/ProductManagment";
import WebApp from "@/widget/Web&App";

const FreeCourse = () => {
    return (
        <>
            <section className="p-6 bg-white"></section>
            <div className="flex flex-col md:gap-10 md:mt-16 mt-6 gap-6">
                <section className="!sticky !top-0">
                    <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md relative lg:max-w-lg xl:max-w-lg">
                        <CourseTabs tabs={tabs} />
                    </div>
                </section>
                <section id={tabs[0].id}>
                    <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                        <WebApp />
                    </div>
                </section>
                <section id={tabs[1].id}>
                    <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                        <ProductManagment />
                    </div>
                </section>
                <section id={tabs[2].id}>
                    <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                        <BussinessMarketing />
                    </div>
                </section>
                <section id={tabs[3].id}>
                    <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                        <DataEngineering />
                    </div>
                </section>
                <section id={tabs[4].id}>
                    <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                        <div className="w-full !grid grid-cols-1 lg:!grid-cols-2 gap-4 md:!flex-row md:!gap-8 my-6">
                            <Test />
                            <Test />
                        </div>
                    </div>
                </section>
                <section id={tabs[5].id}>
                    <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                        <Creatives />
                    </div>
                </section>
            </div>
        </>
    );
};

export default FreeCourse;

const tabs = [
    {
        id: "Web&AppDevelopment",
        title: "Web & App Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "ProductManagement&Design",
        title: "Product Management & Design",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "Business&Marketing",
        title: "Business & Marketing",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "DataEngineering",
        title: "Data Engineering",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "Creatives",
        title: "Creatives",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "BlockchainDevelopment",
        title: "Blockchain Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
];
