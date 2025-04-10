const { default: Image } = require("next/image");

export const ShapeImage = ({ src, alt, position }) => {
    let animationClass = "";
    if (position === "left") animationClass = "wow bannerFadeInLeft";
    if (position === "right") animationClass = "wow bannerFadeInRight";
    if (position === "down") animationClass = "wow bannerFadeInDown";

    return (
        <div className={`banner-shape ${position}`}>
            <Image src={src} alt={alt} width={100} height={100} className={`${animationClass} data-wow-delay=".2s" data-wow-duration="2s"`} />
        </div>
    );
};
