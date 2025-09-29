export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-8 md:px-16">
                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                            Sejarah Gereja Kami
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            PT GPIB Immanuel Bung Karno telah berdiri sejak tahun 1965 sebagai bagian 
                            dari Gereja Protestan di Indonesia bagian Barat (GPIB). Kami berkomitmen 
                            untuk melayani jemaat dengan kasih Kristus dan membangun komunitas yang 
                            saling mengasihi.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Dengan nama yang menghormati sosok Presiden pertama Indonesia, Ir. Soekarno, 
                            gereja kami memiliki semangat nasionalisme yang tinggi sambil tetap setia 
                            pada panggilan Injil Kristus.
                        </p>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                        <img 
                            src="/src/assets/home.jpg" 
                            alt="Church Building" 
                            className="rounded-xl shadow-lg w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="mt-20">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
                            <p className="leading-relaxed">
                                Menjadi gereja yang hidup dalam kasih Kristus, 
                                melayani dengan sukacita, dan menjadi berkat bagi 
                                sesama serta bangsa Indonesia.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
                            <ul className="space-y-2">
                                <li>• Memberitakan Injil Kristus dengan kasih</li>
                                <li>• Membangun persekutuan yang kuat</li>
                                <li>• Melayani masyarakat dengan tulus</li>
                                <li>• Mendidik generasi muda beriman</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
                        Nilai-Nilai Kami
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">K</span>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Kasih</h4>
                            <p className="text-gray-600">Mengasihi Tuhan dan sesama dengan tulus</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">I</span>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Iman</h4>
                            <p className="text-gray-600">Beriman teguh kepada Yesus Kristus</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">P</span>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Pengharapan</h4>
                            <p className="text-gray-600">Berharap pada janji-janji Tuhan</p>
                        </div>
                    </div>
                </div>

                {/* Pengurus */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
                        Pengurus Pelkat PT
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Ketua */}
                        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13.5 7.5C13.1 8.4 12.2 9 11.2 9H8.8C7.8 9 6.9 8.4 6.5 7.5L5 4L-1 7V9H21Z"/>
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-gray-800">Ketua</h4>
                            <p className="text-yellow-600 font-semibold mb-1">Pdt. Dr. John Doe</p>
                            <p className="text-gray-600 text-sm">Memimpin dan mengkoordinir seluruh kegiatan gereja</p>
                        </div>

                        {/* Wakil Ketua */}
                        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13.5 7.5C13.1 8.4 12.2 9 11.2 9H8.8C7.8 9 6.9 8.4 6.5 7.5L5 4L-1 7V9H21Z"/>
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-gray-800">Wakil Ketua</h4>
                            <p className="text-blue-600 font-semibold mb-1">Bpk. Michael Smith</p>
                            <p className="text-gray-600 text-sm">Mendampingi ketua dalam menjalankan tugas</p>
                        </div>

                        {/* Sekretaris */}
                        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-gray-800">Sekretaris</h4>
                            <p className="text-green-600 font-semibold mb-1">Ibu Sarah Johnson</p>
                            <p className="text-gray-600 text-sm">Mengelola administrasi dan dokumentasi gereja</p>
                        </div>

                        {/* Bendahara */}
                        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.8,10.9C9.53,10.31 8.8,9.7 8.8,8.75C8.8,7.66 9.81,6.9 11.5,6.9C13.28,6.9 13.94,7.75 14,9H16.21C16.14,7.28 15.09,5.7 13,5.19V3H10V5.16C8.06,5.58 6.5,6.84 6.5,8.77C6.5,11.08 8.41,12.23 11.2,12.9C13.7,13.5 14.2,14.38 14.2,15.31C14.2,16 13.71,17.1 11.5,17.1C9.44,17.1 8.63,16.18 8.5,15H6.32C6.44,17.19 8.08,18.42 10,18.83V21H13V18.85C14.95,18.5 16.5,17.35 16.5,15.3C16.5,12.46 14.07,11.5 11.8,10.9Z"/>
                                </svg>
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-gray-800">Bendahara</h4>
                            <p className="text-purple-600 font-semibold mb-1">Bpk. David Wilson</p>
                            <p className="text-gray-600 text-sm">Mengelola keuangan dan aset gereja</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}