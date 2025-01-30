"use client";
import React from "react";
import useOrderHistory from "@/app/hooks/useOrderHistory";
import History from "@/components/History";

const AllHistories = () => {
    const params = {
        pagination: 20,
    };

    const { data, error, loading } = useOrderHistory(params);

    return (
        <div className=" grid sm:grid-cols-2 grid-cols-1  gap-x-6 md:gap-y-3 gap-y-2">
            {data?.data?.data.map((order) => (
                <History key={order.id} orderID={order.order_id} orderDate={order.created_at} deliveryDate={order.delivery_date} amount={order.total} status={order.status} />
            ))}
        </div>
    );
};

export default AllHistories;
