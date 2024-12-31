import Link from "next/link";

const Dropdown = ({ options, onMouseEnter, onMouseLeave }) => {
    return (
        <div className="absolute top-full right-6  inset-x-3/5 z-50">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className=" w-52 bg-white text-primary rounded-md shadow-lg py-2 flex flex-col z-50">
                {options.map((option, index) => (
                    <Link href={`${option.url}`} key={index} className="cursor-pointer px-5 py-2 flex items-center gap-3" onClick={onMouseLeave}>
                        <span>{option.icon}</span>
                        <p className=" text-subtitle2 hover:text-warning_main">{option.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
