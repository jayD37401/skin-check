import React, { useState } from "react";
import docImg from "../../assets/book1.png";

const ProfileSettings = () => {
  const [name, setName] = useState("John Doe");
  const [contactInfo, setContactInfo] = useState("johndoe@example.com");
  const [address, setAddress] = useState("123 Main St, City");
  const [dob, setDOB] = useState("1980-01-01");
  const [profilePicture, setProfilePicture] = useState(docImg);
  const [specialization, setSpecialization] = useState("Cardiology");
  const [qualifications, setQualifications] = useState("MD, PhD");
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [fee, setFee] = useState(100);

  const handleAddAvailability = () => {
    const newAvailability = {
      dayOfWeek: "",
      time: "",
    };
    setAvailability([...availability, newAvailability]);
  };

  const handleDeleteAvailability = (index) => {
    const updatedAvailability = [...availability];
    updatedAvailability.splice(index, 1);
    setAvailability(updatedAvailability);
  };

  const handleAvailabilityChange = (index, field, value) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index][field] = value;
    setAvailability(updatedAvailability);
  };

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

  const handleExperienceAdd = () => {
    const newExperience = {
      position: "",
      institution: "",
      years: "",
    };
    setExperience([...experience, newExperience]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleExperienceDelete = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const handleEducationAdd = () => {
    const newEducation = {
      degree: "",
      school: "",
      years: "",
    };
    setEducation([...education, newEducation]);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleEducationDelete = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  return (
    <div className="h-full bg-white p-4 pt-3 rounded-lg shadow-lg overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-6">Profile Settinsgs</h2>
      <div className="max-w-lg p-2">
        <div className="mb-6">
          <div className="flex  sm:flex-row flex-col  items-center gap-4">
            <img
              className="w-32 h-32 object-cover border border-cyan-400 rounded-full"
              src={profilePicture}
              alt="doctor image"
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
            Contact Information
          </label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
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
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Specialization
          </label>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Qualifications
          </label>
          <input
            type="text"
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Professional Experience
          </h3>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Position"
                value={exp.position}
                onChange={(e) =>
                  handleExperienceChange(index, "position", e.target.value)
                }
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 mt-2"
                placeholder="Institution"
                value={exp.institution}
                onChange={(e) =>
                  handleExperienceChange(index, "institution", e.target.value)
                }
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 mt-2"
                placeholder="Years of Experience"
                value={exp.years}
                onChange={(e) =>
                  handleExperienceChange(index, "years", e.target.value)
                }
              />
              <button
                type="button"
                className="text-red-500 hover:text-red-700 mt-2"
                onClick={() => handleExperienceDelete(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700"
            onClick={handleExperienceAdd}
          >
            Add Experience
          </button>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) =>
                  handleEducationChange(index, "degree", e.target.value)
                }
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 mt-2"
                placeholder="School"
                value={edu.school}
                onChange={(e) =>
                  handleEducationChange(index, "school", e.target.value)
                }
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 mt-2"
                placeholder="Years of Study"
                value={edu.years}
                onChange={(e) =>
                  handleEducationChange(index, "years", e.target.value)
                }
              />
              <button
                type="button"
                className="text-red-500 hover:text-red-700 mt-2"
                onClick={() => handleEducationDelete(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700"
            onClick={handleEducationAdd}
          >
            Add Education
          </button>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Availability</h3>
          {availability.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-2">
                <select
                  value={item.dayOfWeek}
                  onChange={(e) =>
                    handleAvailabilityChange(index, "dayOfWeek", e.target.value)
                  }
                  className="border border-gray-300 rounded p-2"
                >
                  <option value="">Select day of the week</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                <input
                  type="time"
                  value={item.time}
                  onChange={(e) =>
                    handleAvailabilityChange(index, "time", e.target.value)
                  }
                  className="border border-gray-300 rounded p-2"
                />
                <button
                  onClick={() => handleDeleteAvailability(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleAddAvailability}
            className="bg-cyan-500 text-white px-4 py-2 rounded"
          >
            Add Availability
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fee for Appointment
          </label>
          <input
            type="number"
            value={fee}
            onChange={(e) => setFee(parseInt(e.target.value))}
            className="border border-gray-300 rounded-lg p-2 w-full"
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

export default ProfileSettings;
