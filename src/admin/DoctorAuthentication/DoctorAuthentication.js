import React, { useState } from "react";
import doctorImage from "../../assets/doctor.jpg";

const DoctorAuthentication = () => {
  const [doctorsData, setDoctorsData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      speciality: "Cardiologist",
      experience: "5 years",
      qualification: "MBBS, MD",
      status: "pending",
    },
    // Add more doctor data here...
  ]);

  const handleAccept = (id) => {
    const updatedDoctors = doctorsData.map((doctor) =>
      doctor.id === id ? { ...doctor, status: "accepted" } : doctor
    );
    setDoctorsData(updatedDoctors);
  };

  const handleReject = (id) => {
    const updatedDoctors = doctorsData.map((doctor) =>
      doctor.id === id ? { ...doctor, status: "rejected" } : doctor
    );
    setDoctorsData(updatedDoctors);
  };

  return (
    <div className="bg-white rounded-lg h-full px-4 py-4 sm:px-8 shadow-lg">
      <div className="pb-8">
        <h2 className="font-semibold text-gray-700 text-2xl">
          Doctor Authentication
        </h2>
        <span className="text-sm text-gray-500">
          Accept or Reject the doctors that have signed up
        </span>
      </div>
      <div className="overflow-x-auto rounded-lg max-w-[72vw] ">
        <table className="w-full">
          <thead>
            <tr className="bg-primary-dark  text-left  text-base uppercase tracking-widest text-white">
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Speciality</th>
              <th className="px-5 py-3">Experience</th>
              <th className="px-5 py-3">Qualification</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {doctorsData.map((doctor) => (
              <tr key={doctor.id}>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                  {doctor.id}
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img
                        className="h-full w-full rounded-full"
                        src={doctorImage}
                        alt="doctor image"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-nowrap">{doctor.name}</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                  <p className="whitespace-nowrap">{doctor.email}</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                  <p className="whitespace-nowrap">{doctor.speciality}</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                  <p className="whitespace-nowrap">{doctor.experience}</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                  <p className="whitespace-nowrap">{doctor.qualification}</p>
                </td>
                <td
                  className={`border-b border-gray-200 bg-white px-5 py-5 text-base ${
                    doctor.status === "pending"
                      ? "text-yellow-500"
                      : doctor.status === "accepted"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {doctor.status}
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                  {doctor.status === "pending" && (
                    <div className="flex items-center justify-end">
                      <button
                        className="text-green-500 bg-green-100 p-1 px-2 rounded-lg hover:text-green-600 mr-2"
                        onClick={() => handleAccept(doctor.id)}
                      >
                        Accept
                      </button>
                      <button
                        className="text-red-500 bg-red-100 p-1 px-2 rounded-lg  hover:text-red-600"
                        onClick={() => handleReject(doctor.id)}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorAuthentication;
