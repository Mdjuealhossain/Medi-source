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
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);

    const { cartItems, addToCart, incrementQuantity, decrementQuantity, productQuantity, companies, setCompanies, isSearch, setIsSearch } = useCart();
    const { data: tabs } = useCategories();

    const params = {
        categoryId: activeTab,
        search: isSearch,
        companyIds: companies,
        pagination: 8,
        page,
        isFlashSale: flas_sell ? 1 : 0,
    };

    const { data: fetchedProducts, loading: fetchLoading } = useProducts(params);

    useEffect(() => {
        if (tabs?.data?.length && activeTab === null) {
            setActiveTab(tabs.data[0].id);
        }
    }, [tabs]);

    useEffect(() => {
        if (isSearch) {
            setCompanies([]);
            setActiveTab(null);
            setPage(1);
            setProducts([]);
        }
    }, [isSearch]);

    useEffect(() => {
        if (fetchedProducts?.data?.data.length) {
            const newProducts = fetchedProducts.data.data.map((product) => ({
                ...product,
                quantity: 1,
            }));

            setProducts((prev) => (page === 1 ? newProducts : [...prev, ...newProducts.filter((p) => !prev.some((item) => item.id === p.id))]));
            setLoading(false);
        }
    }, [fetchedProducts]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
            const bottomPosition = document.documentElement.offsetHeight;
            if (scrollPosition >= bottomPosition - 100 && !loading && fetchedProducts?.data?.data.length) {
                setLoading(true);
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading, fetchedProducts]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setIsSearch("");
        setProducts([]);
        setPage(1);
    };

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setIsOpen(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div className="relative">
            {/* Tab Selection */}
            {!isSearch && (
                <div className="flex justify-center mb-6 md:mb-12 items-center md:gap-4 gap-2 overflow-x-auto no-scrollbar">
                    {tabs?.data.map((tab) => (
                        <span key={tab.id} className={`md:py-2 py-1 px-3 md:px-5 capitalize font-medium cursor-pointer rounded-lg border transition-all ${activeTab === tab.id ? "bg-success_main text-white" : "bg-white text-primary"}`} onClick={() => handleTabChange(tab.id)}>
                            {tab.name}
                        </span>
                    ))}
                </div>
            )}

            {/* Loading Spinner */}
            {fetchLoading && loading && (
                <div className="fixed inset-0 flex items-end justify-center z-50">
                    <Image src="/assets/icons/loading_img.svg" alt="loading" height={24} width={24} className="md:h-16 md:w-16 h-10 w-10" />
                </div>
            )}

            {products.length > 0 && (
                <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
                    {products.map((data) => {
                        const cartItem = cartItems.find((item) => item.id === data.id);
                        const quantity = cartItem?.quantity || 0;

                        return <Card handleWarning={() => setIsOpen(true)} productQuantity={productQuantity} incrementQuantity={incrementQuantity} status={data.status} decrementQuantity={decrementQuantity} id={data.id} key={data.id} image={data.image} alt={data.name} name={data.name} price={data.price} discount={data.discount_price} extraoff={data.discount_percentage} company={data.company && data.company.name} handleSelectedItem={() => addToCart(data)} quantity={quantity} />;
                    })}
                </div>
            )}

            {!fetchLoading && !loading && <div className="text-center py-4">No more products available.</div>}

            {/* Stock Warning */}
            {isOpen && (
                <div className="fixed inset-0 flex items-end md:bottom-10 bottom-12 justify-center z-30">
                    <Container>
                        <div className="py-2 px-4 w-full font-medium bg-black text-white flex justify-between items-center rounded">
                            <p>This Product is out of stock</p>
                            <p onClick={() => setIsOpen(false)} className="text-info_main font-semibold cursor-pointer">
                                Close
                            </p>
                        </div>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default Products;
