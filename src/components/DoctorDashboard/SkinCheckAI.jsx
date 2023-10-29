import React, { useState } from "react";

const diagnoses = [
  "Melanoma",
  "Basal Cell Carcinoma",
  "Squamous Cell Carcinoma",
  "Dysplastic Nevi",
  "Seborrheic Keratosis",
];

const SkinCheckAI = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    // Simulate diagnosis by randomly selecting one from the diagnoses array
    const randomDiagnosis =
      diagnoses[Math.floor(Math.random() * diagnoses.length)];
    setDiagnosis(randomDiagnosis);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-5  bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl text-primary-dark font-bold mb-4">SkinCheckAI</h1>
      {!selectedImage ? (
        <div className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg">
          <label htmlFor="imageUpload" className="cursor-pointer">
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <span className="text-gray-600">Click to upload an image</span>
          </label>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg">
          <img
            src={selectedImage}
            alt="Uploaded"
            className="mb-4 rounded-lg w-[25vw]"
          />
          <h2 className="text-lg font-bold mb-2">Diagnosis:</h2>
          <p className="text-gray-700">{diagnosis}</p>
        </div>
      )}
    </div>
  );
};

export default SkinCheckAI;
