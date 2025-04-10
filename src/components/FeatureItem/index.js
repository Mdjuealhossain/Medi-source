import Image from "next/image";

export const FeatureItem = ({ icon, title, description }) => (
    <div className="col-span-1">
        <div className="features-item">
            <div className="features-icon">
                <Image src={icon} alt={title} height={50} width={50} />
            </div>
            <div className="features-content">
                <h4 className="title">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    </div>
);
