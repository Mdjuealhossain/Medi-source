"use client";
import { useEffect, useState } from "react";

import Card from "@/components/Card";
import useCategories from "@/app/hooks/useCategories";
import useProducts from "@/app/hooks/useProducts";
import { useCart } from "@/app/utilities/cartContex";

const Products = () => {
    const [activeTab, setActiveTab] = useState(null);
    const { cartItems, addToCart } = useCart();
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
                {products?.data?.data.map((data) => {
                    const isInCart = cartItems.some((item) => item.id === data.id);
                    return <Card handleSelectedItem={() => addToCart(data)} isAdded={isInCart} key={data.id} id={data.id} image={data.image} alt={data.name} name={data.name} price={data.price} discount={data.discount_price} extraoff={data.discount_percentage} company={data.company.name} />;
                })}
            </div>
        </div>
    );
};

export default Products;
