import React, { useState, useRef } from 'react';
import { Camera, X } from 'lucide-react';

const UploadPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file');
    }
  };

  // Handle file drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please drop an image file');
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!selectedImage) {
      alert('Please select an image');
      return;
    }

    if (!description.trim()) {
      alert('Please provide a description');
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For demonstration, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form after successful submission
      setSelectedImage(null);
      setDescription('');
      alert('Report submitted successfully! It is now under review.');
    } catch (error) {
      alert('Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle clearing selected image
  const handleClearImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Report Pollution</h1>
      <div className="bg-white rounded-lg p-4 shadow mb-6">
        <div
          className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center relative"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {selectedImage ? (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-h-64 mx-auto rounded-lg"
              />
              <button
                onClick={handleClearImage}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <>
              <Camera className="mx-auto text-green-500 mb-4" size={48} />
              <p className="text-gray-600 mb-2">
                Drag and drop an image here, or click to select
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                ref={fileInputRef}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Upload Photo
              </button>
            </>
          )}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            className="w-full border rounded-lg p-2"
            rows="4"
            placeholder="Describe the pollution issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className={`w-full py-3 rounded-lg mt-4 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            } text-white transition-colors`}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Report'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;