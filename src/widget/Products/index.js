"use client";
import { useEffect, useState } from "react";

import Card from "@/components/Card";
import useCategories from "@/app/hooks/useCategories";
import useProducts from "@/app/hooks/useProducts";

const Products = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [storedData, setStoredData] = useState([]);
    const { data: tabs } = useCategories();
    const params = {
        companyIds: [1],
        categoryId: activeTab,
    };
    const { data: products, loading, error } = useProducts(params);

    useEffect(() => {
        if (tabs?.data?.length > 0) {
            setActiveTab(tabs.data[0].id);
        }
    }, [tabs]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCartData = localStorage.getItem("stor_cart_data");

            if (storedCartData) {
                setStoredData(JSON.parse(storedCartData));
            } else {
                localStorage.setItem("stor_cart_data", JSON.stringify([]));
            }
        }
    }, []);

    const handleSelectedItem = (id) => {
        const cart_data = products?.data?.data.filter((cart) => cart.id == id);
        const isItemAlreadyAdded = storedData.some((item) => item.id === id);
        if (!isItemAlreadyAdded) {
            const updatedArray = [...storedData, ...cart_data];
            setStoredData(updatedArray); // Update state with new item
            localStorage.setItem("stor_cart_data", JSON.stringify(updatedArray)); // Save to localStorage
        } else {
            alert("Item already in cart");
        }
    };

    // const filteredData = products?.data?.data.filter((data) => data.category_id == activeTab);

    return (
        <div>
            <div className="flex sm:justify-center mb-6 md:mb-12 items-center gap-4 whitespace-nowrap md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar">
                {tabs?.data.map((tab) => (
                    <span key={tab.id} className={`py-2 px-4 md:px-5 capitalize font-medium cursor-pointer text-body1 rounded-lg border border-success_main transition-all duration-400 focus:outline-none ${activeTab === tab.id ? " bg-success_main hover:bg-success_dark text-white" : ` bg-white text-primary`}`} onClick={() => setActiveTab(tab.id)}>
                        <span>{tab.name}</span>
                    </span>
                ))}
            </div>
            <div className=" grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:grid-cols-3 lg:gap-8 md:gap-4 gap-2">
                {products?.data?.data.map((data) => (
                    <Card handleSelectedItem={handleSelectedItem} key={data.id} id={data.id} image={data.image} alt={data.name} name={data.name} price={data.price} discount={data.discount_price} extraoff={data.discount_percentage} company={data.company.name} />
                ))}
            </div>
        </div>
    );
};

export default Products;
