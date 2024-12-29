import React from "react";

import CourseBanner from "@/widget/CourseBanner";
import Curiculam from "@/widget/Curiculam";

const CourseDetails = () => {
    return (
        <>
            <section>
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <CourseBanner />
                </div>
            </section>
            <section className="bg-white pt-6 pb-8">
                <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                    <Curiculam />
                </div>
            </section>
        </>
    );
};

export default CourseDetails;
