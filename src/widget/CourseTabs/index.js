import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";

const CourseTabs = ({ tabs }) => {
    const [isTab, setIsTab] = useState(tabs[0].id);
    const containerRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    // Update active section based on scroll position
    const handleScroll = () => {
        const scrollY = window.scrollY;
        tabs.forEach((section, index) => {
            const element = document.getElementById(section.id);
            if (element) {
                const { offsetTop, clientHeight } = element;
                if (scrollY >= offsetTop - 50 && scrollY < offsetTop + clientHeight) {
                    setIsTab(section.id);
                }
            }
        });
    };

    const handleScrolltab = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className=" transition-all duration-200 ease-in-out !z-50 !border-b border-gray_400 p-3 bg-white">
            <div ref={containerRef} className="flex items-center gap-3 overflow-auto no-scrollbar p-3" onScroll={handleScrolltab}>
                {tabs.map((tab) => (
                    <Link href={`#${tab.id}`} key={tab.id}>
                        <Button className={`${tab.id == isTab ? "!border-primary text-white bg-primary" : "!border-divider text-secondary"} !px-4 whitespace-nowrap !text-body1 font-semibold flex items-center justify-center gap-2`}>
                            <Image height={18} width={18} alt="arrow" src={`${tab.id == isTab ? "/assets/icons/webActive.svg" : "/assets/icons/web.png"}`} />
                            {tab.title}
                        </Button>
                    </Link>
                ))}
            </div>
            {/* Scroll Buttons */}
            {showLeftButton && (
                <button className="absolute left-8 top-1/2 -translate-y-1/2 bg-paper_bg hover:bg-warning_light p-2 rounded-full shadow-lg" onClick={scrollLeft}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" fill="#050400" />
                    </svg>
                </button>
            )}
            {showRightButton && (
                <button className="absolute right-8 top-1/2 -translate-y-1/2 bg-paper_bg hover:bg-warning_light p-2 rounded-full shadow-lg" onClick={scrollRight}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#050400" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default CourseTabs;
