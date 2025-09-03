import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
    return (
        <>
            <Navbar />
            <section className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center">
                <div className="container mx-auto px-8 md:px-16 text-center">
                    <div className="max-w-2xl mx-auto">
                        {/* 404 Number */}
                        <h1 className="text-9xl md:text-[12rem] font-bold text-yellow-500 mb-4">
                            404
                        </h1>
                        
                        {/* Error Message */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Halaman Tidak Ditemukan
                        </h2>
                        
                        <p className="text-gray-600 text-lg mb-8">
                            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
                            Mungkin halaman telah dipindahkan atau URL yang Anda masukkan salah.
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/"
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                            >
                                Kembali ke Beranda
                            </Link>
                            <Link 
                                to="/contact"
                                className="bg-transparent border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                        
                        {/* Quick Links */}
                        <div className="mt-12">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Atau kunjungi halaman lain:
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link 
                                    to="/about"
                                    className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
                                >
                                    About Us
                                </Link>
                                <span className="text-gray-400">•</span>
                                <Link 
                                    to="/event"
                                    className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
                                >
                                    Events
                                </Link>
                                <span className="text-gray-400">•</span>
                                <Link 
                                    to="/contact"
                                    className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
