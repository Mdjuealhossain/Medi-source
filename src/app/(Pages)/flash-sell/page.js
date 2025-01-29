import Container from "@/components/Container";
import Products from "@/widget/Products";

const FlashSell = () => {
    return (
        <div className=" pb-6 md:pb-12 ">
            <div className=" flex items-center justify-center flex-col px-4 py-2 bg-warning_extra_light">
                <h6 className=" text-H6 font-semibold text-center capitalize">flash sell</h6>
            </div>
            <section className=" py-6 md:py-12">
                <Container>
                    <Products flas_sell />
                </Container>
            </section>
        </div>
    );
};

export default FlashSell;
