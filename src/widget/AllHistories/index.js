"use client";
import React, { useEffect, useState } from "react";

import useOrderHistory from "@/app/hooks/useOrderHistory";
import History from "@/components/History";
import { useCart } from "@/app/utilities/cartContex";

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
        <div className=" grid sm:grid-cols-2 grid-cols-1  gap-x-6 md:gap-y-3 gap-y-2">
            {histories.map((order, index) => (
                <History key={index} orderID={order.order_id} orderDate={order.created_at} deliveryDate={order.delivery_date} amount={order.total} status={order.status} />
            ))}
        </div>
    );
};

export default AllHistories;
