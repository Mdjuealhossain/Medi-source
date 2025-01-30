import React from "react";

import Container from "@/components/Container";
import AllHistories from "@/widget/AllHistories";

const OrderHistory = () => {
    return (
        <div>
            <div className=" flex items-center justify-center flex-col px-4 py-6 bg-warning_extra_light">
                <h4 className="text-H4 font-semibold text-center capitalize">oreder history</h4>
            </div>
            <Container>
                <div className="md:pt-6 pt-4">
                    <AllHistories />
                </div>
            </Container>
        </div>
    );
};

export default OrderHistory;
