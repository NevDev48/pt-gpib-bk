// Static gallery data sebagai fallback ketika API tidak tersedia
// Data ini akan digunakan jika hook useImageGallery gagal fetch dari backend

export const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
        alt: "Church Service 1",
        title: "Sunday Morning Service",
        // Menambahkan created_at untuk konsistensi dengan API response
        created_at: "2024-01-15T10:00:00Z"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=300&fit=crop",
        alt: "Church Service 2", 
        title: "Community Gathering",
        created_at: "2024-01-20T14:30:00Z"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=300&fit=crop",
        alt: "Church Service 3",
        title: "Youth Ministry",
        created_at: "2024-02-05T16:00:00Z"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1519070994358-3da2cb5fd1e2?w=500&h=300&fit=crop",
        alt: "Church Service 4",
        title: "Prayer Meeting",
        created_at: "2024-02-12T19:00:00Z"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=300&fit=crop",
        alt: "Church Service 5",
        title: "Worship Time",
        created_at: "2024-02-18T11:00:00Z"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
        alt: "Church Service 6",
        title: "Bible Study",
        created_at: "2024-02-25T18:30:00Z"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=500&h=300&fit=crop",
        alt: "Church Service 7",
        title: "Evening Service",
        created_at: "2024-03-02T19:30:00Z"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&h=300&fit=crop",
        alt: "Church Service 8",
        title: "Fellowship Time",
        created_at: "2024-03-10T15:00:00Z"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
        alt: "Church Service 9",
        title: "Music Ministry",
        created_at: "2024-03-17T10:30:00Z"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&h=300&fit=crop",
        alt: "Church Service 10",
        title: "Children Ministry",
        created_at: "2024-03-24T09:00:00Z"
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=500&h=300&fit=crop",
        alt: "Church Service 11",
        title: "Family Service",
        created_at: "2024-03-31T11:30:00Z"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop",
        alt: "Church Service 12",
        title: "Special Events",
        created_at: "2024-04-07T17:00:00Z"
    }
];

// Helper function untuk mendapatkan gambar berdasarkan kategori
export const getImagesByCategory = (category) => {
    const categoryMap = {
        'service': [1, 4, 7, 11],
        'youth': [3, 9],
        'community': [2, 8],
        'worship': [5, 6],
        'children': [10],
        'special': [12]
    };
    
    const ids = categoryMap[category] || [];
    return galleryImages.filter(img => ids.includes(img.id));
};

// Helper function untuk mendapatkan gambar terbaru
export const getLatestImages = (count = 6) => {
    return galleryImages
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, count);
};

// Helper function untuk mencari gambar berdasarkan title
export const searchImages = (query) => {
    return galleryImages.filter(img => 
        img.title.toLowerCase().includes(query.toLowerCase()) ||
        img.alt.toLowerCase().includes(query.toLowerCase())
    );
};
