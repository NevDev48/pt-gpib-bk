import { useState } from 'react';
import { useImageGallery } from '../hooks/useImageGallery';

export default function GalleryAdmin() {
    const { 
        galleries, 
        loading, 
        error, 
        createGallery, 
        updateGallery, 
        deleteGallery,
        clearError 
    } = useImageGallery();

    const [showAddForm, setShowAddForm] = useState(false);
    const [editingGallery, setEditingGallery] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        image: null
    });

    // Handle form submission for creating new gallery
    const handleCreateSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.title || !formData.image) {
            alert('Please fill in all fields');
            return;
        }

        const result = await createGallery(formData.title, formData.image);
        
        if (result.success) {
            setFormData({ title: '', image: null });
            setShowAddForm(false);
            alert('Gallery created successfully!');
        } else {
            alert(`Error: ${result.error}`);
        }
    };

    // Handle form submission for updating gallery
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.title) {
            alert('Please enter a title');
            return;
        }

        const result = await updateGallery(
            editingGallery.id, 
            formData.title, 
            formData.image
        );
        
        if (result.success) {
            setFormData({ title: '', image: null });
            setEditingGallery(null);
            alert('Gallery updated successfully!');
        } else {
            alert(`Error: ${result.error}`);
        }
    };

    // Handle delete gallery
    const handleDelete = async (id, title) => {
        if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
            const result = await deleteGallery(id);
            
            if (result.success) {
                alert('Gallery deleted successfully!');
            } else {
                alert(`Error: ${result.error}`);
            }
        }
    };

    // Start editing
    const startEdit = (gallery) => {
        setEditingGallery(gallery);
        setFormData({
            title: gallery.title,
            image: null
        });
        setShowAddForm(false);
    };

    // Cancel editing
    const cancelEdit = () => {
        setEditingGallery(null);
        setFormData({ title: '', image: null });
    };

    // Handle file change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, image: file }));
    };

    // Get image URL
    const getImageUrl = (imagePath) => {
        if (imagePath?.startsWith('http')) {
            return imagePath;
        }
        return `http://localhost:8000/storage/${imagePath}`;
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">Gallery Management</h1>
                        <button
                            onClick={() => setShowAddForm(!showAddForm)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            {showAddForm ? 'Cancel' : 'Add New Gallery'}
                        </button>
                    </div>
                    
                    {error && (
                        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            <div className="flex justify-between items-center">
                                <span>{error}</span>
                                <button onClick={clearError} className="text-red-500 hover:text-red-700">
                                    ×
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Add/Edit Form */}
                {(showAddForm || editingGallery) && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4">
                            {editingGallery ? 'Edit Gallery' : 'Add New Gallery'}
                        </h2>
                        
                        <form onSubmit={editingGallery ? handleUpdateSubmit : handleCreateSubmit}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter gallery title"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Image {editingGallery && '(leave empty to keep current image)'}
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required={!editingGallery}
                                    />
                                </div>
                            </div>
                            
                            <div className="flex gap-2 mt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg"
                                >
                                    {loading ? 'Processing...' : (editingGallery ? 'Update' : 'Create')}
                                </button>
                                
                                {editingGallery && (
                                    <button
                                        type="button"
                                        onClick={cancelEdit}
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                )}

                {/* Gallery List */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-6 border-b">
                        <h2 className="text-xl font-semibold">Gallery Images ({galleries.length})</h2>
                    </div>
                    
                    {loading && galleries.length === 0 ? (
                        <div className="p-8 text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading galleries...</p>
                        </div>
                    ) : galleries.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            No galleries found. Create your first gallery!
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                            {galleries.map((gallery) => (
                                <div key={gallery.id} className="border rounded-lg overflow-hidden">
                                    <img
                                        src={getImageUrl(gallery.image_path)}
                                        alt={gallery.title}
                                        className="w-full h-48 object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/400x300/eab308/ffffff?text=No+Image';
                                        }}
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-800 mb-2">{gallery.title}</h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Created: {new Date(gallery.created_at).toLocaleDateString('id-ID')}
                                        </p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => startEdit(gallery)}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(gallery.id, gallery.title)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}