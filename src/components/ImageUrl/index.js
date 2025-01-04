import Image from "next/image";

const ImageURL = ({ style, image, className, height, width }) => {
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
                    src={`${image}`}
                    alt="image"
                    style={style}
                    // onError={handleError}
                />
            )}
        </>
    );
};

export default ImageURL;
