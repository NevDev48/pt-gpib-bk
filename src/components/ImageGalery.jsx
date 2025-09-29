import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useImageGallery } from '../hooks/useImageGallery';
import { galleryImages } from '../data/GaleryData'; // Fallback data

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ImageGallery() {
    const { galleries, loading, error, hasGalleries } = useImageGallery();

    // Use API data if available, otherwise fallback to static data
    const displayImages = hasGalleries ? galleries : galleryImages;

    // Helper function to get full image URL
    const getImageUrl = (imagePath) => {
        if (imagePath?.startsWith('http')) {
            return imagePath; // Already full URL
        }
        return `http://localhost:8000/storage/${imagePath}`; // Laravel storage URL
    };

    if (loading && !hasGalleries) {
        return (
            <section className="py-20">
                <div className="container mx-auto px-8 md:px-16 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading Gallery...</p>
                </div>
            </section>
        );
    }

    // Tampilkan error message jika API bermasalah
    if (error && !hasGalleries) {
        return (
            <section className="py-20">
                <div className="container mx-auto px-8 md:px-16 text-center">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-2xl mx-auto">
                        <p className="font-medium">⚠️ Tidak dapat terhubung ke API Gallery</p>
                        <p className="text-sm mt-1">{error}</p>
                        <p className="text-sm mt-2">💡 Pastikan Laravel backend berjalan di: <code>http://localhost:8000</code></p>
                        <p className="text-sm mt-1">🔄 Menggunakan data fallback sementara</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 overflow-x-hidden">
            <div className="container mx-auto px-8 md:px-16">
                {/* Loading overlay for subsequent loads */}
                {loading && hasGalleries && (
                    <div className="absolute top-4 right-4 z-10">
                        <div className="bg-white rounded-full p-2 shadow-lg">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-500"></div>
                        </div>
                    </div>
                )}

                {/* Swiper Gallery dengan Coverflow Effect */}
                <div className="relative">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        loop={true}
                        loopFillGroupWithBlank={false}
                        coverflowEffect={{
                            rotate: 35,
                            stretch: 0,
                            depth: 120,
                            modifier: 1.2,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 3,
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="gallery-swiper"
                        speed={800}
                        spaceBetween={30}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                coverflowEffect: {
                                    rotate: 30,
                                    depth: 100,
                                    modifier: 1,
                                },
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                                coverflowEffect: {
                                    rotate: 32,
                                    depth: 110,
                                    modifier: 1.1,
                                },
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                coverflowEffect: {
                                    rotate: 35,
                                    depth: 120,
                                    modifier: 1.15,
                                },
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                coverflowEffect: {
                                    rotate: 35,
                                    depth: 120,
                                    modifier: 1.2,
                                },
                            },
                        }}
                    >
                        {displayImages.map((image, index) => (
                            <SwiperSlide key={`gallery-${image.id || index}`} className="swiper-slide-custom">
                                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={image.image_path ? getImageUrl(image.image_path) : image.src}
                                        alt={image.title || image.alt}
                                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                        onError={(e) => {
                                            // Fallback to placeholder if image fails to load
                                            e.target.src = 'https://via.placeholder.com/400x300/eab308/ffffff?text=Gallery+Image';
                                        }}
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300 flex items-end">
                                        <div className="p-6 text-white transition-transform duration-300">
                                            <h3 className="text-xl font-semibold drop-shadow-lg">
                                                {image.title || image.alt}
                                            </h3>
                                            <p className="text-sm opacity-90 mt-1 drop-shadow-lg">
                                                PT GPIB Immanuel Bung Karno
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Gallery Info */}
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">
                        {hasGalleries ? (
                            <>✅ Menampilkan {displayImages.length} foto dari API Laravel</>
                        ) : (
                            <>📂 Menggunakan {displayImages.length} foto fallback</>
                        )}
                    </p>
                    {error && !hasGalleries && (
                        <p className="text-orange-600 text-xs mt-1">
                            ⚠️ API Status: {error}
                        </p>
                    )}
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .gallery-swiper {
                    padding: 60px 0;
                    overflow: visible;
                }
                
                .gallery-swiper .swiper-slide {
                    width: 320px;
                    height: 380px;
                    transition: all 0.4s ease;
                    opacity: 0.7;
                    transform: scale(0.8);
                }
                
                .gallery-swiper .swiper-slide-active {
                    opacity: 1;
                    transform: scale(1);
                    z-index: 2;
                }
                
                .gallery-swiper .swiper-slide-next,
                .gallery-swiper .swiper-slide-prev {
                    opacity: 0.9;
                    transform: scale(0.9);
                }
                
                .swiper-slide-custom {
                    transition: all 0.4s ease;
                    cursor: pointer;
                }
                
                .gallery-swiper .swiper-pagination {
                    bottom: 20px;
                    position: relative;
                    margin-top: 30px;
                }
                
                .gallery-swiper .swiper-pagination-bullet {
                    background: #3b82f6;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                    margin: 0 5px;
                    transition: all 0.3s ease;
                }
                
                .gallery-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    transform: scale(1.4);
                    background: #1d4ed8;
                }
                
                .gallery-swiper .swiper-button-next,
                .gallery-swiper .swiper-button-prev {
                    color: #3b82f6;
                    background: white;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    margin-top: -25px;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                    transition: all 0.3s ease;
                    border: 2px solid #e5e7eb;
                }
                
                .gallery-swiper .swiper-button-next:hover,
                .gallery-swiper .swiper-button-prev:hover {
                    background: #3b82f6;
                    color: white;
                    transform: scale(1.1);
                    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
                }
                
                .gallery-swiper .swiper-button-next:after,
                .gallery-swiper .swiper-button-prev:after {
                    font-size: 18px;
                    font-weight: bold;
                }
                
                @media (max-width: 768px) {
                    .gallery-swiper .swiper-slide {
                        width: 280px;
                        height: 340px;
                    }
                    
                    .gallery-swiper .swiper-button-next,
                    .gallery-swiper .swiper-button-prev {
                        width: 40px;
                        height: 40px;
                        margin-top: -20px;
                    }
                    
                    .gallery-swiper .swiper-button-next:after,
                    .gallery-swiper .swiper-button-prev:after {
                        font-size: 14px;
                    }
                }
            `}</style>
        </section>
    );
}
