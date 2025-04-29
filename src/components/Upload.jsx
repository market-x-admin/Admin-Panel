import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const Upload = ({ title, onFileUpload, register, fieldName, required }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append(fieldName, selectedFile); // dynamic name

      setSelectedImage(URL.createObjectURL(selectedFile)); // For preview if needed
      onFileUpload(formData);
    }
  };

  return (
    <div className="my-6">
      <p className="mb-2 text-sm font-semibold text-gray-700">{title}</p>
      <label
        htmlFor={fieldName}
        className="flex flex-col items-center justify-center w-full h-[120px]  rounded-lg cursor-pointer "
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <IoCloudUploadOutline size={30} className="text-gray-400" />
          <p className="text-xs text-gray-500 mt-2">Click to upload</p>
        </div>
        <input
        
          id={fieldName}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default Upload;
