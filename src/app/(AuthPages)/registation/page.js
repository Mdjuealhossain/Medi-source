import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLeft } from "react-icons/hi2";

import Container from "@/components/Container";
import RegistationForm from "@/widget/RegistationForm";

const LogOut = () => {
    return (
        <div className=" py-100 flex justify-center items-center">
            <Container className={"!max-w-lg "}>
                <div className=" flex justify-center items-center ">
                    <div className="shadow-sign max-w-sm w-full rounded bg-white">
                        <div className="pt-4 lg:pt-8 relative pb-3 lg:pb-6 border-b border-divider flex items-center justify-center">
                            <Link href={"#"} className=" h-10 flex items-center justify-center">
                                <Image height={40} width={304} alt="logo" src={`/assets/logos/logo.png`} className=" min-w-100 w-auto max-h-full h-10" />
                            </Link>
                            <Link href={"/signin"} className=" absolute left-4 top-1/2">
                                <HiOutlineArrowLeft size={18} />
                            </Link>
                        </div>
                        <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                            <h3 className="mb-3 lg:mb-6 text-warning_main font-semibold text-H3 capitalize">create new account</h3>
                            <RegistationForm />
                            <div>
                                <p className="mb-5 lg:mb-10 text-center font-normal">
                                    Already have an account
                                    <Link href={"/login"}>
                                        <span className="text-warning_main font-semibold ml-1">Log in</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LogOut;
