export default function Event() {
    const events = [
        {
            id: 1,
            title: "Ibadah Minggu",
            date: "Setiap Minggu",
            time: "08:00 - 10:00 WIB",
            location: "Sanctuary Utama",
            description: "Ibadah mingguan dengan pujian, doa, dan khotbah firman Tuhan",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            category: "regular"
        },
        {
            id: 2,
            title: "Persekutuan Pemuda",
            date: "Setiap Sabtu",
            time: "19:00 - 21:00 WIB",
            location: "Ruang Pemuda",
            description: "Persekutuan khusus untuk pemuda dengan sharing, games, dan doa bersama",
            image: "https://images.unsplash.com/photo-1519070994358-3da2cb5fd1e2?w=400&h=300&fit=crop",
            category: "regular"
        },
        {
            id: 3,
            title: "Sekolah Minggu",
            date: "Setiap Minggu",
            time: "08:00 - 09:30 WIB",
            location: "Ruang Anak",
            description: "Pembelajaran Alkitab untuk anak-anak dengan metode yang menyenangkan",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
            category: "regular"
        },
        {
            id: 4,
            title: "Retreat Jemaat 2025",
            date: "15-17 Maret 2025",
            time: "2 Hari 3 Malam",
            location: "Puncak, Bogor",
            description: "Retreat tahunan untuk memperdalam iman dan persekutuan jemaat",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            category: "special"
        },
        {
            id: 5,
            title: "Konser Rohani Natal",
            date: "20 Desember 2024",
            time: "19:00 - 21:00 WIB",
            location: "Sanctuary Utama",
            description: "Konser musik rohani untuk memperingati kelahiran Yesus Kristus",
            image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&h=300&fit=crop",
            category: "special"
        },
        {
            id: 6,
            title: "Bakti Sosial",
            date: "Setiap Bulan",
            time: "09:00 - 12:00 WIB",
            location: "Berbagai Lokasi",
            description: "Kegiatan pelayanan kepada masyarakat kurang mampu",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
            category: "community"
        }
    ];

    const regularEvents = events.filter(event => event.category === 'regular');
    const specialEvents = events.filter(event => event.category === 'special');
    const communityEvents = events.filter(event => event.category === 'community');

    return (
        <section id="event" className="py-20 bg-gray-50">
            <div className="container mx-auto px-8 md:px-16">
                {/* Regular Events */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
                        Kegiatan Rutin
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {regularEvents.map((event) => (
                            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={event.image} 
                                    alt={event.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h4>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="w-16 font-medium">Waktu:</span>
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="w-16 font-medium">Jam:</span>
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="w-16 font-medium">Lokasi:</span>
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Special Events */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
                        Acara Khusus
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {specialEvents.map((event) => (
                            <div key={event.id} className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="md:flex">
                                    <img 
                                        src={event.image} 
                                        alt={event.title}
                                        className="w-full md:w-48 h-48 object-cover"
                                    />
                                    <div className="p-6 text-white">
                                        <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                                        <div className="space-y-1 mb-4">
                                            <div className="flex items-center text-sm">
                                                <span className="w-16 font-medium">Tanggal:</span>
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <span className="w-16 font-medium">Durasi:</span>
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <span className="w-16 font-medium">Lokasi:</span>
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-relaxed opacity-90">{event.description}</p>
                                        <button className="mt-4 bg-white text-yellow-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                            Daftar Sekarang
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Community Service */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
                        Pelayanan Masyarakat
                    </h3>
                    <div className="grid md:grid-cols-1 gap-8">
                        {communityEvents.map((event) => (
                            <div key={event.id} className="bg-blue-500 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="md:flex">
                                    <img 
                                        src={event.image} 
                                        alt={event.title}
                                        className="w-full md:w-64 h-48 md:h-auto object-cover"
                                    />
                                    <div className="p-8 text-white flex-1">
                                        <h4 className="text-2xl font-bold mb-4">{event.title}</h4>
                                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                                            <div>
                                                <span className="font-medium block">Frekuensi:</span>
                                                <span className="text-sm opacity-90">{event.date}</span>
                                            </div>
                                            <div>
                                                <span className="font-medium block">Waktu:</span>
                                                <span className="text-sm opacity-90">{event.time}</span>
                                            </div>
                                            <div>
                                                <span className="font-medium block">Lokasi:</span>
                                                <span className="text-sm opacity-90">{event.location}</span>
                                            </div>
                                        </div>
                                        <p className="leading-relaxed opacity-90 mb-6">{event.description}</p>
                                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                            Ikut Berpartisipasi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                        Ingin Bergabung Dengan Kegiatan Kami?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Hubungi kami untuk informasi lebih lanjut tentang jadwal kegiatan 
                        dan cara bergabung dengan komunitas PT GPIB Immanuel Bung Karno.
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                        Hubungi Kami
                    </button>
                </div>
            </div>
        </section>
    );
}