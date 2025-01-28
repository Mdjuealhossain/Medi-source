import Image from "next/image";

const ImageURL = ({ style, image, className, height, width, alt }) => {
    // const {ref, inView} = useInView({
    //     triggerOnce: true,
    //     delay: 500
    // });

    // const handleError = (event) => {
    //     event.target.src = imageURLErrorImage;
    // };

    return (
        <>
            {image && (
                <Image
                    className={`${className} max-h-full h-auto max-w-full w-auto`}
                    height={height}
                    width={width}
                    src={`https://medisourcebd.com/${image}`}
                    alt={alt}
                    style={style}
                    // onError={handleError}
                />
            )}
        </>
    );
};

export default ImageURL;
