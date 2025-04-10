"use client";
import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import "./responsive.css";
import Image from "next/image";
import Button from "@/components/Button";
import LandingDrawer from "@/widget/landingDrawer";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles
import { FaRuler } from "react-icons/fa";
import { FeatureItem } from "@/components/FeatureItem";
import Link from "next/link";
import CircularProgress from "@/components/CircularProgress.index";

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const brandImages = ["/assets/image/brand/brand_01.png", "/assets/image/brand/brand_02.png", "/assets/image/brand/brand_03.png", "/assets/image/brand/brand_04.png", "/assets/image/brand/brand_05.png", "/assets/image/brand/brand_06.png"];

    const imageRef = useRef(null); // Reference for the image element

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the rotating slide-in animation class when the image comes into view
                        entry.target.classList.add("animate-rotateSlideInRight");
                        observer.unobserve(entry.target); // Stop observing after the animation has triggered
                    }
                });
            },
            { threshold: 0.5 }
        ); // Trigger when 50% of the image is visible

        // Start observing the image
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div className="root-wrapper">
            {/* <div id="preloader">
                <div className="tg-cube-grid">
                    <div className="tg-cube tg-cube1"></div>
                    <div className="tg-cube tg-cube2"></div>
                    <div className="tg-cube tg-cube3"></div>
                    <div className="tg-cube tg-cube4"></div>
                    <div className="tg-cube tg-cube5"></div>
                    <div className="tg-cube tg-cube6"></div>
                    <div className="tg-cube tg-cube7"></div>
                    <div className="tg-cube tg-cube8"></div>
                    <div className="tg-cube tg-cube9"></div>
                </div>
            </div> */}

            <button className="scroll-top scroll-to-target" data-target="html">
                <i className="fas fa-angle-up"></i>
            </button>

            <header id="home">
                {/* <div id="header-top-fixed"></div> */}
                <div id="sticky-header" className="menu-area">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler">
                                    <i className="flaticon-layout"></i>
                                </div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/">
                                                <Image height={40} width={304} alt="logo" src={`/assets/logos/logo.png`} className=" min-w-100 w-auto max-h-full h-10" />
                                            </Link>
                                        </div>

                                        <div className="  flex items-center gap-12">
                                            <Button size="large" className={" bg-warning_main hover:bg-warning_dark text-white rounded "}>
                                                sign in
                                            </Button>
                                            <div className=" p-4  rounded-full bg-success_main cursor-pointer " onClick={() => setIsOpen(true)}>
                                                <Image src={"/assets/icons/menu.svg"} height={24} width={24} alt="menu" />
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu">
                    <nav className="menu-box">
                        <div className="close-btn">
                            <i className="fas fa-times"></i>
                        </div>
                        <div className="nav-logo">
                            <a href="index-2.html">
                                <img src="assets/image/logo/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="menu-outer"></div>
                        <div className="social-links">
                            <ul className="clearfix">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="menu-backdrop"></div>

                <div className="search-popup-wrap" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="search-wrap text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="search-form">
                                        <form action="#">
                                            <input type="text" placeholder="Enter your keyword..." />
                                            <button className="search-btn">
                                                <i className="flaticon-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-backdrop"></div>

                <div className="offCanvas-overlay"></div>
            </header>
            <LandingDrawer open={isOpen} onClose={() => setIsOpen(false)} direction="right" />

            <main className="main-area fix">
                <section className="banner-area">
                    <div className="container">
                        <div className=" flex justify-center">
                            <div className=" max-w-[850px] w-full px-4">
                                <div className="banner-content text-center">
                                    <p className="banner-caption !text-warning_main">.. Increased Energy With SUXNIX ..</p>
                                    <h2 className="title">Mix Protein Provided Way To Growth</h2>
                                    <a href="shop.html" className="btn btn-two ">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="banner-images flex justify-center">
                                    <img src="assets/image/banner/banner_img01.png" alt="img" className="main-img" />
                                    <img src="assets/image/banner/banner_round_bg.png" alt="img" className="bg-shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-shape one">
                        <img src="assets/image/banner/banner_shape01.png" alt="shape" className="wow bannerFadeInLeft" data-wow-delay=".2s" data-wow-duration="2s" />
                    </div>
                    <div className="banner-shape two">
                        <img src="assets/image/banner/banner_shape02.png" alt="shape" className="wow bannerFadeInRight" data-wow-delay=".2s" data-wow-duration="2s" />
                    </div>
                    <div className="banner-shape three">
                        <img src="assets/image/banner/banner_shape03.png" alt="shape" className="wow bannerFadeInDown" data-wow-delay=".2s" data-wow-duration="2s" />
                    </div>
                    <div className="banner-shape four">
                        <img src="assets/image/banner/banner_shape04.png" alt="shape" className="wow bannerFadeInDown" data-wow-delay=".2s" data-wow-duration="2s" />
                    </div>
                </section>

                <div className="brand-area">
                    <div className="container">
                        <div className="row mb-6 md:mb-12">
                            <div className="col-12">
                                <div className="brand-title text-center mb-50">
                                    <p className="title">Perfect Brand is Featured on</p>
                                </div>
                            </div>
                        </div>
                        <div className="row brand-active">
                            <>
                                <Swiper
                                    slidesPerView={6}
                                    loop={true}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    effect="fade" // Enable fade effect
                                    fadeEffect={{ crossFade: true }} // Optional: for smooth transitions
                                    speed={2000} // Adjust speed for smoother transitions (in ms)
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    {brandImages.map((src, index) => (
                                        <SwiperSlide key={index} className="flex justify-center items-center h-12">
                                            <a href="#" className="h-12 flex justify-center items-center overflow-hidden">
                                                <Image src={src} alt={`brand-${index + 1}`} width={150} height={50} className="max-h-full max-w-full h-auto w-auto" />
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        </div>
                    </div>
                </div>

                <section id="features" className="features-area bg-cover bg-center features-bg" style={{ backgroundImage: "url('/assets/image/bg/features_bg.jpg')" }}>
                    <div className="container">
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-12 lg:col-span-6">
                                <div className="features-items-wrap">
                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[50px] justify-center">
                                        {features.map((feature, index) => (
                                            <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-12 lg:col-span-6 flex items-center justify-end">
                                <div className="features-img" ref={imageRef}>
                                    <Image src="/assets/image/others/features_img.png" alt="Features" width={500} height={400} layout="intrinsic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="paroller" className="features-products">
                    <div className="container">
                        <div className="features-products-wrap">
                            <div className=" flex flex-col md:flex-row justify-center">
                                <div className=" md:w-[45%]">
                                    <div className="features-products-thumb">
                                        <div className="main-img">
                                            <img src="assets/image/products/features_product01.png" alt="img" />
                                        </div>
                                        <img src="assets/image/products/features_product_shape01.png" alt="img" className="shape-img" />
                                    </div>
                                </div>
                                <div className=" md:w-[45%]">
                                    <div className="features-product-content">
                                        <h2 className="title">
                                            <a href="shop-details.html">Seriour Mass</a>
                                        </h2>
                                        <h6 className="features-product-quantity">High-strength, 5000IU</h6>
                                        <p>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults. </p>
                                        <div className="features-product-bottom">
                                            <a href="shop-details.html" className="btn btn-two">
                                                Shop Now
                                            </a>
                                            <span className="price">
                                                $89.99 <span className="old-price">$117.99</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-products-wrap">
                            <div className="flex flex-col md:flex-row-reverse justify-center">
                                <div className=" md:w-[45%]">
                                    <div className="features-products-thumb">
                                        <div className="main-img">
                                            <img src="assets/image/products/features_product02.png" alt="img" />
                                        </div>
                                        <img src="assets/image/products/features_product_shape02.png" alt="img" className="shape-img" />
                                    </div>
                                </div>
                                <div className=" md:w-[45%]">
                                    <div className="features-product-content">
                                        <h2 className="title">
                                            <a href="shop-details.html">Protein Whey</a>
                                        </h2>
                                        <h6 className="features-product-quantity">High-strength, 4000IU</h6>
                                        <p>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults. </p>
                                        <div className="features-product-bottom">
                                            <a href="shop-details.html" className="btn btn-two">
                                                Shop Now
                                            </a>
                                            <span className="price">
                                                $59.99 <span className="old-price">$79.99</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-products-wrap">
                            <div className=" flex flex-col md:flex-row justify-center">
                                <div className=" md:w-[45%]">
                                    <div className="features-products-thumb">
                                        <div className="main-img">
                                            <img src="assets/image/products/features_product03.png" alt="img" />
                                        </div>
                                        <img src="assets/image/products/features_product_shape03.png" alt="img" className="shape-img" />
                                    </div>
                                </div>
                                <div className=" md:w-[45%]">
                                    <div className="features-product-content">
                                        <h2 className="title">
                                            <a href="shop-details.html">Max Mass 3xl</a>
                                        </h2>
                                        <h6 className="features-product-quantity">High-strength, 4000IU</h6>
                                        <p>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults. </p>
                                        <div className="features-product-bottom">
                                            <a href="shop-details.html" className="btn btn-two">
                                                Shop Now
                                            </a>
                                            <span className="price">
                                                $69.99 <span className="old-price">$89.99</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fp-shapes-wrap">
                        <div className="fp-shape-one">
                            <img src="assets/image/others/features_sec_shape01.png" alt="shape" className="paroller" data-paroller-factor="0.25" data-paroller-factor-lg="0.20" data-paroller-factor-md="0.25" data-paroller-factor-sm="0.10" data-paroller-type="foreground" data-paroller-direction="vertical" />
                        </div>
                        <div className="fp-shape-two">
                            <img src="assets/image/others/features_sec_shape02.png" alt="shape" className="paroller" data-paroller-factor="-0.25" data-paroller-factor-lg="0.20" data-paroller-factor-md="0.25" data-paroller-factor-sm="0.10" data-paroller-type="foreground" data-paroller-direction="vertical" />
                        </div>
                        <div className="fp-shape-three">
                            <img src="assets/image/others/features_sec_shape03.png" alt="shape" className="paroller" data-paroller-factor="0.25" data-paroller-factor-lg="0.20" data-paroller-factor-md="0.25" data-paroller-factor-sm="0.10" data-paroller-type="foreground" data-paroller-direction="vertical" />
                        </div>
                    </div>
                    <div className="fp-circle one"></div>
                    <div className="fp-circle two"></div>
                    <div className="fp-circle three"></div>
                    <div className="fp-circle four"></div>
                    <div className="fp-circle five"></div>
                </section>

                <section className="fact-area">
                    <div className="container">
                        <div className="fact-items-wrapper">
                            <div className="row g-0 justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-9">
                                    <div className="fact-item">
                                        <div className="chart" data-percent="65">
                                            <span className="percentage">
                                                65<small>%</small>
                                            </span>
                                        </div>
                                        <div className="fact-content">
                                            <h4 className="title">Active Members</h4>
                                            <span>Yes we did it asap software</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-9">
                                    <div className="fact-item">
                                        <div className="chart" data-percent="90">
                                            <span className="percentage">
                                                90<small>%</small>
                                            </span>
                                        </div>
                                        <div className="fact-content">
                                            <h4 className="title">Projects Done</h4>
                                            <span>Yes we did it asap software</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-9">
                                    <div className="fact-item">
                                        <div className="chart" data-percent="80">
                                            <span className="percentage">
                                                80<small>%</small>
                                            </span>
                                        </div>
                                        <div className="fact-content">
                                            <h4 className="title">Get Rewards</h4>
                                            <span>Yes we did it asap software</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <CircularProgress percentage={65} /> */}
                </section>

                {/* <!-- Ingredients-area --> */}
                <section id="ingredient" className="ingredients-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-7">
                                <div className="ingredients-img">
                                    <img src="assets/image/others/ingredients_img.png" alt="img" />
                                    <img src="assets/image/others/ingredients_shape.png" alt="img" className="shape" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-9">
                                <div className="ingredients-items-wrap">
                                    <div className="section-title mb-60">
                                        <p className="sub-title">.. Increased Energy With Suxnix ..</p>
                                        <h2 className="title">Suxnix Ingredients</h2>
                                    </div>
                                    <div className="row justify-content-center justify-content-lg-start">
                                        <div className="col-md-6 col-sm-8">
                                            <div className="ingredients-item wow fadeInUp" data-wow-delay=".2s">
                                                <div className="ingredients-thumb">
                                                    <img src="assets/image/others/ingredients_item01.png" alt="img" />
                                                </div>
                                                <div className="ingredients-content">
                                                    <h5 className="title">Helps You Stick To Your Diet</h5>
                                                    <p>A thing added to something else in order to complete or enhance it.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-8">
                                            <div className="ingredients-item wow fadeInUp" data-wow-delay=".3s">
                                                <div className="ingredients-thumb">
                                                    <img src="assets/image/others/ingredients_item02.png" alt="img" />
                                                </div>
                                                <div className="ingredients-content">
                                                    <h5 className="title">Only 3g Net Carbs In Every Jar</h5>
                                                    <p>A thing added to something else in order to complete or enhance it.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-8">
                                            <div className="ingredients-item wow fadeInUp" data-wow-delay=".4s">
                                                <div className="ingredients-thumb">
                                                    <img src="assets/image/others/ingredients_item03.png" alt="img" />
                                                </div>
                                                <div className="ingredients-content">
                                                    <h5 className="title">Ingredients To Fuel Your Body</h5>
                                                    <p>A thing added to something else in order to complete or enhance it.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-8">
                                            <div className="ingredients-item wow fadeInUp" data-wow-delay=".5s">
                                                <div className="ingredients-thumb">
                                                    <img src="assets/image/others/ingredients_item04.png" alt="img" />
                                                </div>
                                                <div className="ingredients-content">
                                                    <h5 className="title">Clean Ingredients Only</h5>
                                                    <p>A thing added to something else in order to complete or enhance it.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Ingredients-area-end --> */}

                {/* <!-- formula-area --> */}
                <section className="formula-area formula-bg" data-background="assets/img/bg/formula_bg.jpg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-0 order-lg-2">
                                <div className="formula-img">
                                    <img src="assets/image/others/formula_img.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="formula-content">
                                    <div className="section-title white-title mb-50">
                                        <p className="sub-title">.. Suxnix Formula ..</p>
                                        <h2 className="title">Why We Chose This Formula</h2>
                                    </div>
                                    <ul className="formula-list list-wrap">
                                        <li>Tastes like dessert without added sugars or sugar alcohols</li>
                                        <li>No artificial sweeteners, dairy, say or corn fiber</li>
                                        <li>10G of collagen protein from grass-fed cows</li>
                                        <li>Formulated to reduce blood sugar intact</li>
                                        <li>Organic almond Butter, Sunflower Lecithin</li>
                                        <li>No energy crashes. Collagen Protein, Stevia</li>
                                        <li>10G of collagen protein from grass-fed cows</li>
                                    </ul>
                                    <a href="contact.html" className="btn btn-two">
                                        Know More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- formula-area-end --> */}

                {/* <!-- pricing-area --> */}
                <section id="pricing" className="pricing-area gray-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-55">
                                    <p className="sub-title">.. Suxnix Plans ..</p>
                                    <h2 className="title">SUPPLEMENT PACKAGES</h2>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-wrap">
                            <div className="row align-items-end justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-9">
                                    <div className="pricing-item mb-30 regular">
                                        <div className="pricing__box text-center">
                                            <div className="pricing-hade">
                                                <span>1 Bottle Of</span>
                                                <h3 className="title">Suxnix</h3>
                                                <p>(1 x 250 veggie caps bottle)</p>
                                            </div>
                                            <div className="pricing-img">
                                                <img src="assets/image/others/pricing_01.png" alt="img" />
                                            </div>
                                            <div className="pricing-price">
                                                <h4 className="price">$69</h4>
                                                <span>
                                                    per <br /> bottle
                                                </span>
                                            </div>
                                            <h5 className="total">($69 TOTAL)</h5>
                                            <div className="price-savings">
                                                <h4 className="save">Save 14%</h4>
                                                <span>&nbsp;</span>
                                            </div>
                                            <div className="pricing-btn mb-15">
                                                <a href="contact.html">
                                                    Buy Now <span>365 Day Full Money Back Guaranteed</span>
                                                </a>
                                            </div>
                                            <div className="bottom-img">
                                                <img src="assets/image/others/pricing_bottom_img.png" alt="card" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-9">
                                    <div className="pricing-item mb-30 popular-plan">
                                        <div className="pricing-title text-center mb-10">
                                            <h4 className="title">★ Most Popular ★</h4>
                                        </div>
                                        <div className="pricing__box text-center">
                                            <div className="pricing-hade">
                                                <span>3 Bottle Of</span>
                                                <h3 className="title">Suxnix</h3>
                                                <p>(3 x 250 veggie caps bottle)</p>
                                            </div>
                                            <div className="pricing-img">
                                                <img src="assets/image/others/pricing_02.png" alt="img" />
                                            </div>
                                            <div className="pricing-price">
                                                <h4 className="price">$59</h4>
                                                <span>
                                                    per <br /> bottle
                                                </span>
                                            </div>
                                            <h5 className="total">($179 TOTAL)</h5>
                                            <div className="price-savings">
                                                <h4 className="save">Save 25%</h4>
                                                <span>+ Free Shipping</span>
                                            </div>
                                            <div className="pricing-btn mb-15">
                                                <a href="contact.html">
                                                    Buy Now <span>365 Day Full Money Back Guaranteed</span>
                                                </a>
                                            </div>
                                            <div className="bottom-img">
                                                <img src="assets/image/others/pricing_bottom_img.png" alt="card" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-9">
                                    <div className="pricing-item mb-30 best-value-plan">
                                        <div className="pricing-title text-center mb-10">
                                            <h4 className="title">✓ Best Value</h4>
                                        </div>
                                        <div className="pricing__box text-center">
                                            <div className="pricing-hade">
                                                <span>6 Bottle Of</span>
                                                <h3 className="title">Suxnix</h3>
                                                <p>(6 x 250 veggie caps bottle)</p>
                                            </div>
                                            <div className="pricing-img">
                                                <img src="assets/image/others/pricing_03.png" alt="img" />
                                            </div>
                                            <div className="pricing-price">
                                                <h4 className="price">$49</h4>
                                                <span>
                                                    per <br /> bottle
                                                </span>
                                            </div>
                                            <h5 className="total">($299 TOTAL)</h5>
                                            <div className="price-savings">
                                                <h4 className="save">Save 40%</h4>
                                                <span>+ Free Shipping</span>
                                            </div>
                                            <div className="pricing-btn mb-15">
                                                <a href="contact.html">
                                                    Buy Now <span>365 Day Full Money Back Guaranteed</span>
                                                </a>
                                            </div>
                                            <div className="bottom-img">
                                                <img src="assets/image/others/pricing_bottom_img.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- pricing-area-end --> */}

                {/* <!-- testimonial-area --> */}
                <section className="testimonial-area testimonial-bg" data-background="assets/img/bg/testimonial_bg.jpg">
                    <div className="testimonial-overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-xl-9 col-lg-11">
                                <div className="testimonial-active">
                                    <div className="testimonial-item text-center">
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <p>“Becoming more involved in administration within the (MidMichigan) health system over the years, I had been researching options for further education that would assist in this transition and fit my busy schedule</p>
                                        <div className="testimonial-avatar-wrap">
                                            <div className="testi-avatar-img">
                                                <img src="assets/image/others/testi_avatar01.jpg" alt="img" />
                                            </div>
                                            <div className="testi-avatar-info">
                                                <h5 className="name">Janeta Cooper</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item text-center">
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <p>“Becoming more involved in administration within the (MidMichigan) health system over the years, I had been researching options for further education that would assist in this transition and fit my busy schedule</p>
                                        <div className="testimonial-avatar-wrap">
                                            <div className="testi-avatar-img">
                                                <img src="assets/image/others/testi_avatar02.jpg" alt="img" />
                                            </div>
                                            <div className="testi-avatar-info">
                                                <h5 className="name">Lempor Kooper</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item text-center">
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <p>“Becoming more involved in administration within the (MidMichigan) health system over the years, I had been researching options for further education that would assist in this transition and fit my busy schedule</p>
                                        <div className="testimonial-avatar-wrap">
                                            <div className="testi-avatar-img">
                                                <img src="assets/image/others/testi_avatar03.jpg" alt="img" />
                                            </div>
                                            <div className="testi-avatar-info">
                                                <h5 className="name">Zonalos Neko</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- testimonial-area-end --> */}

                {/* <!-- blog-post-area --> */}
                <section id="news" className="blog-post-area">
                    <div className="container">
                        <div className="blog-inner-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-10">
                                    <div className="blog-posts-wrapper">
                                        <div className="section-title mb-50">
                                            <p className="sub-title">.. Suxnix News ..</p>
                                            <h2 className="title">Latest News</h2>
                                        </div>
                                        <div className="blog-post-item">
                                            <a href="blog-details.html">
                                                <div className="blog-post-thumb" data-background="assets/img/blog/post_thumb01.jpg"></div>
                                            </a>
                                            <div className="blog-post-content">
                                                <div className="content-top">
                                                    <div className="tags">
                                                        <a href="#">Tips & Tricks</a>
                                                    </div>
                                                    <span className="date">
                                                        <i className="far fa-clock"></i> 12 Days ago
                                                    </span>
                                                </div>
                                                <h3 className="title">
                                                    <a href="blog-details.html">hOW MUCH DO EAT YOU REALLY NEED...</a>
                                                </h3>
                                                <div className="content-bottom">
                                                    <ul className="list-wrap">
                                                        <li className="user">
                                                            Post By - <a href="#">Admin</a>
                                                        </li>
                                                        <li className="comments">
                                                            <i className="far fa-envelope"></i> 24
                                                        </li>
                                                        <li className="viewers">
                                                            <i className="far fa-eye"></i> 77k
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-post-item">
                                            <a href="blog-details.html">
                                                <div className="blog-post-thumb" data-background="assets/img/blog/post_thumb02.jpg"></div>
                                            </a>
                                            <div className="blog-post-content">
                                                <div className="content-top">
                                                    <div className="tags">
                                                        <a href="#">Tips & Tricks</a>
                                                    </div>
                                                    <span className="date">
                                                        <i className="far fa-clock"></i> 12 Days ago
                                                    </span>
                                                </div>
                                                <h3 className="title">
                                                    <a href="blog-details.html">Supplementing your diet tOWARDS ...</a>
                                                </h3>
                                                <div className="content-bottom">
                                                    <ul className="list-wrap">
                                                        <li className="user">
                                                            Post By - <a href="#">Admin</a>
                                                        </li>
                                                        <li className="comments">
                                                            <i className="far fa-envelope"></i> 29
                                                        </li>
                                                        <li className="viewers">
                                                            <i className="far fa-eye"></i> 87k
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-post-item">
                                            <a href="blog-details.html">
                                                <div className="blog-post-thumb" data-background="assets/img/blog/post_thumb03.jpg"></div>
                                            </a>
                                            <div className="blog-post-content">
                                                <div className="content-top">
                                                    <div className="tags">
                                                        <a href="#">Tips & Tricks</a>
                                                    </div>
                                                    <span className="date">
                                                        <i className="far fa-clock"></i> 12 Days ago
                                                    </span>
                                                </div>
                                                <h3 className="title">
                                                    <a href="blog-details.html">Dietary Supplement report market...</a>
                                                </h3>
                                                <div className="content-bottom">
                                                    <ul className="list-wrap">
                                                        <li className="user">
                                                            Post By - <a href="#">Admin</a>
                                                        </li>
                                                        <li className="comments">
                                                            <i className="far fa-envelope"></i> 29
                                                        </li>
                                                        <li className="viewers">
                                                            <i className="far fa-eye"></i> 87k
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-10">
                                    <div className="faq-wrapper">
                                        <div className="section-title mb-50">
                                            <p className="sub-title">.. Ask Question ..</p>
                                            <h2 className="title">Get Every Answers</h2>
                                        </div>
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item active-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <span className="count">01.</span> Suxnix ingredients provides a searchable ?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <span className="count">02.</span> How to edit Suxnix themes ?
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <span className="count">03.</span> Suxnix app is a powerful application ?
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFour">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        <span className="count">04.</span> Latest version thorough Suxnix powerful ?
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFive">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        <span className="count">05.</span> How to Track My Order ?
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-bg-shape one"></div>
                    <div className="blog-bg-shape two"></div>
                </section>
            </main>

            <footer className="footer-area">
                <div className="footer-instagram">
                    <div className="container">
                        <div className="row g-0 instagram-active">
                            <div className="col-2">
                                <div className="footer-insta-item">
                                    <a href="assets/img/others/instagram_post01.jpg" className="popup-image">
                                        <img src="assets/image/others/instagram_post01.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-insta-item">
                                    <a href="assets/img/others/instagram_post02.jpg" className="popup-image">
                                        <img src="assets/image/others/instagram_post02.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-insta-item">
                                    <a href="assets/img/others/instagram_post03.jpg" className="popup-image">
                                        <img src="assets/image/others/instagram_post03.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-insta-item">
                                    <a href="assets/img/others/instagram_post04.jpg" className="popup-image">
                                        <img src="assets/image/others/instagram_post04.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-insta-item">
                                    <a href="assets/img/others/instagram_post05.jpg" className="popup-image">
                                        <img src="assets/image/others/instagram_post05.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-insta-item">
                                    <a href="assets/img/others/instagram_post06.jpg" className="popup-image">
                                        <img src="assets/image/others/instagram_post06.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top-wrap">
                    <div className="container">
                        <div className="footer-widgets-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <div className="footer-about">
                                            <div className="footer-logo logo">
                                                <a href="index-2.html">
                                                    <img src="assets/image/logo/white_logo.png" alt="Logo" />
                                                </a>
                                            </div>
                                            <div className="footer-text">
                                                <p>Making beauty especially relating complot especial common questions tend to recur through posts or queries standards vary orem donor command tei.</p>
                                            </div>
                                            <div className="footer-social">
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-pinterest-p"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">About Us</h4>
                                        <ul className="list-wrap">
                                            <li>
                                                <a href="#">About Company</a>
                                            </li>
                                            <li>
                                                <a href="#">Affiliate Program</a>
                                            </li>
                                            <li>
                                                <a href="#">Customer Spotlight</a>
                                            </li>
                                            <li>
                                                <a href="#">Reseller Program</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Our Shop</a>
                                            </li>
                                            <li>
                                                <a href="#">Price & Plans</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Support</h4>
                                        <ul className="list-wrap">
                                            <li>
                                                <a href="#">Knowledge Base</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Developer API</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="#">Team</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-5">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">CONTACT US</h4>
                                        <div className="footer-contact-wrap">
                                            <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                                            <ul className="list-wrap">
                                                <li className="phone">
                                                    <i className="fas fa-phone"></i> +1 31-6555-0116
                                                </li>
                                                <li className="mail">
                                                    <i className="fas fa-envelope"></i> Suxnix@example.com
                                                </li>
                                                <li className="website">
                                                    <i className="fas fa-globe"></i> www.suxnixdomain.com
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-shape one">
                        <img src="assets/image/others/footer_shape01.png" alt="img" className="wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s" />
                    </div>
                    <div className="footer-shape two">
                        <img src="assets/image/others/footer_shape02.png" alt="img" className="wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s" />
                    </div>
                </div>
                <div className="copyright-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <div className="copyright-text">
                                    <p>Copyright © 2024 Suxnix All Rights Reserved.</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="payment-card text-center text-md-end">
                                    <img src="assets/image/others/card_img.png" alt="card" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer-area-end --> */}
        </div>
    );
};

export default Landing;
const features = [
    {
        icon: "/assets/icons/fruits.svg",
        title: "Multi Fruits Flavour",
        description: "A thing added to something else in order to complete or enhance it.",
    },
    {
        icon: "/assets/icons/fruits.svg",
        title: "Flower Formula",
        description: "A thing added to something else in order to complete or enhance it.",
    },
    {
        icon: "/assets/icons/fruits.svg",
        title: "Fishbone Diagram",
        description: "A thing added to something else in order to complete or enhance it.",
    },
    {
        icon: "/assets/icons/fruits.svg",
        title: "100% Fat Blasting",
        description: "A thing added to something else in order to complete or enhance it.",
    },
];
const products = [
    {
        id: 1,
        name: "Seriour Mass",
        quantity: "High-strength, 5000IU",
        description: "Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults.",
        price: 89.99,
        oldPrice: 117.99,
        imgSrc: "/assets/image/products/features_product01.png",
        shapeSrc: "/assets/image/products/features_product_shape01.png",
        link: "shop-details.html",
    },
    {
        id: 2,
        name: "Protein Whey",
        quantity: "High-strength, 4000IU",
        description: "Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults.",
        price: 59.99,
        oldPrice: 79.99,
        imgSrc: "/assets/image/products/features_product02.png",
        shapeSrc: "/assets/image/products/features_product_shape02.png",
        link: "shop-details.html",
    },
    {
        id: 3,
        name: "Max Mass 3xl",
        quantity: "High-strength, 4000IU",
        description: "Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults.",
        price: 69.99,
        oldPrice: 89.99,
        imgSrc: "/assets/image/products/features_product03.png",
        shapeSrc: "/assets/image/products/features_product_shape03.png",
        link: "shop-details.html",
    },
];
