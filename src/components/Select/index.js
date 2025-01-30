"use client";
import { useState, useEffect, useRef } from "react";
import { MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Select = ({ options = [], multipleValu, value = [], defaultValue, onChange, placeholder, inputClass }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const selectRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        if (defaultValue) {
            setSelectedValue(defaultValue);
        }
    }, [defaultValue]);

    const handleSelect = (selectedValue) => {
        if (multipleValu) {
            if (!value.some((item) => item.id === selectedValue.id)) {
                onChange([...value, selectedValue]);
            }
        } else {
            onChange(selectedValue);
            setSelectedValue(selectedValue.name);
            setIsOpen(false);
        }
    };

    return (
        <div className="relative" ref={selectRef}>
            {isOpen && <div ref={overlayRef} className="fixed inset-0 z-10 bg-gray-500 opacity-50" onClick={() => setIsOpen(false)} />}
            <div className={`${inputClass} relative cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
                <div className="flex flex-wrap gap-2 items-center">
                    {multipleValu
                        ? value.map((val) => {
                              const option = options.find((option) => option.id === val.id);
                              return (
                                  option && (
                                      <div key={val.id} className="flex items-center px-2 py-1 rounded-full bg-success_light ">
                                          {option.name}
                                          <span className="ml-2 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                                              <MdClose size={12} />
                                          </span>
                                      </div>
                                  )
                              );
                          })
                        : selectedValue && <span className="text-gray500 capitalize">{selectedValue}</span>}
                    {!selectedValue && <span className="text-gray500 opacity-70 capitalize">{placeholder || "Select..."}</span>}
                </div>
                <span className="absolute right-4 top-[35%]">{isOpen ? <MdKeyboardArrowUp className="text-gray700" /> : <MdKeyboardArrowDown className="text-gray700" />}</span>
            </div>
            {isOpen && (
                <div className="absolute z-50 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto border border-transparent">
                    <input type="text" className="w-full px-4 py-2 border-b border-warning_main focus:outline-none" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <ul className="max-h-48 overflow-y-auto scrollbar">
                        {options
                            .filter((option) => option.name.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map((option) => (
                                <li key={option.id} onClick={() => handleSelect(option)} className="px-4 py-2 hover:bg-secondary_bg cursor-pointer capitalize">
                                    {option.name}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Select;
