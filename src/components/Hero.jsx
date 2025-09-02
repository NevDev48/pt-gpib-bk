export default function Hero() {
  return (
    <div className="relative z-10 flex items-center min-h-screen py-20 px-10 md:px-20 md:py-30">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left text-gray-800">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Selamat Datang di <br />
            <span className="text-white">PT GPIB Immanuel</span> <br />
            Bung Karno
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-700">
            Membangun komunitas yang kuat dalam iman dan kasih, 
            melayani dengan dedikasi untuk kemuliaan Tuhan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
              Bergabung Dengan Kami
            </button>
            <button className="border-2 border-white text-white hover:bg-yellow-600 hover:text-white px-8 py-3 rounded-lg transition-colors duration-200">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        {/* Right Side - Logo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src="/pt.png" 
              alt="PT GPIB Immanuel Bung Karno Logo" 
              className="w-72 md:w-96 h-auto drop-shadow-2xl"
            />
            {/* Decorative circle behind logo */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white bg-opacity-30 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 bg-opacity-50 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}