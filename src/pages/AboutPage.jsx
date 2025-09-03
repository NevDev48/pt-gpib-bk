import Navbar from "../components/Navbar";
import About from "../sections/About";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            
            {/* Hero Section for About Page */}
            <section className="pt-24 pb-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
                <div className="container mx-auto px-8 md:px-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        About Us
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Mengenal lebih dekat dengan PT GPIB Immanuel Bung Karno - 
                        Sejarah, visi, misi, dan dedikasi kami dalam melayani jemaat dan masyarakat.
                    </p>
                </div>
            </section>
            
            <About />
            <Footer />
        </>
    );
}
