import React, { useState } from "react";
import adminImg from "../../assets/book1.png";

const AdminProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("admin@example.com");
  const [address, setAddress] = useState("123 Main St, City");
  const [dob, setDOB] = useState("1985-05-15");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [profilePicture, setProfilePicture] = useState(adminImg);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const src = e.target.result;
      // Handle file upload logic here
      setProfilePicture(src);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-full bg-white overflow-y-auto p-4 pt-3 sm:pl-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">Profile Settings</h2>
      <div className="max-w- p-2">
        <div className="mb-6">
          <div className="flex sm:flex-row flex-col  items-center gap-4">
            <img
              className="w-32 h-32 object-cover border border-cyan-400 rounded-full"
              src={profilePicture}
              alt="admin image"
            />
            <div className="flex flex-col items-center">
              <label className="relative flex gap-2 items-center justify-center bg-cyan-500 hover:bg-cyan-700 text-white rounded-xl p-2 w-44 cursor-pointer">
                <i className="fa fa-upload"></i>
                Upload photo
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  className="absolute left-0 opacity-0 z-50 w-full cursor-pointer"
                  onChange={handleProfilePictureChange}
                />
              </label>
              <p className="text-sm text-gray-500">
                Accepted formats: PNG, GIF, JPEG
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 w-[80%]">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 w-[80%]">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-[80%]"
          />
        </div>
        <button
          type="button"
          className="bg-cyan-500 hover:bg-cyan-700 w-44 text-white rounded p-2 mt-4"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
