"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import useCategories from "@/app/hooks/useCategories";
import { useCart } from "@/app/utilities/cartContex";
import useProducts from "@/app/hooks/useProducts";
import Card from "@/components/Card";

const Products = ({ flas_sell }) => {
    const [activeTab, setActiveTab] = useState(null);
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cartItems, addToCart, companies, setCompanies, isSearch, setIsSearch } = useCart();

    const { data: tabs } = useCategories();
    useEffect(() => {
        if (tabs?.data?.length > 0) {
            setActiveTab(tabs.data[0].id);
        }
    }, [tabs]);

    const params = {
        categoryId: activeTab,
        companyIds: companies,
        search: isSearch,
        pagination: 8,
        page: page,
        isFlashSale: flas_sell && 1,
    };

    const { data: fetchedProducts, error, loading: fetchLoading } = useProducts(params);

    useEffect(() => {
        setProducts([]);
        setPage(1);
        // setIsSearch("");
    }, [activeTab, companies, isSearch]);

    useEffect(() => {
        if (fetchedProducts?.data?.data.length) {
            const productsWithQuantity = fetchedProducts.data.data.map((product) => ({
                ...product,
                quantity: 1,
                isCart: false,
            }));

            setProducts((prevProducts) => {
                // Append new products to the existing ones (don't overwrite)
                const newProducts = productsWithQuantity.filter((product) => !prevProducts.some((p) => p.id === product.id));
                return [...prevProducts, ...newProducts];
            });

            setLoading(false);
        }
    }, [fetchedProducts]);

    const handleScroll = () => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const bottomPosition = document.documentElement.offsetHeight;
        if (scrollPosition >= bottomPosition - 100 && !loading) {
            setLoading(true);
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    // Handle tab change and reset data
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setCompanies([]);
        setIsSearch("");
        setProducts([]);
        setPage(1);
    };

    return (
        <div>
            <div className="flex justify-center mb-6 md:mb-12 items-center md:gap-4 gap-2 whitespace-nowrap md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar">
                {tabs?.data.map((tab) => (
                    <span key={tab.id} className={`md:py-2 py-1 px-3 md:px-5 capitalize font-medium cursor-pointer text-body1 rounded-lg border border-success_main transition-all duration-400 focus:outline-none ${activeTab === tab.id ? " bg-success_main hover:bg-success_dark text-white" : ` bg-white text-primary`}`} onClick={() => handleTabChange(tab.id)}>
                        <span>{tab.name}</span>
                    </span>
                ))}
            </div>
            <div className=" grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:grid-cols-2 lg:gap-8 md:gap-4 gap-2">
                {products.map((data, index) => {
                    const isInCart = cartItems.some((item) => item.id === data.id);
                    return <Card handleSelectedItem={() => addToCart(data)} isAdded={isInCart} key={index} id={data.id} image={data.image} alt={data.name} name={data.name} price={data.price} discount={data.discount_price} extraoff={data.discount_percentage} company={data.company && data.company.name} />;
                })}
            </div>
            {!fetchLoading && products.length == 0 && (
                <div className="flex justify-center flex-col items-center ">
                    <div className=" md:h-170 h-100 flex mb-4 md:mb-6 items-center justify-between overflow-hidden">
                        <Image height={400} width={400} src={"/assets/image/home/not_found_product.webp"} alt={"not found"} className=" max-h-full max-w-full h-auto w-auto" />
                    </div>
                    <h4 className="text-H4 font-semibold mb-2 text-center capitalize text-secondary">Product is not available</h4>
                    <p className="text-center text-secondary">
                        Looks like you haven’t made your choice yet, <br /> add all your favorite products
                    </p>
                </div>
            )}

            {fetchLoading && loading && products.length > 0 && (
                <div className="fixed inset-0 flex items-end justify-center z-50">
                    <Image src={"/assets/icons/loading.svg"} alt="loading" height={24} width={24} className=" md:h-8 md:w-8 h-6 w-6 md:mb-2 mb-12" />
                </div>
            )}
        </div>
    );
};

export default Products;
