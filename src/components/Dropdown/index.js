import Link from "next/link";

const Dropdown = ({ options, onClose }) => {
    return (
        <>
            <div onClick={onClose} className="fixed inset-0 z-10"></div>
            <div className="absolute top-full -left-10  inset-x-3/5 z-50">
                <div className=" w-52 bg-white text-primary rounded-md shadow-lg py-2 flex flex-col z-50">
                    {options.map((option, index) => (
                        <Link href={`${option.url}`} key={index} className="cursor-pointer px-5 py-2 flex items-center gap-3" onClick={onClose}>
                            <span>{option.icon}</span>
                            <p className=" text-subtitle2 hover:text-warning_main">{option.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dropdown;
