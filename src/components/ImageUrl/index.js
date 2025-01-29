import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ImageURL = ({ image, className, height, width, alt }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        delay: 300,
        threshold: 0.5,
    });

    // const handleError = (event) => {
    //     event.target.src = imageURLErrorImage;
    // };

    return (
        <div ref={ref} className="flex justify-center items-center overflow-hidden h-full w-full">
            {image && inView && (
                <Image
                    className={`${className} max-h-full h-auto max-w-full w-auto`}
                    height={height}
                    width={width}
                    src={`https://medisourcebd.com/${image}`}
                    alt={alt}
                    style={{ transition: "opacity 0.3s ease" }}
                    // onError={handleError}
                />
            )}
        </div>
    );
};

export default ImageURL;
