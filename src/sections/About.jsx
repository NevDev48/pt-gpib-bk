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
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                                <h4 className="text-2xl font-bold text-yellow-600">58+</h4>
                                <p className="text-gray-600">Tahun Melayani</p>
                            </div>
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <h4 className="text-2xl font-bold text-blue-600">500+</h4>
                                <p className="text-gray-600">Anggota Jemaat</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop" 
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
            </div>
        </section>
    );
}