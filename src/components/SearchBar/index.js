"use client";
import Image from "next/image";
import React, { useState } from "react";

const SearchBar = ({ close }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(["Django", "Node.js", "React", "Express.js", "mongodb"]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredResults = searchResults.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            {/* Background Overlay */}
            <div onClick={close} className="fixed inset-0 top-[4.5rem] bg-black bg-opacity-50 z-10"></div>

            <div className=" bg-paper_bg p-1.5 absolute top-0 w-500  inset-x-3/5 z-50 border border-gray_400 rounded-2xl">
                <input type="text" autoFocus placeholder="ট্রেন্ডিং সার্চ..." value={searchTerm} onChange={handleSearch} className=" px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-transparent" />
                <div className=" border-t border-gray_400 my-1"></div>
                <div className=" px-2 py-1.5">
                    <p className="text-body2 font-medium text-secondary mb-2">সাম্প্রতিক সার্চ</p>
                    <div onClick={close} className=" flex items-center gap-2">
                        <Image src={"/assets/icons/recent.svg"} alt="recent" height={16} width={16} />
                        <p className=" text-body2 font-medium text-secondary"> Django</p>
                    </div>
                </div>
                <div className=" border-t border-gray_400 my-1"></div>
                <div className=" px-2 py-1.5">
                    <p className="text-body2 font-medium text-secondary mb-2">ট্রেন্ডিং সার্চ</p>
                    {filteredResults.length > 0 && (
                        <ul className="mt-2 bg-gray-700 rounded overflow-hidden">
                            {filteredResults.map((item, index) => (
                                <li onClick={close} key={index} className="cursor-pointer text-body2 font-medium text-secondary flex items-center gap-2 p-1">
                                    <Image src={"/assets/icons/arrow_right.svg"} height={16} width={16} alt="arrow" className=" grayscale-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchBar;
