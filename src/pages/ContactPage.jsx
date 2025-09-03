import Navbar from "../components/Navbar";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            
            {/* Hero Section for Contact Page */}
            <section className="pt-24 pb-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
                <div className="container mx-auto px-8 md:px-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
                        Kami selalu siap melayani dan mendengar dari Anda. Jangan ragu untuk 
                        menghubungi kami untuk informasi lebih lanjut atau bergabung dengan komunitas kami.
                    </p>
                </div>
            </section>
            
            <Contact />
            <Footer />
        </>
    );
}
