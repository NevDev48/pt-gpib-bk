import { useEffect, useRef, useState } from 'react';

export default function GoogleMap() {
    const mapRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [useIframe, setUseIframe] = useState(false);
    
    useEffect(() => {
        // Timeout untuk fallback ke iframe jika Google Maps tidak load dalam 3 detik
        const timeoutId = setTimeout(() => {
            if (isLoading) {
                setUseIframe(true);
                setIsLoading(false);
            }
        }, 3000);

        // Koordinat dari link Google Maps: https://maps.app.goo.gl/1WKo4RgC5cNP5rsq8
        // GPIB Immanuel Bung Karno Mataram, Nusa Tenggara Barat
        const coordinates = {
            lat: -8.5913906, // Latitude untuk Mataram, NTB
            lng: 116.1139922  // Longitude untuk Mataram, NTB
        };

        // Initialize Google Map
        const initializeMap = () => {
            if (window.google && mapRef.current) {
                try {
                    const map = new window.google.maps.Map(mapRef.current, {
                        center: coordinates,
                        zoom: 16,
                        mapTypeId: 'roadmap',
                        styles: [
                            {
                                featureType: 'poi',
                                elementType: 'labels',
                                stylers: [{ visibility: 'off' }]
                            }
                        ]
                    });

                    // Add custom marker
                    const marker = new window.google.maps.Marker({
                        position: coordinates,
                        map: map,
                        title: 'GPIB Immanuel Bung Karno Mataram',
                        icon: {
                            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="18" fill="#eab308" stroke="#fff" stroke-width="3"/>
                                    <path d="M20 10 L20 30 M10 20 L30 20" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
                                </svg>
                            `),
                            scaledSize: new window.google.maps.Size(40, 40),
                            anchor: new window.google.maps.Point(20, 20)
                        }
                    });

                    // Add info window
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `
                            <div style="padding: 10px; font-family: Arial, sans-serif;">
                                <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
                                    PT GPIB Immanuel Bung Karno
                                </h3>
                                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                                    Jl. Bung Karno No. 1<br>
                                    Kec. Mataram, Kota Mataram<br>
                                    Indonesia
                                </p>
                                <div style="margin-top: 10px;">
                                    <a href="tel:+622123456789" style="color: #eab308; text-decoration: none; font-size: 14px;">
                                        📞 +62 21 2345 6789
                                    </a><br>
                                    <a href="mailto:info@gpibimmanuel.org" style="color: #eab308; text-decoration: none; font-size: 14px;">
                                        📧 info@gpibimmanuel.org
                                    </a>
                                </div>
                            </div>
                        `
                    });

                    // Show info window on marker click
                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });

                    // Auto-open info window
                    infoWindow.open(map, marker);

                    // Map loaded successfully
                    clearTimeout(timeoutId);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error initializing Google Maps:', error);
                    setUseIframe(true);
                    setIsLoading(false);
                }
            } else {
                // Google Maps API not available, use iframe
                setUseIframe(true);
                setIsLoading(false);
            }
        };

        // Load Google Maps script if not already loaded
        if (!window.google) {
            const script = document.createElement('script');
            // Menggunakan API tanpa key untuk demo (limited functionality)
            script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places&callback=initMap`;
            script.async = true;
            script.defer = true;
            
            // Set global callback
            window.initMap = initializeMap;
            
            script.onerror = () => {
                setUseIframe(true);
                setIsLoading(false);
            };
            
            document.head.appendChild(script);
        } else {
            initializeMap();
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    if (useIframe) {
        return (
            <div className="w-full h-96 rounded-xl shadow-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8019!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMonas%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi PT GPIB Immanuel Bung Karno"
                    className="w-full h-full"
                />
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Map Container */}
            <div 
                ref={mapRef} 
                className="w-full h-96 rounded-xl shadow-lg"
                style={{ minHeight: '400px' }}
            />
            
            {/* Loading overlay */}
            {isLoading && (
                <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading Map...</p>
                        <p className="text-sm text-gray-500 mt-2">Fallback to static map in 3 seconds</p>
                    </div>
                </div>
            )}
        </div>
    );
}
