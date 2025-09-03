import Navbar from "../components/Navbar";
import Event from "../sections/Event";
import Footer from "../components/Footer";

export default function EventPage() {
    return (
        <>
            <Navbar />
            
            {/* Hero Section for Event Page */}
            <section className="pt-24 pb-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
                <div className="container mx-auto px-8 md:px-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Events & Activities
                    </h1>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto">
                        Bergabunglah dengan berbagai kegiatan rohani dan pelayanan yang kami adakan 
                        untuk membangun iman dan persekutuan yang lebih kuat.
                    </p>
                    
                </div>
            </section>
            
            <Event />
            <Footer />
        </>
    );
}
