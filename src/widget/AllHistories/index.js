"use client";
import React, { useEffect, useState } from "react";

import useOrderHistory from "@/app/hooks/useOrderHistory";
import { useCart } from "@/app/utilities/cartContex";
import History from "@/components/History";
import Image from "next/image";

const AllHistories = () => {
    const [page, setPage] = useState(1);
    const [histories, setHistories] = useState([]);
    const [loading, setLoading] = useState(false);
    const { isSearch } = useCart();

    const params = {
        pagination: 16,
        page: page,
        search: isSearch,
    };
    const { data, error, loading: loadingHistory } = useOrderHistory(params);
    useEffect(() => {
        setHistories([]);
        setPage(1);
        // setIsSearch("");
    }, [isSearch]);

    // add new data
    useEffect(() => {
        if (data?.data?.data.length) {
            setHistories((prevProducts) => [...prevProducts, ...data.data.data]);
            setLoading(false);
        }
    }, [data]);

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

    return (
        <>
            <div className=" grid sm:grid-cols-2 grid-cols-1  gap-x-6 md:gap-y-3 gap-y-2">
                {histories.map((order, index) => (
                    <History key={index} orderID={order.order_id} orderDate={order.created_at} deliveryDate={order.delivery_date} amount={order.total} status={order.status} />
                ))}
            </div>
            {/* Loading Spinner */}
            {loadingHistory && loading && (
                <div className="fixed inset-0 flex items-end justify-center z-50">
                    <Image src="/assets/icons/loading_img.svg" alt="loading" height={24} width={24} className="md:h-16 md:w-16 h-10 w-10" />
                </div>
            )}
        </>
    );
};

export default AllHistories;
