import React, { useRef } from "react";

const ImageSlider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const images = [
        "/images/poster/love-next-door.jpg",
        "/images/poster/pay-later.jpg",
        "/images/poster/love-next-door.jpg",
        "/images/poster/love-next-door.jpg",
        "/images/poster/love-next-door.jpg",
 
    ];

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                top: 0,
                left: -300, 
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                top: 0,
                left: 300, 
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative flex items-center justify-center w-full">
        <div className="overflow-hidden w-11/12 relative flex items-center">
            <div
                ref={sliderRef}
                className="flex overflow-x-scroll scrollbar-hide space-x-5 p-4 w-full"
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slider Image ${index + 1}`}
                        className="w-1/6 h-80 rounded-3xl"
                    />
                ))}
            </div>

            <button
                onClick={scrollRight}
                className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 p-2 h-20 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
                &#10095;
            </button>
        </div>
    </div>
    );
};

export default ImageSlider;
