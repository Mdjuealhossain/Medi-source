import Container from "@/components/Container";
import Banner from "@/widget/Banner";
import Products from "@/widget/Products";

const Home = () => {
    return (
        <div className=" pt-6 md:pt-12 pb-16 md:pb-12">
            <section>
                <Container>
                    <Banner />
                </Container>
            </section>
            <section className=" py-6 md:py-12">
                <Container>
                    <Products />
                </Container>
            </section>
        </div>
    );
};

export default Home;
