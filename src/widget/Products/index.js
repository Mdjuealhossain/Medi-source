"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import useCategories from "@/app/hooks/useCategories";
import { useCart } from "@/app/utilities/cartContex";
import useProducts from "@/app/hooks/useProducts";
import Card from "@/components/Card";
import Container from "@/components/Container";

const Products = ({ flas_sell }) => {
    const [activeTab, setActiveTab] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [page, setPage] = useState(1);
    const { cartItems, addToCart, incrementQuantity, decrementQuantity, productQuantity, companies, setCompanies, isSearch, setIsSearch } = useCart();
    const { data: tabs } = useCategories();

    useEffect(() => {
        if (tabs?.data?.length > 0 && activeTab === null) {
            setActiveTab(tabs.data[0].id);
        }
    }, [tabs]);

    const params = {
        categoryId: activeTab,
        search: isSearch,
        companyIds: companies,
        pagination: 8,
        page: page,
        isFlashSale: flas_sell && 1,
    };

    const { data: fetchedProducts, loading: fetchLoading } = useProducts(params);

    useEffect(() => {
        if (isSearch) {
            setCompanies([]);
            setActiveTab(null);
            setPage(1);
            setProducts([]);
        }
    }, [isSearch, tabs?.data]);

    // Update products when fetched products are available
    useEffect(() => {
        if (fetchedProducts?.data?.data.length) {
            const productsWithQuantity = fetchedProducts.data.data.map((product) => ({
                ...product,
                quantity: 1,
            }));

            setProducts((prevProducts) => {
                const newProducts = productsWithQuantity.filter((product) => !prevProducts.some((p) => p.id === product.id));
                return [...prevProducts, ...newProducts];
            });
            setLoading(false);
        }
    }, [fetchedProducts]);

    // Scroll handler for infinite scrolling
    const handleScroll = () => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const bottomPosition = document.documentElement.offsetHeight;

        if (scrollPosition >= bottomPosition - 100 && !loading && fetchedProducts?.data?.data.length > 0) {
            setLoading(true);
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // Add scroll event listener
        return () => {
            window.removeEventListener("scroll", handleScroll); // Clean up on unmount
        };
    }, [loading, fetchedProducts?.data?.data.length]);

    // Handle tab change and reset data
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setIsSearch("");
        setProducts([]);
        setPage(1);
    };

    useEffect(() => {
        setPage(1);
        setProducts([]);
    }, [companies]);

    useEffect(() => {
        let timer;
        if (isOpen) {
            timer = setTimeout(() => setIsOpen(), 1500);
        }
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <>
            <div className="relative">
                {/* Tab Selection */}
                <div className={`flex justify-center mb-6 md:mb-12 items-center md:gap-4 gap-2 whitespace-nowrap md:scroll-container overflow-x-auto md:overflow-x-hidden no-scrollbar ${isSearch && " hidden"}`}>
                    {tabs?.data.map((tab) => (
                        <span key={tab.id} className={`md:py-2 py-1 px-3 md:px-5 capitalize font-medium cursor-pointer text-body1 rounded-lg border border-success_main transition-all duration-400 focus:outline-none ${activeTab === tab.id ? " bg-success_main hover:bg-success_dark text-white" : ` bg-white text-primary`}`} onClick={() => handleTabChange(tab.id)}>
                            <span>{tab.name}</span>
                        </span>
                    ))}
                </div>

                {/* Display products in grid layout */}
                {products.length > 0 && (
                    <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
                        {products.map((data) => {
                            const cartItem = cartItems.find((item) => item.id === data.id);
                            const quantity = cartItem?.quantity || 0;

                            return <Card handleWarning={() => setIsOpen(true)} productQuantity={productQuantity} incrementQuantity={incrementQuantity} status={data.status} decrementQuantity={decrementQuantity} id={data.id} key={data.id} image={data.image} alt={data.name} name={data.name} price={data.price} discount={data.discount_price} extraoff={data.discount_percentage} company={data.company && data.company.name} handleSelectedItem={() => addToCart(data)} quantity={quantity} />;
                        })}
                    </div>
                )}

                {products.length == 0 && !fetchLoading && <div className="text-center py-4">No more products available.</div>}

                {/* Loading spinner */}
                {fetchLoading && (
                    <div className="h-full flex items-center justify-center">
                        <Image src={"/assets/icons/loading_img.svg"} alt="loading" height={24} width={24} className="md:h-16 md:w-16 h-12 w-12" />
                    </div>
                )}

                {isOpen && (
                    <div className=" fixed inset-0 flex items-end md:bottom-10 bottom-12 justify-center z-30">
                        <Container>
                            <div className=" py-2 px-4 w-full font-medium bg-black text-white items-center justify-between flex rounded">
                                <p>This Productis out of stock</p>
                                <p onClick={() => setIsOpen(false)} className=" text-info_main font-semibold cursor-pointer">
                                    Close
                                </p>
                            </div>
                        </Container>
                    </div>
                )}
            </div>
        </>
    );
};

export default Products;
