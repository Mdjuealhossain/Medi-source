"use client";
import React, { useEffect, useState } from "react";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const initialCheckboxData = [
        { id: 1, label: "অপশন ১", checked: false },
        { id: 2, label: "অপশন ২", checked: false },
        { id: 3, label: "অপশন ৩", checked: false },
        { id: 4, label: "অপশন ৪", checked: false },
        { id: 5, label: "অপশন ৫", checked: false },
    ];

    const handleOpenMenu = () => setIsMenuOpen(true);
    const handleCloseMenu = () => setIsMenuOpen(false);

    const handleConfirm = (selectedOptions) => {
        alert(`নির্বাচিত অপশন: ${selectedOptions.map((cb) => cb.label).join(", ") || "কোনোটি নয়"}`);
        console.log("নির্বাচিত অপশন:", selectedOptions);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-blue-500 p-4 w-full">
                <div className="flex justify-between items-center">
                    <div className=" text-xl">আমার ওয়েবসাইট</div>
                    <button onClick={handleOpenMenu} className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100">
                        মেনু খুলুন
                    </button>
                </div>
            </nav>

            {/* Menu */}
            <MenuWithSearch isOpen={isMenuOpen} title="অপশন নির্বাচন করুন" checkboxData={initialCheckboxData} onClose={handleCloseMenu} onConfirm={handleConfirm} />
        </div>
    );
};

const MenuWithSearch = ({ isOpen, title, checkboxData, onClose, onConfirm }) => {
    const [searchText, setSearchText] = useState("");
    const [filteredCheckboxes, setFilteredCheckboxes] = useState(checkboxData);

    useEffect(() => {
        if (isOpen) {
            setSearchText("");
            setFilteredCheckboxes(checkboxData);
        }
    }, [isOpen, checkboxData]);

    const handleSearch = (e) => {
        const text = e.target.value.toLowerCase();
        setSearchText(text);
        setFilteredCheckboxes(checkboxData.filter((item) => item.label.toLowerCase().includes(text)));
    };

    const handleCheckboxChange = (id) => {
        setFilteredCheckboxes((prev) => prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
    };

    const handleConfirm = () => {
        onConfirm(filteredCheckboxes.filter((item) => item.checked));
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>

                <input type="text" value={searchText} onChange={handleSearch} placeholder="লেবেল খুঁজুন..." className="w-full p-2 border rounded mb-4" />

                <div className="space-y-2 max-h-40 overflow-y-auto">
                    {filteredCheckboxes.map((item) => (
                        <div key={item.id} className="flex items-center">
                            <input type="checkbox" id={`checkbox-${item.id}`} checked={item.checked || false} onChange={() => handleCheckboxChange(item.id)} className="mr-2" />
                            <label htmlFor={`checkbox-${item.id}`} className="text-gray-700">
                                {item.label}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex justify-end space-x-2">
                    <button onClick={onClose} className="px-4 py-2 bg-red-500  rounded hover:bg-red-600">
                        বন্ধ করুন
                    </button>
                    <button onClick={handleConfirm} className="px-4 py-2 bg-green-500  rounded hover:bg-green-600">
                        নিশ্চিত করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
