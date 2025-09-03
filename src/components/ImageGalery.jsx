import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { galleryImages } from '../data/GaleryData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ImageGallery() {
    return (
        <section className="py-20 overflow-x-hidden">
            <div className="container mx-auto px-8 md:px-16">

                {/* Swiper Gallery dengan Coverflow Effect */}
                <div className="relative">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        loopAdditionalSlides={3}
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
                            waitForTransition: true,
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
                        {galleryImages.map((image) => (
                            <SwiperSlide key={image.id} className="swiper-slide-custom">
                                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0  transition-all duration-300 flex items-end">
                                        <div className="p-6 text-white transition-transform duration-300">
                                            <h3 className="text-xl font-semibold text-shadow-2xs">{image.title}</h3>
                                            <p className="text-sm opacity-90 mt-1 text-shadow-2xs">PT GPIB Immanuel Bung Karno</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
                
                /* Smooth infinite loop transitions */
                .gallery-swiper .swiper-wrapper {
                    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                
                .gallery-swiper.swiper-container-autoplay .swiper-wrapper {
                    transition-timing-function: linear;
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
