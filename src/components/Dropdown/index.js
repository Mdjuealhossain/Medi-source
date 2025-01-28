import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { clearToken } from "@/app/utilities/token";
import { clearUser } from "@/app/utilities/user";

const Dropdown = ({ onClose, user }) => {
    const router = useRouter();

    const handleLogout = () => {
        clearToken();
        clearUser();
        onClose();
        window.location.replace("/login");
    };

    return (
        <>
            <div onClick={onClose} className="fixed inset-0 z-10"></div>
            <div className="absolute top-full -left-10  inset-x-3/5 z-50">
                <div className=" w-52 bg-white text-primary rounded-md shadow-lg py-2 flex flex-col z-50">
                    <Link href={"/profile"} className="cursor-pointer px-5 py-2 flex items-center gap-3" onClick={onClose}>
                        <Image src={"/assets/icons/default.png"} height={24} width={24} alt="person" className="w-6 h-6 rounded-full border border-warning_main" />
                        {user.name ? <p className=" text-subtitle2 hover:text-warning_main font-semibold capitalize">{user.name}</p> : <p className=" text-subtitle2 hover:text-warning_main font-semibold capitalize">see profile</p>}
                    </Link>
                    <Link href={"/order-history"} className="cursor-pointer px-5 py-2 flex items-center gap-3" onClick={onClose}>
                        <FaBagShopping className=" text-warning_main" />
                        <p className=" text-subtitle2 hover:text-warning_main capitalize">order history</p>
                    </Link>
                    <Link href={"/change-password"} className="cursor-pointer px-5 py-2 flex items-center gap-3" onClick={onClose}>
                        <RiLockPasswordFill className=" text-warning_main" />
                        <p className=" text-subtitle2 hover:text-warning_main capitalize">change password</p>
                    </Link>
                    <Link href={"#"} className="cursor-pointer px-5 py-2 flex items-center gap-3" onClick={handleLogout}>
                        <MdOutlineLogin className=" text-warning_main" />
                        <p className=" text-subtitle2 hover:text-warning_main capitalize">log out</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Dropdown;
