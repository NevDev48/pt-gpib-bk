import { useState, useEffect } from 'react';

// Base API URL - sesuaikan dengan backend Laravel Anda
const API_BASE_URL = 'http://localhost:8000/api/v1/galleries'; // ✅ Updated ke route Laravel yang benar!

// Flag untuk development - set false untuk production
const ENABLE_API = true; // ✅ DIAKTIFKAN - Sekarang akan hit API Laravel!

export const useImageGallery = () => {
    const [galleries, setGalleries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch all galleries
    const fetchGalleries = async () => {
        // Skip API call jika development mode
        if (!ENABLE_API) {
            console.log('API disabled - using static data');
            return;
        }

        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(API_BASE_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            const data = await response.json();

            if (data.success) {
                setGalleries(data.data.data || data.data);
            } else {
                setError(data.message || 'Failed to fetch galleries');
            }
        } catch (err) {
            console.log('API Error:', err.message);
            setError('Tidak dapat terhubung ke server. Periksa apakah Laravel backend sedang berjalan di http://localhost:8000');
        } finally {
            setLoading(false);
        }
    };

    // Create new gallery item
    const createGallery = async (title, imageFile) => {
        if (!ENABLE_API) {
            return { success: false, error: 'API disabled in development mode' };
        }

        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('image', imageFile);

            const response = await fetch(API_BASE_URL, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            const data = await response.json();

            if (data.success) {
                // Add new gallery to the list
                setGalleries(prev => [data.data, ...prev]);
                return { success: true, data: data.data };
            } else {
                setError(data.message || 'Failed to create gallery');
                return { success: false, error: data.message };
            }
        } catch (err) {
            const errorMsg = 'Backend not available';
            setError(errorMsg);
            return { success: false, error: errorMsg };
        } finally {
            setLoading(false);
        }
    };

    // Get single gallery by ID
    const getGallery = async (id) => {
        if (!ENABLE_API) {
            return { success: false, error: 'API disabled in development mode' };
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            const data = await response.json();

            if (data.success) {
                return { success: true, data: data.data };
            } else {
                setError(data.message || 'Gallery not found');
                return { success: false, error: data.message };
            }
        } catch (err) {
            const errorMsg = 'Backend not available';
            setError(errorMsg);
            return { success: false, error: errorMsg };
        } finally {
            setLoading(false);
        }
    };

    // Update gallery
    const updateGallery = async (id, title, imageFile = null) => {
        if (!ENABLE_API) {
            return { success: false, error: 'API disabled in development mode' };
        }

        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            if (title) formData.append('title', title);
            if (imageFile) formData.append('image', imageFile);

            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'POST', // Laravel often uses POST with _method for PUT
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    'X-HTTP-Method-Override': 'PUT', // Laravel method override
                },
            });

            const data = await response.json();

            if (data.success) {
                // Update gallery in the list
                setGalleries(prev => 
                    prev.map(gallery => 
                        gallery.id === id ? data.data : gallery
                    )
                );
                return { success: true, data: data.data };
            } else {
                setError(data.message || 'Failed to update gallery');
                return { success: false, error: data.message };
            }
        } catch (err) {
            const errorMsg = 'Backend not available';
            setError(errorMsg);
            return { success: false, error: errorMsg };
        } finally {
            setLoading(false);
        }
    };

    // Delete gallery
    const deleteGallery = async (id) => {
        if (!ENABLE_API) {
            return { success: false, error: 'API disabled in development mode' };
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            const data = await response.json();

            if (data.success) {
                // Remove gallery from the list
                setGalleries(prev => prev.filter(gallery => gallery.id !== id));
                return { success: true };
            } else {
                setError(data.message || 'Failed to delete gallery');
                return { success: false, error: data.message };
            }
        } catch (err) {
            const errorMsg = 'Backend not available';
            setError(errorMsg);
            return { success: false, error: errorMsg };
        } finally {
            setLoading(false);
        }
    };

    // Clear error
    const clearError = () => {
        setError(null);
    };

    // Auto-fetch galleries on mount (only if API enabled)
    useEffect(() => {
        if (ENABLE_API) {
            fetchGalleries();
        }
    }, []);

    return {
        // State
        galleries,
        loading,
        error,
        
        // Actions
        fetchGalleries,
        createGallery,
        getGallery,
        updateGallery,
        deleteGallery,
        clearError,
        
        // Utility
        totalGalleries: galleries.length,
        hasGalleries: galleries.length > 0,
    };
};

export default useImageGallery;