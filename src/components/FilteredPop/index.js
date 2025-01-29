import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { ImCheckboxChecked } from "react-icons/im";
import { RxBox } from "react-icons/rx";

import Button from "../Button";

export const FilteredPop = ({ isOpen, title, checkboxData = [], onClose, onConfirm }) => {
    const [searchText, setSearchText] = useState("");
    const [filteredCheckboxes, setFilteredCheckboxes] = useState(checkboxData);

    useEffect(() => {
        if (isOpen) {
            setSearchText("");
            setFilteredCheckboxes(checkboxData);
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen, checkboxData]);

    const handleSearch = (e) => {
        const text = e.target.value.toLowerCase();
        setSearchText(text);
        setFilteredCheckboxes(checkboxData.filter((item) => item.name.toLowerCase().includes(text)));
    };

    const handleCheckboxChange = (id) => {
        setFilteredCheckboxes((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
    };

    const handleConfirm = () => {
        onConfirm(filteredCheckboxes.filter((item) => item.checked));
        onClose();
    };

    const handleClose = () => {
        // চেকবক্স ডেটাকে মূল অবস্থায় রিসেট করুন
        const resetData = checkboxData.map((item) => ({ ...item, checked: false }));
        setFilteredCheckboxes(resetData); // স্টেট আপডেট করুন
        onClose(); // পপআপ বন্ধ করুন
    };

    if (!isOpen) return null;

    return (
        <>
            <div onClick={onClose} className="fixed inset-0 top-[6.75rem] bg-black bg-opacity-50 z-10"></div>
            <div className="bg-white py-6 absolute top-full rounded-b md:left-[10%] shadow-lg md:w-300 w-full z-50 -px-4">
                <div className="flex justify-between items-center mb-4 px-6 border-b pb-2 border-divider">
                    <h2 className="text-H6 font-semibold capitalize">{title}</h2>
                    <span onClick={handleClose} className="cursor-pointer">
                        <MdClose size={18} />
                    </span>
                </div>
                <div className="px-6">
                    <div className="mb-4 flex flex-col gap-2">
                        <label className="capitalize">company</label>
                        <div className="relative">
                            <input placeholder="Search company..." value={searchText} onChange={handleSearch} type="text" className={`pr-4 pl-8 focus:ring-1 w-full py-0.5 text-body1 placeholder:!font-normal font-normal focus:ring-warning_main hover:ring-warning_main hover:shadow-input focus:shadow-input rounded-full focus:outline-none bg-warning_extra_light ring-1 ring-warning_main placeholder:text-warning_main focus:border-transparent`} />
                            <GoSearch className="absolute top-1.5 left-3 text-warning_main" />
                        </div>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto scrollbar">
                        {filteredCheckboxes.map((item) => (
                            <div key={item.id} className="flex items-center ">
                                <label className="w-3 mr-3 relative cursor-pointer">
                                    <input type="checkbox" id={`checkbox-${item.id}`} checked={item.checked || false} onChange={() => handleCheckboxChange(item.id)} className="hidden peer checkbox" />
                                    {item.checked ? <ImCheckboxChecked size={12} className=" text-warning_main" /> : <RxBox size={14} className="" />}
                                </label>
                                <label htmlFor={`checkbox-${item.id}`} className="font-light text-subtitle2 cursor-pointer">
                                    {item.name}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex justify-between space-x-2">
                        <Button type="submit" onClick={handleConfirm} size="small" className={"bg-warning_main hover:bg-warning_dark text-white"}>
                            Apply
                        </Button>
                        <Button onClick={handleClose} size="small" className={"bg-transparent text-warning_main border border-warning_main"}>
                            Reset
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
