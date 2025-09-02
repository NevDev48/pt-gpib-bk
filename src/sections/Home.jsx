import Hero from "../components/Hero";
import Service from "../components/Service";

export default function Home() {
  return (
    <>
      <section 
        id="home"
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600"
      >
        {/* Hero Content */}
        <Hero />
      </section>
      <div className="py-10 bg-gray-100">
        <Service />
      </div>
    </>
  );
}