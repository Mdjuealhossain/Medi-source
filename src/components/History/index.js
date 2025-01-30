import React from "react";

import { convertDate } from "@/app/utilities/convertDate";

const History = ({ orderID, orderDate, deliveryDate, amount, status }) => {
    const time = true;
    return (
        <div className=" px-4 py-5 flex items-center justify-between bg-white rounded-md">
            <div className=" flex flex-col gap-1">
                <h6 className=" text-subtitle1 capitalize font-semibold">Order ID: {orderID}</h6>
                <p className=" text-body2 text-secondary">
                    Ordered: <span className=" uppercase">{convertDate(orderDate, time)}</span>
                </p>
                {deliveryDate && <p className=" text-body2 font-semibold"> Delivery: {convertDate(deliveryDate)}</p>}
            </div>
            <div className=" flex flex-col gap-0.5">
                <h6 className=" text-subtitle1 capitalize font-semibold">৳ {amount}</h6>
                <h6 className=" text-subtitle1 capitalize font-semibold">{status}</h6>
            </div>
        </div>
    );
};

export default History;
