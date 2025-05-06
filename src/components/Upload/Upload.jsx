
import React, { useRef, useState } from "react";

const UploadMulti = ({ onImagesChange, defaultImages }) => {
  const [images, setImages] = useState([]);
  const inputRef = useRef(null);

  const handleFilesChange = (e) => {
    const selected = Array.from(e.target.files || []);
    const updatedImages = [...images, ...selected];
    setImages(updatedImages);
    onImagesChange?.(updatedImages);
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
    onImagesChange?.(updated);
  };

  return (
    <div className="w-full mt-10 mb-4">
      <h2 className="text-xl font-semibold text-gray-800 my-3">Upload Media</h2>

      {/* Upload box */}
      <div
        onClick={() => inputRef.current?.click()}
        className="flex cursor-pointer flex-col items-center justify-center h-48 border-4 border-dashed border-gray-300 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 transition cursor-po"
      >
        <svg
          className="w-10 h-10 text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <p className="text-gray-600 font-medium">Click to upload</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={handleFilesChange}
        />
      </div>

      {/* Previews */}
      {images.length > 0 && (
        <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {images.map((file, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl border shadow-sm group"
            >
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                onClick={() => removeImage(idx)}
                className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded hover:bg-opacity-80 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadMulti;
