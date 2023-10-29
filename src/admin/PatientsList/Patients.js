import React, { useState } from "react";
import patientImage from "../../assets/doctor.jpg";

const Patients = () => {
  const [patients, setPatients] = useState([
    {
      id: "#2231",
      patientName: "John Smith",
      age: 30,
      address: "123 Main St, City",
      phone: "555-1234",
      lastVisit: "2023-05-15",
      paid: "$100",
      status: false,
    },
    {
      id: "#223a",
      patientName: "Emma Johnson",
      age: 25,
      address: "456 Oak Ave, Town",
      phone: "555-5678",
      lastVisit: "2023-05-20",
      paid: "$150",
      status: false,
    },
    // Add more patient objects as needed
  ]);

  function toggleStatus(id) {
    setPatients((prevPatients) =>
      prevPatients.map((patient) => {
        if (patient.id === id) {
          return {
            ...patient,
            status: patient.status === "Confirmed" ? "Cancel" : "Confirmed",
          };
        }
        return patient;
      })
    );
  }

  return (
    <div className="bg-white rounded-lg h-full px-4 py-4 sm:px-8 shadow-lg">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700 text-2xl">
            Patients List
          </h2>
          <span className="text-sm text-gray-500">
            View the list of registered patients
          </span>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto w-[70vw]">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
                <th className="px-5 py-3">Patient ID</th>
                <th className="px-5 py-3">Patient Name</th>
                <th className="px-5 py-3">Age</th>
                <th className="px-5 py-3">Address</th>
                <th className="px-5 py-3">Phone</th>
                <th className="px-5 py-3">Last Visit</th>
                <th className="px-5 py-3">Paid</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-nowrap pl-5">{patient.id}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src={patientImage}
                          alt="patient"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-nowrap">
                          {patient.patientName}
                        </p>
                      </div>
                    </div>{" "}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-nowrap">{patient.age}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-nowrap">{patient.address}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-nowrap">{patient.phone}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-nowrap">{patient.lastVisit}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-nowrap">{patient.paid}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <label
                      htmlFor={`status-${patient.id}`}
                      className="flex items-center justify-center cursor-pointer relative"
                    >
                      <input
                        className={`mr-3 mt-[0.3rem] h-5 w-10 appearance-none rounded-[0.6375rem] ${
                          patient.status ? "bg-green-500" : "bg-red-500"
                        } before:pointer-events-none before:absolute before:h-5 before:w-5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-6 after:w-6 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-6 checked:after:w-6 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-6 focus:after:w-6 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]`}
                        type="checkbox"
                        role="switch"
                        onChange={() => toggleStatus(patient.id)}
                        id={`status-${patient.id}`}
                      />
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
