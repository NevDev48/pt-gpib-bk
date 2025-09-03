import ImageGallery from './ImageGalery';

export default function Galery () {
    return (
        <div className="overflow-x-hidden">
            {/* Header Section */}
            <div className="container mx-auto px-8 pt-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center">
                    Our Gallery
                </h2>
                <p className="text-gray-700 text-center">
                    Explore our vibrant community through these moments captured in time.
                </p>
            </div>
            
            {/* Image Gallery dengan Swiper Coverflow */}
            <ImageGallery />
        </div>
    );
}