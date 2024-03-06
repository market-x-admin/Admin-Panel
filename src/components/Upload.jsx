import React, { useState } from "react";


const Upload = ({ title, onFileUpload, register, fieldName }) => {
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image data

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      try {
       
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result.split(",")[1];
      
          setSelectedImage({ base64String, file: selectedFile });
       
          onFileUpload(base64String);
        };
        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Error processing image:", error);
      }
    }
  };

  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        {title}
      </label>
      <input
        {...register(fieldName)}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Upload;