"use client";
import { useState } from "react";

import Card from "@/components/Card";
import Container from "@/components/Container";

const FlashSell = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <div className=" pb-6 md:pb-12 ">
            <div className=" flex items-center justify-center flex-col px-4 py-2 bg-warning_extra_light">
                <h6 className=" text-H6 font-semibold text-center capitalize">flash sell</h6>
            </div>
            <section className=" py-6 md:py-12">
                <Container>
                    <div className="pb-4 lg:pb-0 flex md:justify-center items-center gap-4 whitespace-nowrap md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar">
                        {tabs.map((tab) => (
                            <span key={tab.id} className={`py-3 px-4 md:px-5 capitalize font-medium cursor-pointer text-body1 rounded-lg border border-success_main transition-all duration-400 focus:outline-none  ${activeTab === tab.id ? " bg-success_main hover:bg-success_dark text-white" : ` bg-white text-primary`}`} onClick={() => setActiveTab(tab.id)}>
                                <span>{tab.label}</span>
                            </span>
                        ))}
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className=" grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
                        <Card image={"/assets/image/home/course.jpg"} alt={"medicin"} name={"Minoxidil 5 mg"} price={765} discount={250} extraoff={18.0} company={"lazpharma limited"} />
                        <Card image={"/assets/image/home/course.jpg"} alt={"medicin"} name={"Minoxidil 5 mg"} price={765} discount={250} extraoff={18.0} company={"lazpharma limited"} />
                        <Card image={"/assets/image/home/course.jpg"} alt={"medicin"} name={"Minoxidil 5 mg"} price={765} discount={250} extraoff={18.0} company={"lazpharma limited"} />
                        <Card image={"/assets/image/home/course.jpg"} alt={"medicin"} name={"Minoxidil 5 mg"} price={765} discount={250} extraoff={18.0} company={"lazpharma limited"} />
                        <Card image={"/assets/image/home/course.jpg"} alt={"medicin"} name={"Minoxidil 5 mg"} price={765} discount={250} extraoff={18.0} company={"lazpharma limited"} />
                        <Card image={"/assets/image/home/course.jpg"} alt={"medicin"} name={"Minoxidil 5 mg"} price={765} discount={250} extraoff={18.0} company={"lazpharma limited"} />
                        <Card image={"/assets/image/home/course.jpg"} alt={"medicin"} name={"Minoxidil 5 mg"} price={765} discount={250} extraoff={18.0} company={"lazpharma limited"} /> <Card image={"/assets/image/home/course.jpg"} alt={"medicin"} name={"Minoxidil 5 mg"} price={765} discount={250} extraoff={18.0} company={"lazpharma limited"} />
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default FlashSell;

const tabs = [
    { id: "medicine", label: "medicine" },
    { id: "surgical", label: "surgical" },
    { id: "syrups", label: "syrups" },
    { id: "indian", label: "indian" },
];
